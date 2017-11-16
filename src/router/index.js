import Vue from 'vue'
import Router from 'vue-router'

// 组件懒加载，组件会被webpack打包多个js，当路由被访问的时候只加载相应组件js

// App
const App = resolve => require(['@/App'], resolve)

// 通用列表
const commonList = resolve => require(['../components/view/commonList/commonList.vue'], resolve)

// 通用列表-2
const commonListTwo = resolve => require(['../components/view/commonListTwo/commonListTwo.vue'], resolve)


// 项目新建
const creatProject = resolve => require(['../components/view/creatProject/creatProject.vue'], resolve)


// 我的项目
const myProduct = resolve => require(['../components/view/myProduct/myProduct.vue'], resolve)


// 404
const notFound = resolve => require(['@/components/common/notFound.vue'], resolve)
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: App,
			meta: {keepAlive: false, menuId: '01'},
			children: [
				{
					path: '/',
					component: creatProject,
					meta: {keepAlive: false, menuId: '01'}
				},
				{
					path: '/my/product',
					component: myProduct,
					meta: {keepAlive: false, menuId: '02'}
				},
				{
					path: '/common/list',
					component: commonList,
					meta: {keepAlive: false, menuId: '03'}
				},
				{
					path: '/common/list/two',
					component: commonListTwo,
					meta: {keepAlive: false, menuId: '04'}
				}
			]
		},
		{   // 404
			path: '*',
			component: notFound
		}
	]
})
