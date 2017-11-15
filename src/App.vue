<template>
	<div class="page clearfix">

		<com-header></com-header>

		<left-menu :menuList="menuList" @toggle="toggleSubMenu"
		></left-menu>

		<div class="container">
			<div class="main el-border-master">
				<keep-alive v-if="$route.meta.keepAlive">
					<router-view></router-view>
				</keep-alive>
				<router-view v-else></router-view>
			</div>
		</div>
		<!--<div class="aaa">
			<div class="aaaa">

			</div>
		</div>-->
	</div>
</template>

<script>
	import ComHeader from './components/common/ComHeader'
	import LeftMenu from './components/common/LeftMenu'
	import {MENU_LIST} from '@/assets/js/menu.js'

	export default {
		name: 'app',
		created() {
			// 初始化头部
//             window._initHeader()
			// 初始化面包屑
//             this.initBreadCrumb(this.$route.meta.menuId)
		},
		data() {
			return {
				menuList: MENU_LIST
			}
		},
		components: {
			ComHeader,
			LeftMenu
		},
		methods: {
			// 更新菜单列表，显示/隐藏子菜单
			toggleSubMenu(payload) {
				let mList = this.menuList
				for (let item of mList) {
					if (item.id === payload.id) {
						item.isChildrenHide = !item.isChildrenHide || false
					}
				}
				this.menuList = [...mList]
			}
		}
	}
</script>

<style>
	.aaaa {
		min-height: 500px;
		background: #fff;
	}
	.aaa {
		width: 100%;
		min-width: 1260px;
		padding: 36px 20px 20px 100px;
		background-color: #e8ebf1;
		box-sizing: border-box;
	}
</style>
