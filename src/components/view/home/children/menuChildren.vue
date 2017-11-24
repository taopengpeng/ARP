<template>
	<div class="menu-all clearfix">
		<div class="menu-all-left">
			<div class="menu-body el-border-master">
				<p>功能分组一</p>
				<p>功能一</p>
				<p>功能二</p>
			</div>
			<div class="menu-body el-border-master">
				<p>功能分组二</p>
				<p>功能一</p>
				<p>功能二</p>
				<p>功能三</p>
				<p>功能四</p>
				<p>功能五</p>
			</div>
			<div class="menu-body el-border-master">
				<p>功能分组三</p>
				<p>功能一</p>
				<p>功能二</p>
			</div>
		</div>
		<div class="menu-all-right">
			<div class="menu-body el-border-master">
				<p>功能分组一</p>
				<p>功能一</p>
				<p>功能二</p>
			</div>
			<div class="menu-body el-border-master">
				<p>功能分组二</p>
				<p>功能一</p>
				<p>功能二</p>
				<p>功能三</p>
				<p>功能四</p>
			</div>
			<div class="menu-body el-border-master">
				<p>功能分组三</p>
				<p>功能一</p>
				<p>功能二</p>
				<p>功能三</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {},
		computed: {},
		components: {},
		created() {

		}
	}
</script>
<style scoped rel="stylesheet/sass" lang="sass">
	.menu-body:nth-last-child(1)
		border: none
	.menu-body
		width: 110px
		font-size: 14px
		padding: 10px
		border-bottom-width: 1px
		border-bottom-style: dashed
		p
			margin-top: 0
			margin-bottom: 20px
		p:nth-child(1)
			color: #000
			font-size: 15px
			font-weight: bold
			position: relative
		p:nth-child(1)::before
			content: ''
			position: absolute
			left: -10px
			top: 3px
			width: 0
			height: 14px
			border-left: 3px solid #42a5f5
		p:nth-last-child(1)
			margin-bottom: 10px

	.menu-all-right
		height: 100%
		float: right
		overflow: hidden
	.menu-all-left
		height: 100%
		float: left
		overflow: hidden
	.menu-all:before
		position: absolute
		top: 30px
		left: -5px
		content: " "
		width: 10px
		height: 10px
		background-color: #fff
		transform: rotate(45deg)
	.menu-all
		position: absolute
		top: -25px
		left: 0
		z-index: 99
		width: 290px
		height: 500px
		padding: 10px 15px
		background-color: #fff
		box-shadow: 2px 3px 10px #bbb
		border-radius: 5px
</style>
