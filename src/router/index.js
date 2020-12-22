import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/views/Home.vue'),
  },
  {
    path: '/v-model',
    name: 'VModel',
    component: () => import('/@/views/VModel.vue'),
  },
  {
    path: '/template-directives',
    name: 'TemplateDirectives',
    component: () => import('/@/views/TemplateDirectives.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
