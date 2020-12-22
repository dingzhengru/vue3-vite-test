<template>
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
  <span>子: {{ title }}</span>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'AppVModelTest',
  props: {
    title: {
      type: String,
      default: () => 'Default',
    },
  },
  setup(props, { emit }) {
    return {};
  },
};
</script>

<style scoped></style>
