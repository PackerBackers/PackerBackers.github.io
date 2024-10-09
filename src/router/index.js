import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Uppdatera routes: i denna fil när ni lägger till en ny sida.
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // Use createWebHashHistory
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendsView.vue')
    },
    {
      path: '/chats',
      name: 'chat',
      component: () => import('../views/ChatsView.vue')
    },
    {
      path: '/maps',
      name: 'map',
      component: () => import('../views/MapView.vue')
    }
  ]
})

export default router
