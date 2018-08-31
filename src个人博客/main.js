// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//设置resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//设置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Routes from './routes'

const router = new VueRouter({
	routes:Routes,	
	mode:'history'
})
// 自定义指令
// Vue.directive('rainbow', {
//   bind(el, binding, ) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8)

//   }
// })

// 自定义过滤器
// Vue.filter("uppercase",(value)=>{
// 	return value.toUpperCase()
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
