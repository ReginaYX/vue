// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vuejs，在node_modules下的vue的package.json
// 引入App.vue,配合export default或export使用
// 引入router 导出交给router变量以供下面使用
import Vue from 'vue'
import App from './App'
import router from './router'

// 上线版的控制台中和产品相关的提示
Vue.config.productionTip = false

// const hello = {
//   template: '<div>hello</div>'
// }
// const world = {
//   template: '<div>world</div>'
// }
/* eslint-disable no-new */
new Vue({
  el: '#app', // 挂载点
  router,
  components: {App}, // 当前组件所依赖的其他组件，键值相同可简写，全写是{APP：App}
  template: '<App/>' // 使用组件，组件由html、css、js组成
  // render (h) {
  //   if (window.location.hash === '#/') {
  //     return h(hello)
  //   } else if (window.location.hash === '#/world') {
  //     return h(world)
  //   }
  // }
})
