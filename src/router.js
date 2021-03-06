import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('@/views/Welcome')
    },
    {
      path: '/ChessBoard',
      name: 'ChessBoard',
      component: () => import('@/views/ChessBoard')
    }
  ]
})
