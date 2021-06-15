import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter); // 플러그인을 실행하기 위해서 초기화하는 코드

export default new VueRouter({
  mode: 'history',
  // VueRouter에 의해 제어되는 라우팅 정보를 담는 배열
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      // component: LoginPage,
      // 코드 스플리팅 : 초기에 전부 가져오는 것이 아니라, url을 이동할 때 마다 필요한 js 파일을 그때 그때 불러옴
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    // 폴백라우터 : 등록되지 않은 url에 반응하는 라우터 처리
    {
      path: '*', // 위에 정의한 url을 제외한 모든 url에 반응하겠다.
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
