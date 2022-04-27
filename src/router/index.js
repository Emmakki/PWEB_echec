import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayView from '../views/PlayView.vue'
import GameView from '../views/GameView.vue'
import ProfileView from '../views/ProfileView.vue'
import RankingView from '../views/RankingView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/play',
    name: 'play',
    component: PlayView
    //component: () => import('../views/AboutView.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/classement',
    name: 'classement',
    component: RankingView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
