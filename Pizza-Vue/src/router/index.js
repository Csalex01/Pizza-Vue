import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index'

import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
