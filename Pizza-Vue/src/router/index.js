import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index'
import Contact from '@/components/index/Contact'

import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'

import Order from '@/components/order/Order'
import Custom_Order from '@/components/order/Custom_Order'

import Profile from '@/components/user/Profile'

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
    },
    {
      path: "/order/custom",
      name: "Custom_Order",
      component: Custom_Order
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
})
