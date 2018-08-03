import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hannah from '@/components/Hannah.vue'
import Orkestra from '@/components/Orkestra.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/hannah',
    	name: 'hannah',
    	component: Hannah
    },
    {
    	path: '/orkestra',
    	name: 'orkestra',
    	component: Orkestra
    }
  ]
})
