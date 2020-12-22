<template>
  <ul>
    <li v-for="item in $router.options.routes" :key="item.name">
      <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
};
</script>
