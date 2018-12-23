import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
import Counter from '@/components/Counter'

Vue.use(Router)

export default new Router({
  // mode:'hash',
  // mode:'history',
  routes: [
    {
      path:'/',
      name:'Counter',
      component:Counter
    },
    {
      path: '/goods',
      name: 'GoodsList',
      components: {
        default: GoodsList,
        title: Title,
        img: Image
      },
      children: [
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'img',
          name: 'img',
          component: Image
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    }
  ]
})
