<template>
	<div class="page-header el-border-master">
		<div class="page-title clearfix">
			<span class="span-title">中科院ARP系统</span>
			<div class="page-rights clearfix">
				<div class="pull-left com-left">
					<el-badge :value="20" :max="99" class="item">
						<i class="iconfont icon-xiaoxi font-size-25 el-c-master-lightest"></i>
					</el-badge>
				</div>
				<div class="page-children-right">
					<div class="com-line el-border-master"></div>
					<img src="#" alt="">
					<span>UES Design</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import Vue from 'vue'
	import {Badge} from 'element-ui'
	Vue.use(Badge)
	export default {
		name: 'comHeader',
		components: {},
		data() {
			return {}
		}
	}
</script>

<style scoped rel="stylesheet/sass" lang="sass">
	.com-left
		margin-top: 18px

	.page-children-right
		position: relative
		float: right
		width: 185px
		margin-top: 10px
		span
			margin: 0 0 0 10px
			font-size: 15px
			font-weight: 500
		img
			width: 38px
			height: 38px
			border-radius: 50%
			margin-left: 30px
			display: inline-block
			vertical-align: middle
			background-color: #e1e1e1
		.com-line
			position: absolute
			top: 11px
			left: 0
			height: 20px
			border-left-style: solid
			border-left-width: 1px

	.page-title
		display: block
		height: 60px
		background: #fff url("../../../src/assets/img/logo.png") no-repeat
		.span-title
			display: inline-block
			margin-top: 17px
			margin-left: 201px
			font-size: 20px
			font-weight: bold
		.page-rights
			float: right
			width: 250px
			i
				font-size: 25px
				cursor: pointer
			i:hover
				color: rgb(110, 110, 110)!important

</style>
