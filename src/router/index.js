import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('@/views/PageIndex.vue'),
    },
    { path: '*', redirect: '/' },
  ],
});

export default router;
