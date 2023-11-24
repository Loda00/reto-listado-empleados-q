import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/LoginView/LoginView.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/ListView/ListView.vue'),
      redirect: '/list/employe',
      beforeEnter:() => {
        const store = useAuthStore()
        if (!store.userAuth.token) return { path: '/' }
        return true
      },
      children: [
        {
          path: '/list/employe',
          name: 'list-employe',
          component: () => import('@/views/ListView/TableEmploye/TableEmploye.vue')
        },
        {
          path: '/list/recriutment',
          name: 'list-recriutment',
          component: () => import('@/views/ListView/Recriutment/Recriutment.vue')
        }
      ]
    }
  ]
})

export default router
