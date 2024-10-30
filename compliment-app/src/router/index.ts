import { createRouter, createWebHistory } from 'vue-router'
import CompanyView from "@/views/CompanyView.vue";
import { useCompany } from "@/stores/company";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'company',
      component: CompanyView,
      beforeEnter: () => useCompany().fetchCompany(),
    },
    {
      path: '/employee/:id',
      name: 'employee-detail',
      component: () => import('../views/EmployeeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
