<template>
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
  <input type="number" :value="num" @input="$emit('update:num', Number($event.target.value))" />
  <span>子: {{ title }} {{ num }}</span>
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
    num: {
      type: Number,
      default: () => 0,
    },
  },
};
</script>

<style scoped></style>
