import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD

import Login from '@/components/Login'
import Register from '@/components/Register'

import AccessDenied from '@/components/AccessDenied'
=======
import Login from '@/components/Login'
>>>>>>> 5a484c0fd9792a054cf9d4cdb7304258affa7d23

Vue.use(Router)

let router =  new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '*',
      redirect: '/login',
    },
    {
      path: '/accessdenied',
      name: 'Denied',
      component: AccessDenied
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        guest: true
      }
    },
=======
      path: '/',
      name: 'Login',
      component: Login
    }
>>>>>>> 5a484c0fd9792a054cf9d4cdb7304258affa7d23
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
        next({name: 'Login'})
    } 
    else {
      let user = JSON.parse(localStorage.getItem('user'))
      if(to.matched.some(record => record.meta.school_admin)) {
        if(user.status == 2 || user.status == 3){
          next()
        }
        else{
          next({ name: 'Denied'})
        }
      }
      else if(to.matched.some(record => record.meta.sys_admin)){
        if(user.status == 3){
          next()
        }
        else{
          next({ name: 'Denied'})
        }
      }
      else {
        next()
      }
    }
  }
  else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') === null){
      next()
    }
    else{
      next({ name: 'groups'})
    }
  }
  else {
    next() 
  }
})

export default router