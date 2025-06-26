import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SinglePackageView from '@/views/SinglePackageView.vue'
import AddPackageView from '@/views/AddPackageView.vue'

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
    path: '/package/:id',
    name: 'package',
    component: SinglePackageView,
    props: true
  },
  {
    path: '/add-package',
    name: 'add-package',
    component: AddPackageView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
