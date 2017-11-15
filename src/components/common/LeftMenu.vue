<template>
	<div class="left-menu el-border-master">
		<div class="menu-com sp-menu">
			<div class="menu-com-body">
				<i class="iconfont icon-caidan"></i>
			</div>
		</div>
		<div v-for="(item,i) in menuList" :key="item.id" :class="{'menu-com': true,'active-check': isRouterMatch(item.id)}"  @click="jump(item.link, item.id)">
			<div class="menu-com-body">
				<!--<i :class="item.iconObj"></i>-->
				<i :class="item.icon" class="iconfont"></i>
				<span>{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true
			}
		},
		props: {
			// 菜单列表
			menuList: {
				type: Array,
				required: true
			}
		},
		computed: {

		},
		methods: {
			// 是否匹配当前路由
			isRouterMatch(id) {
				return this.$route.meta.menuId === id
			},
			// 显示/隐藏子菜单
			toggleSubMenu(id) {
				this.$emit('toggle', {id: id})
				this.isShow = !this.isShow
			},
			// 跳转
			jump(link, id) {
				this.$router.push(link)
				this.$emit('initBreadCrumb', id)

			}
		}
	}
</script>

<style scoped rel="stylesheet/sass" lang="sass">
	.sp-menu
		height: 60px!important
		box-shadow: 0px 5px 5px #062ea2
		.menu-com-body
			height: 20px!important
			margin-top: -10px


	.active-check
		background-color: #125ed1
		i
			color: #09fffd

	.menu-com:hover
		background-color: #125ed1
		i
			color: #09fffd


	.menu-com-body
		position: absolute
		top: 50%
		left: 50%
		margin-top: -20px
		margin-left: -30px
		width: 60px
		height: 40px
		text-align: center
		span
			display: inline-block
			font-size: 14px
			margin-top: 3px
		i
			display: block
			font-size: 22px
			line-height: 18px
			margin: 0 auto

	.menu-com
		color: #fff
		width: 80px
		height: 80px
		position: relative
		cursor: pointer

	.left-menu
		background: -webkit-linear-gradient(top, #0839b1, #0070cf) !important

	.a-hover
		border-left-color: #42a5f5 !important
		background-color: #fafcff !important

</style>
