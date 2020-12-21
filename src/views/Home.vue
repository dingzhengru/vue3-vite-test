<template>
  <h1>Home</h1>
  <h2>Getters</h2>
  <p>count: {{ count }}</p>

  <h2>ref、reactive、readonly</h2>
  ref <input type="text" v-model="name" /> {{ name }} <br />
  reactive <input type="number" v-model.number="user.age" /> {{ user }} <br />
  readonly <input type="text" v-model="nameCopy" /> {{ nameCopy }} <br />

  <h2>computed</h2>
  <input type="number" v-model.number="num1" />
  <input type="number" v-model.number="num2" />
  <span>sum: {{ sum }}</span>

  <h2>watch (user)</h2>
  <span>change count: {{ watchUserChangeCount }}</span>

  <h2>Components</h2>
  <AppButton :text="appButtonText" @get-count="appButtonCountHandler" />
</template>

<script>
import { mapGetters } from 'vuex';
import { ref, reactive, readonly, isProxy, isReactive, isReadonly, toRaw, computed, watch, onMounted } from 'vue';
import AppButton from '/@/components/AppButton.vue';

export default {
  name: 'Home',
  components: { AppButton },
  computed: {
    ...mapGetters(['count']),
  },
  setup() {
    //* Basic Reactivity APIs，https://v3.vuejs.org/api/basic-reactivity.html
    //* ref: https://v3.vuejs.org/api/refs-api.html#ref
    const name = ref('ding');

    //* reactive: https://v3.vuejs.org/api/basic-reactivity.html#reactive
    //* 深度反應性，所以會用於 Object, Array
    const user = reactive({
      name: 'ding',
      age: 25,
    });

    //* readonly: https://v3.vuejs.org/api/basic-reactivity.html#readonly
    const nameCopy = readonly(name);

    //* isProxy: https://v3.vuejs.org/api/basic-reactivity.html#isproxy
    //* Checks if an object is a proxy created by reactive or readonly
    console.log('[isProxy]', isProxy(user), isProxy(nameCopy));

    //* isReactive: https://v3.vuejs.org/api/basic-reactivity.html#isreactive
    //* Checks if an object is a reactive proxy created by reactive
    console.log('[isReactive]', isReactive(user), isReactive(nameCopy));

    //* toRaw: https://v3.vuejs.org/api/basic-reactivity.html#toraw
    //* Returns the raw
    console.log('[toRaw]', toRaw(user) == 'ding', user == 'ding');

    //* computed
    const num1 = ref(1);
    const num2 = ref(2);
    const sum = computed(() => num1.value + num2.value);

    //* watch
    let watchUserChangeCount = ref(0);
    watch(
      () => user,
      (newVal, oldVal) => {
        console.log(oldVal.age, newVal.age, user);
        watchUserChangeCount.value++;
      },
      { deep: true, immediate: false }
    );

    //* hook
    onMounted(() => {
      console.log('onMounted!!');
    });

    //* components
    const appButtonText = ref('AppButton');
    const appButtonCountHandler = count => {
      console.log(count);
    };

    return {
      name,
      user,
      nameCopy,
      num1,
      num2,
      sum,
      watchUserChangeCount,
      appButtonText,
      appButtonCountHandler,
    };
  },
};
</script>

<style></style>
