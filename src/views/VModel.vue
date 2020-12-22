<template>
  <h1>v-model</h1>

  <p>參考: https://v3.vuejs.org/guide/migration/v-model.html#_3-x-syntax</p>
  <p>參考: https://juejin.cn/post/6877383634349719565</p>

  <p>
    當在自定義組件中使用 v-model 時，組件接收一個屬性 modelValue 的值，然後通過觸發 update:modelValue 事件來更新該值
  </p>

  <pre>
    {{
      `
      <custom-comp v-model="msg"></custom-comp>

      <!-- 等價於 -->
      
      <custom-comp :model-value="msg" @update:model-value="msg = $event"></custom-comp>
      ` 
    }}
  </pre>

  <h2>利用 @update:title 事件來更新 pageTitle</h2>
  <div>
    <AppVModelTest v-model:title="pageTitle" /> <br />
    <span>父: {{ pageTitle }}</span>
  </div>

  <h2>綁定多個</h2>
  <div><AppVModelMultiTest v-model:title="pageTitle" v-model:num="pageNum" /></div>
  <span>父: {{ pageTitle }} {{ pageNum }}</span>
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
