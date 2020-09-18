import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'

import Feng from '@/components/Feng.vue'
import Fork from '@/components/Fork.vue'
import LiuLin from '@/components/LiuLin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Feng',
      name: 'Feng',
      component: Feng
    },
    {
      path: '/Fork',
      name: 'Fork',
      component: Fork
    },
    {
      path: '/LiuLin',
      name: 'LiuLin',
      component: LiuLin
    }
  ]
})
