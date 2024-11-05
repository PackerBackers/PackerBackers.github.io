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
      path: '/map',
      name: 'Map',
      component: () => import('../views/MapPage.vue')
    }
  ]
})

export default router
