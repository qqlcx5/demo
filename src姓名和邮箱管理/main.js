// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'Vue-router'
Vue.use(VueRouter)

import Add from "./components/Add"
import Users from "./components/Users"

const router = new VueRouter({
	mode: "history",
	base: __dirname,
	routes: [
		{ path: '/add', component: Add },
		{ path: '/', component: Users }
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
