<template>
	<div class="com-home">
		<menu-children></menu-children>
		<div class="com-top clearfix">
			<div class="com-top-left">
				<div class="com-top-left-top">
					<i class="com-icon el-c-master-lightest iconfont icon-xitong1"></i>
					<div class="com-title ">
						<div class="clearfix com-title-part after-r">
							<b class="part-b-1">
								<i class="iconfont icon-pending"></i>
							</b>
							<p>12</p>
							<span class="el-c-master-light">代办工作</span>
						</div>
					</div>
					<div class="com-title ">
						<div class="clearfix com-title-part after-r">
							<b class="part-b-2"><i class="iconfont icon-meeting"></i></b>
							<p>10</p>
							<span class="el-c-master-light">我的会议</span>
						</div>
					</div>
					<div class="com-title ">
						<div class="clearfix com-title-part after-r">
							<b  class="part-b-3"><i class="iconfont icon-qianshou-shixin"></i></b>
							<p>08</p>
							<span class="el-c-master-light">我的审批</span>
						</div>
					</div>
					<div class="com-title ">
						<div class="clearfix com-title-part">
							<b class="part-b-4"><i class="iconfont icon-che"></i></b>
							<p>05</p>
							<span class="el-c-master-light">我的用车</span>
						</div>
					</div>
				</div>
				<div class="com-top-left-bottom clearfix">
					<div class="com-top-left-bottom-left">
						<i class="com-icon iconfont icon-gengduo el-c-master-lightest"></i>
						<div class="notice-title el-border-master">
							<i class="color-notice iconfont icon-tongzhi"></i>
							<span>通知公告</span>
						</div>
						<div>
							<div class="notice-content el-border-master">
								<span>08.04</span>
								<span>【公告】 广州能源所2017年上半年度科研岗位招聘启事</span>
							</div>
							<div class="notice-content el-border-master">
								<span>08.06</span>
								<span>【公告】 广州能源所2017年上半年度科研岗位招聘启事</span>
								<i class="com-icon iconfont icon-lianjie el-c-master-lightest"></i>
							</div>
							<div class="notice-content el-border-master">
								<span>08.08</span>
								<span>【公告】 广州能源所2017年上半年度科研岗位招聘启事</span>
							</div>
							<div class="notice-content el-border-master">
								<span>08.10</span>
								<span>【公告】 广州能源所2017年上半年度科研岗位招聘启事</span>
								<i class="com-icon iconfont icon-lianjie el-c-master-lightest"></i>
							</div>
							<div class="notice-content el-border-master">
								<span>08.12</span>
								<span>【公告】 广州能源所2017年上半年度科研岗位招聘启事</span>
							</div>
							<div class="notice-content el-border-master">
								<span>08.14</span>
								<span>【公告】 广州能源所2017年上半年度科研岗位招聘启事</span>
							</div>

						</div>
					</div>
					<div class="com-top-left-bottom-right">
						<i class="com-icon iconfont icon-bianji el-c-master-lightest"></i>
						<div class="notice-title el-border-master">
							<i class="iconfont icon-rili color-date"></i>
							<span>我的日程</span>
						</div>
						<div class="com-date">
						</div>
						<div>
							<div class="com-date-info">
								<span>10:30</span>
								<span>参加青年学术</span>
							</div>
							<div class="com-date-info">
								<span>11:30</span>
								<span>吃饭</span>
							</div>
							<div class="com-date-info">
								<span>14:30</span>
								<span>飞贵阳的飞机</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="com-top-right">
				<i class="com-icon iconfont icon-xitong1 el-c-master-lightest"></i>
				<div class="notice-title el-border-master">
					<i class="color-use iconfont icon-yingyongzhongxin-on"></i>
					<span>常用应用</span>
				</div>
				<div class="com-use">
					<div class="com-use-body">
						<i class="icon-baoxiao"></i>
						<p class="el-c-master-light">报销</p>
					</div>
					<div class="com-use-body">
						<i class="icon-kaoqin"></i>
						<p class="el-c-master-light">考勤</p>
					</div>
					<div class="com-use-body">
						<i class="icon-huiyi"></i>
						<p class="el-c-master-light">会议室</p>
					</div>
					<div class="com-use-body">
						<i class="icon-che"></i>
						<p class="el-c-master-light">用车</p>
					</div>
					<div class="com-use-body">
						<i class="icon-xiangmuku"></i>
						<p class="el-c-master-light">项目库</p>
					</div>
					<div class="com-use-body">
						<i class="icon-jiekuan"></i>
						<p class="el-c-master-light">借款</p>
					</div>
					<div class="com-use-body">
						<i class="icon-peixun"></i>
						<p class="el-c-master-light">我的培训</p>
					</div>
					<div class="com-use-body">
						<i class="icon-zhuanli"></i>
						<p class="el-c-master-light">我的专利</p>
					</div>
				</div>
			</div>
		</div>
		<div class="com-bottom clearfix">
			<div class="com-bottom-left">
				<el-tabs type="card" v-model="cordOne">
					<el-tab-pane name="1">
						<span slot="label">国家项目（12）</span>
						<div class="country-pro clearfix">
							<div class="country-pro-img">
							</div>
							<div class="pull-right w-135">
								<div class="country-pro-data">
									<span class="country-title el-c-master-lightest">预算总额</span>
									<p><span>6,800.00</span><span>万元</span></p>
								</div>
								<div class="country-pro-data">
									<span class="country-title el-c-master-lightest">资金到位</span>
									<p><span>3,000.00</span><span>万元</span></p>
								</div>
								<div class="country-pro-data">
									<span class="country-title el-c-master-lightest">项目执行</span>
									<p><span>208.75</span><span>万元</span></p>
								</div>
							</div>

						</div>
                      </el-tab-pane>
					<el-tab-pane name="2" label="中科院项目（8）">中科院项目（8）</el-tab-pane>
					<el-tab-pane name="3" label="其它项目（22）">其它项目（22）</el-tab-pane>
				</el-tabs>
			</div>
			<div class="com-bottom-con">
				<i class="com-icon iconfont icon-gengduo el-c-master-lightest"></i>
				<el-tabs type="card" v-model="cordTwo">
					<el-tab-pane name="1">
						<span slot="label">科研动态</span>
						科研动态
					</el-tab-pane>
					<el-tab-pane name="2" label="学术交流">
						<div class="learn-com clearfix">
							<div class="learn-top clearfix">
								<img src="../../../assets/img/renwu.png" alt="">
								<div class="learn-top-right">
									<h4>日本稻盛和夫到访中科院</h4>
									<span class="el-c-master-lightest">2017-11-12</span>
									<p class="el-c-master-lightest">11月29日，这个页面写的好烦，这个页面写的好烦，这个页面写的好烦
									，这个页面写的好烦，这个页面写的好烦
									</p>
								</div>
							</div>
							<div class="learn-bottom">
								<p class="clearfix">
									电子所首次参加珠海会展
									<span class="el-c-master-lightest">2017-09-11</span>
								</p>
								<p class="clearfix">
									电子所首次参加珠海会展
									<span class="el-c-master-lightest">2017-09-11</span>
								</p>
								<p class="clearfix">
									电子所首次参加珠海会展
									<span class="el-c-master-lightest">2017-09-11</span>
								</p>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane name="3" label="党群动态">党群动态</el-tab-pane>
				</el-tabs>
			</div>
			<div class="com-bottom-right">
				<i class="com-icon iconfont icon-xitong1 el-c-master-lightest"></i>
				<div class="notice-title el-border-master">
					<i class="color-use iconfont icon-yingyongzhongxin-on"></i>
					<span>常用应用</span>
				</div>
				<div class="com-use">
					<div class="com-use-body">
						<i class="icon-baoxiao"></i>
						<p class="el-c-master-light">报销</p>
					</div>
					<div class="com-use-body">
						<i class="icon-kaoqin"></i>
						<p class="el-c-master-light">考勤</p>
					</div>
					<div class="com-use-body">
						<i class="icon-huiyi"></i>
						<p class="el-c-master-light">会议室</p>
					</div>
					<div class="com-use-body">
						<i class="icon-che"></i>
						<p class="el-c-master-light">用车</p>
					</div>
					<div class="com-use-body">
						<i class="icon-xiangmuku"></i>
						<p class="el-c-master-light">项目库</p>
					</div>
					<div class="com-use-body">
						<i class="icon-jiekuan"></i>
						<p class="el-c-master-light">借款</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import menuChildren from './children/menuChildren.vue'
	export default {
		data() {
			return {
				cordOne: '1',
				cordTwo: '2'
			}
		},
		methods: {},
		computed: {},
		components: {menuChildren},
		created() {

		}
	}
