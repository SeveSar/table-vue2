import Vue from 'vue';
import VueRouter from 'vue-router';
import router from '@/router/index';
import store from '@/store/index';
import App from './App.vue';
import './assets/scss/main.scss';

import vClickOtside from '@/directives/v-click-otside';

Vue.use(VueRouter);
Vue.directive('click-outside', vClickOtside);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
