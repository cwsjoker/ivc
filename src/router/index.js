import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import pagination_demo from '../vue/Pagination_demo.vue'
import jumppage_demo from '../vue/Jumppage_demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/pagination_demo',
    	name: 'pagination_demo',
    	component: pagination_demo
    },
    {
      path: '/jumppage_demo',
      name: 'jumppage_demo',
      component: jumppage_demo
    }
  ]
})
