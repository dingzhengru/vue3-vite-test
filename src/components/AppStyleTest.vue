<template>
  <button>
    <slot> default </slot>
  </button>
</template>

<script>
export default {
  name: 'AppStyleTest',
};
</script>

<style scoped>
::v-slotted(span) {
  font-style: italic;
  font-weight: bold;
  background: gray;
}
</style>
