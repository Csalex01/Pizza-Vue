import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index'

import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'

import Order from '@/components/order/Order'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      props: true
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
    },
    {
      path: "/order",
      name: "Order",
      component: Order
    }
  ]
})
