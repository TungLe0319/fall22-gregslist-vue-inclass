import { authGuard } from '@bcwdev/auth0provider-client'
import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    //                   v Magic String bananaWord
    path: '/classifieds/:id',
    name: 'Details',
    component: loadPage('DetailsPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/houses',
    name: 'Houses',
    component: loadPage('HousesPage'),
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: loadPage('JobsPage'),
  },


  {
    // NOTE CASE SENSITIVE
    //is the path it sends the user on that page aka .com/cars
    path: '/cars',
    //Must Match 
      //  <router-link :to="{ name: 'Cars' }">  </router-link>
    name: 'Cars',
    // Must Match CarsPage.vue File Name
    component: loadPage('CarsPage'),
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
