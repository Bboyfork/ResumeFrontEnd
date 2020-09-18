// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

import demo from '@/components/demo.vue'

import Feng from '@/components/Feng.vue'
import fork from '@/components/Fork.vue'
import LiuLin from '@/components/LiuLin.vue'

import router from './router/index.js'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#ForkTest',
//   router,
//   components: { 'ForkTest':ForkTest },
//   template: '<ForkTest/>'
// })
new Vue({
  el: '#demo',
  router,
  components: { 'demo':demo },
  template: '<demo/>'
})
