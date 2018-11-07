import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Topic from '@/components/Topic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic
    }
    
  ]
})
