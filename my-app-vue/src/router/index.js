import { createRouter, createWebHistory } from 'vue-router'
import SignInComponent from '@/components/SignInComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
      {
        path: '/',
        name: 'home',
        component: () => import('@/components/Home.vue')
      },
      {
        path: '/sign-in',
        name: 'sign-in',
        component: SignInComponent
      }
  ],
})

export default router
