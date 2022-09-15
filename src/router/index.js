import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound404 from '../views/NotFound404.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetail from '../views/jobs/JobDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'jobDetail',
    component: JobDetail, 
    props: true
  }, 
  // redirect
  {
    path: '/all-jobs', //example
    redirect: '/jobs'
  }, 
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound404',
    component: NotFound404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
