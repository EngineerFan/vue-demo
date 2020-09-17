import Vue from 'vue'
import Router from 'vue-router'
import ManagementAnalysis from '@/pages/ManagementAnalysis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ManagementAnalysis',
      component: ManagementAnalysis
    }
  ]
})
