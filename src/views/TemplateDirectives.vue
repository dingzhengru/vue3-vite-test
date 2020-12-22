<template>
  <h1>v-model</h1>

  <p>參考: https://v3.vuejs.org/guide/migration/introduction.html#template-directives</p>

  <p>關於模板指令(#Template Directives)，改變的點</p>

  <h2>key 在 template 上的使用改變，key 可以直接放在 template 元素上就好</h2>

  <pre>
    {{ `<!-- Vue 2.x -->
    <template v-for="item in list">
      <div :key="item.id">...</div>
      <span :key="item.id">...</span>
    </template>
    ` }}
  </pre>

  <pre>
    {{ `<!-- Vue 3.x -->
    <template v-for="item in list" :key="item.id">
      <div>...</div>
      <span>...</span>
    </template>
    ` }}
  </pre>

  <h2>
    v-if, v-for 優先級更改，可以放於同一個元素上了，但不推薦(precedence when used on the same element has changed)
  </h2>

  <h2>v-bind="object" 會有順序性了(is now order-sensitive)</h2>

  <pre>
    {{ `<!-- template -->
    <div id="red" v-bind="{ id: 'blue' }"></div>
    <!-- result -->
    <div id="blue"></div>

    <!-- template -->
    <div v-bind="{ id: 'blue' }" id="red"></div>
    <!-- result -->
    <div id="red"></div>` 
    }}
  </pre>

  <h2>v-on:event.native modifier 已移除，改成不需要此修飾符號即可運作</h2>
</template>

<script>
import { ref } from 'vue';
import AppVModelTest from '/@/components/AppVModelTest.vue';
import AppVModelMultiTest from '/@/components/AppVModelMultiTest.vue';

export default {
  name: 'Home',
  components: { AppVModelTest, AppVModelMultiTest },
  setup() {
    const pageTitle = ref('v-model test');
    const pageNum = ref(1);
    return { pageTitle, pageNum };
  },
};
</script>

<style></style>
