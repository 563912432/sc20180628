import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pz from '@/components/Pz'
import txz from '@/components/txz'
import mxz from '@/components/mxz'
import zz from '@/components/zz'
import cwbb from '@/components/cwbb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pz',
      name: 'Pz',
      component: Pz
    },
    {
      path: '/txz',
      name: 'txz',
      component: txz
    },
    {
      path: '/mxz',
      name: 'mxz',
      component: mxz
    },
    {
      path: '/zz',
      name: 'zz',
      component: zz
    },
    {
      path: '/cwbb',
      name: 'cwbb',
      component: cwbb
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
