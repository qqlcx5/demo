// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import Home from './components/Home'

// import Users from './components/Users'
// Vue.component('users',Users);
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

const router =new VueRouter({
        routes:[
        {path:'/',component:Home},
        {path:'/hello',component:Hello}
        ],
        mode:'history'
    })

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
  // render:c =>c(App)
  components: { App },
  template: '<App/>'
})
