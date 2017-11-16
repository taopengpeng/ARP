<template>
	<div class="com-home">
		<div class="com-top clearfix">
			<div class="com-top-left">
				<div class="com-top-left-top">
					1
				</div>
				<div class="com-top-left-bottom clearfix">
					<div class="com-top-left-bottom-left">
						2
					</div>
					<div class="com-top-left-bottom-right">
						3
					</div>
				</div>
			</div>
			<div class="com-top-right">
				4
			</div>
		</div>
		<div class="com-bottom clearfix">
			<div class="com-bottom-left">
				1
			</div>
			<div class="com-bottom-con">
				2
			</div>
			<div class="com-bottom-right">
				3
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


	.com-bottom-right
		flex: 20.7
		background-color: #fff
		height: 305px
	.com-bottom-con
		flex: 39.65
		background-color: #fff
		margin-right: 20px
		height: 305px
	.com-bottom-left
		flex: 39.65
		background-color: #fff
		margin-right: 20px
		height: 305px
	.com-bottom
		margin-top: 20px
		width: 100%
		display: flex
	.com-top-left-bottom
		display: flex
		margin-top: 20px
	.com-top-left-bottom-right
		flex: 48.8
		height: 305px
		background-color: #fff
	.com-top-left-bottom-left
		flex: 61.2
		margin-right: 20px
		height: 305px
		background-color: #fff
	.com-top-right
		flex: 20.5
		background-color: #fff
		height: 475px
	.com-top-left
		flex: 79.5
		margin-right: 20px

	.com-top-left-top
		background-color: #fff

		height: 150px

	.com-top
		display: flex
	.com-home
		width: 100%
</style>