</script>
<style scoped rel="stylesheet/sass" lang="sass">
	.learn-bottom
		p
			cursor: pointer
			font-size: 14px
			span
				float: right
	.learn-top
		display: flex
		height: 130px
		img
			flex: 2

	.w-135
		width: 135px
	.learn-top-right
		flex: 5
		margin-left: 10px
		span
			font-size: 14px
			display: inline-block
			margin-top: 5px
		p
			font-size: 14px
	.country-title
		font-size: 14px
	.country-pro-data
		display: inline-block
		width: 140px
		margin-bottom: 20px
		p
			margin: 5px 0 0 0
			span:nth-child(1)
				font-size: 26px
				font-weight: bold
			span:nth-child(2)
				color: #ffa422

	.country-pro-img
		float: left
		width: 270px
		height: 227px
		background: url(../../../assets/img/tubiao.png) no-repeat
		background-size: 100% 100%
	.country-pro

	.icon-zhuanli
		background: url(../../../assets/img/zhuanli.png) no-repeat
		background-size: 100% 100%
	.icon-peixun
		background: url(../../../assets/img/peixun.png) no-repeat
		background-size: 100% 100%
	.icon-jiekuan
		background: url(../../../assets/img/jiekuan.png) no-repeat
		background-size: 100% 100%
	.icon-xiangmuku
		background: url(../../../assets/img/xiangmuku.png) no-repeat
		background-size: 100% 100%
	.icon-che
		background: url(../../../assets/img/che.png) no-repeat
		background-size: 100% 100%
	.icon-huiyi
		background: url(../../../assets/img/huiyi.png) no-repeat
		background-size: 100% 100%
	.icon-kaoqin
		background: url(../../../assets/img/kaoqin.png) no-repeat
		background-size: 100% 100%
	.icon-baoxiao
		background: url(../../../assets/img/baoxiao.png) no-repeat
		background-size: 100% 100%
	.com-use-body
		i
			display: inline-block
			width: 34px
			height: 34px
			margin-top: 20px
		p
			margin: 5px 0 0 0
			font-size: 16px
	.com-use
		width: 100%
		display: flex
		flex-wrap: wrap
		.com-use-body
			cursor: pointer
			flex: 1
			width: 33.3%
			min-width: 33.3%
			max-width: 33.3%
			height: 100px
			text-align: center
	.com-date-info
		font-size: 14px
		height: 27px
		padding-top: 7px
		span:nth-child(1)
			color: #2f94f5
		span:nth-child(2)
			margin-left: 10px
	.com-date
		height: 153px
		width: 100%
		background: url(../../../assets/img/rili.png) no-repeat
		background-size: 100% 100%
		margin: 6px 0 0 0
	.color-use
		color: #ea803a
	.color-notice
		color: #42a5f5
	.color-date
		color: #15ca8f
	.notice-content
		height: 43px
		overflow: hidden
		position: relative
		border-bottom-style: dashed
		border-bottom-width: 1px
		cursor: pointer
		span:nth-child(1)
			display: inline-block
			width: 40px
			height: 17px
			padding: 6px 10px
			margin-top: 6px
			border-radius: 3px
			background-color: #f7fafc
			border: 1px solid #dcdcdc
		span:nth-child(2)
			font-size: 14px
	.notice-title
		padding-bottom: 8px
		border-bottom-width: 1px
		border-bottom-style: solid
		i
			font-size: 18px
			vertical-align: middle
		span
			font-size: 16px
			margin-left: 5px
	.com-icon
		position: absolute
		top: 14px
		right: 14px
		font-size: 16px
		cursor: pointer
		z-index: 999
	.part-b-4
		background-color: #7382aa
		i
			font-size: 25px
			margin-top: 16px
	.part-b-3
		background-color: #8e6cd0
		i
			font-size: 29px
			margin-top: 13px
	.part-b-2
		background-color: #5c74d8
		i
			font-size: 29px
			margin-top: 13px
	.part-b-1
		background-color: #ea803a
		i
			font-size: 29px
			margin-top: 15px
	.after-r:after
		position: absolute
		top: 30px
		right: 0
		content: ''
		height: 90px
		border-right: 1px dashed #DCDCDC

	.com-title
		flex: 1
		position: relative
		text-align: center
		b
			float: left
			width: 60px
			height: 60px
			border-radius: 50%
			color: #f5f5f5
			i
				display: inline-block
				width: 29px
				height: 29px
		p
			padding-left: 80px
			margin: 5px 0 5px 0
			font-size: 30px
			text-align: left
			line-height: 25px
			font-weight: bold
		span
			margin-left: 10px
			font-size: 16px
		.com-title-part
			width: 160px
			margin-top: 45px
			display: inline-block
			cursor: pointer
	.com-bottom-right
		flex: 20.8
		background-color: #fff
		border-radius: 5px
		box-shadow: 1px 1px 15px #d9d9d9
		position: relative
		padding: 10px
		height: 285px
	.com-bottom-con
		flex: 39.6
		background-color: #fff
		border-radius: 5px
		box-shadow: 1px 1px 15px #d9d9d9
		margin-right: 20px
		position: relative
		padding: 10px
		height: 285px
	.com-bottom-left
		flex: 39.6
		background-color: #fff
		border-radius: 5px
		box-shadow: 1px 1px 15px #d9d9d9
		margin-right: 20px
		position: relative
		padding: 10px
		height: 285px
	.com-bottom
		margin-top: 20px
		width: 100%
		display: flex
	.com-top-left-bottom
		display: flex
		overflow: hidden
		margin-top: 20px
	.com-top-left-bottom-right
		flex: 48.8
		height: 285px
		padding: 10px 10px
		border-radius: 5px
		box-shadow: 1px 1px 15px #d9d9d9
		background-color: #fff
		position: relative
	.com-top-left-bottom-left
		flex: 61.2
		margin-right: 20px
		height: 285px
		padding: 10px 10px
		border-radius: 5px
		box-shadow: 1px 1px 15px #d9d9d9
		background-color: #fff
		position: relative
	.com-top-right
		flex: 20.5
		background-color: #fff
		border-radius: 5px
		position: relative
		box-shadow: 1px 1px 15px #d9d9d9
		height: 455px
		padding: 10px
	.com-top-left
		flex: 79.5
		margin-right: 20px

	.com-top-left-top
		display: flex
		position: relative
		background-color: #fff
		border-radius: 5px
		box-shadow: 1px 1px 15px #d9d9d9
		height: 150px

	.com-top
		display: flex
	.com-home
		width: 100%
		position: relative
</style>
