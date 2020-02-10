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
      auth: false,
      component: Index,
      meta: {
        title: "Home",
        metaTagss: [{
          name: 'description',
          content: 'The Home page of Pizza Vue'
        }]
      },
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: "Login",
        metaTagss: [{
          name: 'description',
          content: 'The Login page of Pizza Vue'
        }]
      },
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      auth: false,
      meta: {
        title: "Signup",
        metaTagss: [{
          name: 'description',
          content: 'The Signup page of Pizza Vue'
        }]
      },
      component: Signup
    },
    {
      path: "/order",
      name: "Order",
      auth: false,
      meta: {
        title: "Order",
        metaTagss: [{
          name: 'description',
          content: 'The Order page of Pizza Vue'
        }]
      },
      component: Order,
    },
    {
      path: "/order/custom",
      name: "Custom_Order",
      auth: true,
      meta: {
        title: "Custom Order",
        metaTagss: [{
          name: 'description',
          content: 'The Custom Order page of Pizza Vue'
        }]
      },
      component: Custom_Order
    },
    {
      path: "/profile",
      name: "Profile",
      auth: true,
      meta: {
        title: "Profile",
        metaTagss: [{
          name: 'description',
          content: 'Your Profile page'
        }]
      },
      component: Profile
    },
    {
      path: "/contact",
      name: "Contact",
      auth: false,
      meta: {
        title: "Contact",
        metaTagss: [{
          name: 'description',
          content: 'The Contact page of Pizza Vue'
        }]
      },
      component: Contact
    }
  ]
})
