<template>
  <h1>Style</h1>
  <h2>::v-slotted</h2>
  <p>slot 的內容是屬於父組件的，這時候我們可以使用 ::v-slotted 在組件裡設置 slot 的 style</p>

  <AppStyleTest>
    <span>測試</span>
  </AppStyleTest>

  <h2>::v-global</h2>
  <p>可以在 style scoped 宣告一個全域的樣式。</p>

  <h2>::v-deep 寫法稍微改變</h2>
  <p>將樣式穿透至子元素</p>

  <code> ::v-deep { .v-input {} } 改成 ::v-deep(.v-input) {} </code>
</template>

<script>
import { ref, useCssVars } from 'vue';
import AppStyleTest from '/@/components/AppStyleTest.vue';
export default {
  name: 'Style',
  components: { AppStyleTest },
  setup() {},
};
</script>

<style scoped>
/* ::v-global(#app) {} */
</style>
