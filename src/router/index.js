import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyModal from '@/components/MyModal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/modal',
      name: 'MyModal',
      component: MyModal
    }
  ],
  mode: 'history'
})
