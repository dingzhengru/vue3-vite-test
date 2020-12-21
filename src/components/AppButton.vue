<template>
  <button @click="buttonClickHandler">{{ text }}</button>
  {{ count }}
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      default: () => 'DefaultText',
    },
  },
  emits: {
    'get-count': payload => {
      // 此處可以認證資料，正確就回傳 true，讓事件傳遞出去
      console.log('[AppButton]', '[get-count]', payload);
      return true;
    },
  },
  setup(props, { emit, root }) {
    const count = ref(0);
    const buttonClickHandler = () => {
      count.value++;
      emit('get-count', count.value);
    };
    return {
      count,
      buttonClickHandler,
    };
  },
};
</script>

<style scoped></style>
