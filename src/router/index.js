import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import ShowDetail from '../components/ShowDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/show/:id', component: ShowDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
