import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router'
// TableEmploye

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
      beforeEnter:(to, from) => {
        const store = useAuthStore()
        console.log('router');
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
    },
    // {
    //   path: '/list-employes',
    //   name: 'list-employes',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/ListEmployes/ListEmployes.vue'),
      
    // }
  ]
})

router.beforeEach(async(to, from, next) => {
  console.log('to, from ', to, from);
  
  next()
})

export default router
