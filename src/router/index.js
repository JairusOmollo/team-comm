import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../components/LoginForm.vue'
import MyProps from '../components/MyProps.vue'
import CreateProp from '../components/CreateProp.vue'
import UserDashboard from '../views/UserDashboard.vue'
import Timeline from '../views/Timeline.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
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
