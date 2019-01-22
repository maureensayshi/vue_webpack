import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hellotwo from '@/components/Hello2'
import List from '@/components/List'


Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/2',
      name: 'Hellotwo',
      component: Hellotwo
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
  ]
})
