import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../components/LoginForm.vue'
import MyProps from '../components/MyProps.vue'
import CreateProp from '../components/CreateProp.vue'
import UserDashboard from '../views/UserDashboard.vue'
import Profile from '../views/Profile.vue'
import Timeline from '../views/Timeline.vue'
import Projects from '../components/Projects.vue'
import Notify from '../components/Notify.vue'
import Pulse from '../components/Pulse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline,  
      children: [
        {
          path: 'projects',
          name: 'projects',
          component: Projects
        },
        {
          path: 'pulse',
          name: 'pulse',
          component: Pulse
        },
        {
          path: 'notify',
          name: 'notify',
          component: Notify
        },
      ]
    },
    {
      path: '/userdashboard',
      name: 'userdashboard',
      component: UserDashboard,
      children: [
        {
          path: 'my-proposals',
          component: MyProps
        },
        {
          path: 'create-proposal',
          component: CreateProp
        }
      ]

    }
    
  ]
})

export default router
