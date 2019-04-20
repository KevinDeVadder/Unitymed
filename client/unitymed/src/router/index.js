import Vue from 'vue'
import Router from 'vue-router'

import Quiz from '@/components/Quiz/index'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Register from '@/components/Register/index'
import UserStory from '@/components/UserStory'
import MedicList from '@/components/Medic/MedicList'
import AccessDenied from '@/components/AccessDenied'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/accessdenied',
      name: 'Denied',
      component: AccessDenied
    },

    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
      meta:{
        requiresAuth: true,
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { 
        requiresAuth: true,
        sys_admin : true
      }
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
    {
      path: '/home',
      name: 'UserStory',
      component: UserStory

    },
    {
      path: '/medlist',
      name: 'MedicList',
      component: MedicList

    }
  ]
})


router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
        next({name: 'Login'})
    } 
    else {
      let user = JSON.parse(localStorage.getItem('user'))

      if(to.matched.some(record => record.meta.sys_admin)){
        if(user.status == 2){
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