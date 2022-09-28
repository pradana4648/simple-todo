import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => import('../pages/HomePage.vue'),
  },
  {
    path: '/buat-daftar-tugas',
    component: async () => import('../pages/AddTodo.vue'),
  },
  {
    path: '/daftar-tugasku',
    component: async () => import('../pages/TodoList.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
