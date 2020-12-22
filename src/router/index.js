import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('/@/views/Home.vue')),
  },
  {
    path: '/v-model',
    name: 'VModel',
    component: defineAsyncComponent(() => import('/@/views/VModel.vue')),
  },
  {
    path: '/template-directives',
    name: 'TemplateDirectives',
    component: defineAsyncComponent(() => import('/@/views/TemplateDirectives.vue')),
  },
  {
    path: '/use-css-vars',
    name: 'UseCssVars',
    component: defineAsyncComponent(() => import('/@/views/UseCssVars.vue')),
  },
  {
    path: '/style',
    name: 'Style',
    component: defineAsyncComponent(() => import('/@/views/Style.vue')),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
