import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'projects',
      component: Projects
    },
    {
      path: '/',
      name: 'resume',
      component: Resume
    },
    {
      path: '/',
      name: 'contact',
      component: Contact
    }
  ]
})
