import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: async () => import('../pages/HomePage.vue'),
  },
  {
    path: '/buat-daftar-tugas',
    name: 'buat-daftar-tugas',
    component: async () => import('../pages/AddTodo.vue'),
  },
  {
    path: '/daftar-tugasku',
    name: 'daftar-tugasku',
    component: async () => import('../pages/TodoList.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: async () => import('../pages/NotfoundPage.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory('/simple-todo/'),
})

router.resolve({
  name: 'not-found',
  params: {
    pathMatch: ['not', 'found'],
  },
}).href

export default router
