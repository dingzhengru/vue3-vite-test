<template>
  <h1>useCssVars</h1>
  <p>css 設的變數，可以使用 JS 取得 & 設置，Vue 的這個就是</p>
  <div>
    <div class="text-bg">Text</div>
    <button @click="color == 'red' ? (color = 'gray') : (color = 'red')">改顏色</button>
  </div>
</template>

<script>
import { ref, useCssVars } from 'vue';
export default {
  name: 'UseCssVars',
  setup() {
    const color = ref('gray');
    useCssVars(() => ({
      'main-color': color.value,
    }));

    return { color };
  },
};
</script>

<style scoped>
.text-bg {
  background-color: var(--main-color);
}
</style>
