import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'

import Home from '@/pages/HomePages.vue'
import TentangKami from '@/pages/Profil/TentangKami.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },

      /* ================= PROFIL ================= */
      {
        path: 'profil/tentang-kami',
        name: 'tentang-kami',
        component: TentangKami,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
