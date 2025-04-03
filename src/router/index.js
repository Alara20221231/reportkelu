import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
 {path:'/',name:'ReportKeluView',component: () => import('@/views/ReportKeluView.vue')},
 {path:'/ContatView',name:'ContatView',component: () => import('@/views/ContatView.vue')},
 {path:'/ValuationView',name:'ValuationView',component: () => import('@/views/ValuationView.vue')},
 {path:'/NrView',name:'NrView',component: () => import('@/views/NrView.vue')},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to,) {
    if (to.hash) {
      return {
        el: to.hash, // 滾動到目標 ID
        behavior: 'smooth' // 平滑滾動
      };
    }
    return { top: 0 };
  }
});

export default router
