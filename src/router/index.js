import Vue from 'vue'
import Router from 'vue-router'
import Registered from '@/components/registered'
import First from '@/components/first'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', 
      component: First,
       meta: {
        title: '首页'
      }
     },
    { path: '/Order', 
      component: HelloWorld,
      meta: {
        title: '注册'
      } 
    },
    { path: '/news',
    component: Registered,
      meta: {
            title: '新闻'
          } 
       },
    { path: '/registered',
    component: Registered,
      meta: {
              title: '我的'
            }
      }
  ]
})
