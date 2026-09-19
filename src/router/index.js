import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AquamenaPrivacyPolicyView from '../views/aquamena/PrivacyPolicyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-root',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aquamena/privacy-policy',
      name: 'aquamena-privacy-policy',
      component: AquamenaPrivacyPolicyView
    },
  ]
})

export default router
