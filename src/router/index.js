import Vue from 'vue'
import Router from 'vue-router' // dist/vue-router.common.js
import index from '@/pages/index'
import product from '@/pages/product'
import detail from '@/pages/detail'
import login from '@/pages/login'
import register from '@/pages/register'
import mine from '@/pages/mine'
import account from '@/pages/mine/account'
import editaccount from '@/pages/mine/editaccount'
import address from '@/pages/mine/address'
import favorite from '@/pages/mine/favorite'
import review from '@/pages/mine/review'
import order from '@/pages/mine/order'
import cart from '@/pages/cart'
import addressAdd from  '@/pages/mine/addressAdd'

Vue.use(Router)
// 利用render组件根据不同hosh值发送不同组件
// export default可让别的页面通过import引入
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/product/:id',
      name: 'product',
      component: product
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: 'account', component: account },
        { path: 'editaccount', component: editaccount },
        // ...其他子路由
        { path: 'address', component: address },
        { path: 'addressAdd', component: addressAdd },
        { path: 'review', component: review },
        { path: 'favorite', component: favorite },
        { path: 'order', component: order }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
