import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router, //vue instance에 연결
}).$mount('#app');
