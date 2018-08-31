import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/components/home/home'
import Member from '@/components/member/member'
import Shopcart from '@/components/shopcart/shopcart'
import Search from '@/components/search/search'
import newsList from '@/components/news/newsList'
import newsDetail from '@/components/news/newsDetail'
import Goods from '@/components/goods/goods'

export default new Router({
	mode: 'history',
	linkActiveClass: "mui-active",
	routes: [
		{ path: '/', redirect: { name: 'home' } },
		{ name: 'home', path: '/', component: Home },
		{ name: 'member', path: '/member', component: Member },
		{ name: 'shopcart', path: '/shopcart', component: Shopcart },
		{ name: 'search', path: '/search', component: Search },
		{ name: 'newslist', path: '/newlist', component: newsList },
		{ name: 'newsDetail', path: '/newsDetail', component: newsDetail },
		{ name: 'goods', path: '/goods', component: Goods }
	]
})
