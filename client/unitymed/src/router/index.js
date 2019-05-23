import Vue from 'vue'
import Router from 'vue-router'

import Quiz from '@/components/Quiz/index'


import Dashboard from '@/components/Dashboard/index'

import Login from '@/components/Login'
import Register from '@/components/Register/index'

import Chat from '@/components/Chat/index'

import UserProfile from '@/components/UserProfile'

import MedicStory from '@/components/MedicStory'

import MedicalHistory from '@/components/MedicalHistory'

import MedicalHistoryMed from '@/components/MedicalHistoryMed'

import MedicList from '@/components/Medic/MedicList'

import AccessDenied from '@/components/AccessDenied'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
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
      path: '/patient',
      name: 'UserStory',
      component: UserProfile,
      meta: { 
        requiresAuth: true,
      }
    },
    {
      path: '/history',
      name: 'ClientHistory',
      component: MedicalHistory,
      meta: { 
        requiresAuth: true,
      }
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
      path: '/medic',
      name: 'medic',
      component: MedicStory,
      meta: { 
        requiresAuth: true,
      }
    },

    {
      path: '/historymed',
      name: 'MedicalHistory',
      component: MedicalHistoryMed,
      meta: { 
        requiresAuth: true,
      }
    },
    {
      path: '/medlist',
      name: 'MedicList',
      component: MedicList,
      meta: { 
        requiresAuth: true,
      }
    },


    {
      path: '/chat/:id',
      name: 'Chat',
      component: Chat,
      meta:{
        requiresAuth: true,        
      }
    }
  ]
})

//TODO: Add medic and user roles
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
      next({ name: 'UserStory'})
    }
  }
  else {
    next() 
  }
})

export default router