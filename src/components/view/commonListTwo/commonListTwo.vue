<template>
	<div class="common-list">
		<div class="temp-cb el-c-master-light">
			<span>用车管理 > </span>
			<span class="el-c-primary">中科院力学研究所</span>
		</div>
		<div class="com-select">
			<el-form :inline="true" label-width="50px" onsubmit="return false;">
				<el-form-item>
					<!--<el-button type="primary">新增</el-button>-->
					<add-people></add-people>
					<el-button>删除</el-button>
					<el-button>下载</el-button>
				</el-form-item>

				<el-form-item class="pull-right">

					<el-input class="w-260 m-r-20" suffix-icon="el-icon-search" placeholder="输入姓名/专业">
						<el-button slot="append"><i  class="cursor iconfont icon-search"></i></el-button>
					</el-input>
					<el-button  type="text" @click="senior" :class="{isCheck: checked}">
						高级<i class="font-size-12 iconfont icon-xiangxia el-icon--right"></i>
						<transition name="tran-an">
							<div v-if="checked" @click.stop class="senior-com el-border-primary">
								<div class="text-left senior-choose clearfix">
									<span class="el-c-master-lightest">性别：</span>
									<p><span  class="isChoose">全部</span><span>男</span><span>女</span></p>
								</div>
								<div class="text-left senior-choose clearfix">
									<span class="el-c-master-lightest">年龄：</span>
									<p><span  class="isChoose">全部</span><span class="isChoose">20及以下</span><span>21-25</span><span>26-30</span><span>31-35</span><span>36-40</span><span class="isChoose">40及以上</span></p>
								</div>
								<div class="text-left senior-choose clearfix">
									<span class="el-c-master-lightest">学历：</span>
									<p><span>全部</span><span class="isChoose">高中</span><span>大专</span><span>大学</span><span>研究生</span></p>
								</div>
								<div class="text-left senior-choose clearfix">
									<span class="el-c-master-lightest">状态：</span>
									<p><span  class="isChoose">全部</span><span class="isChoose">待审核</span><span>已退回</span><span>已通过</span></p>
								</div>
								<span class="up-icon iconfont icon-down-trangle" @click="senior"></span>
							</div>
						</transition>
					</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="next-title">
		</div>

		<div class="table-com">
			<el-table
				ref="multipleTable"
				:data="tableData3"
				tooltip-effect="dark"
				style="width: 100%"
				align="center"
				@selection-change="handleSelectionChange">
				<el-table-column
					type="selection"
					align="center"
					width="55">
				</el-table-column>
				<el-table-column
					label="姓名"
					align="center"
					width="120">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
					prop="name"
					align="center"
					label="性别">
				</el-table-column>
				<el-table-column
					prop="address"
					align="center"
					sortable
					label="出生日期"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					prop="school"
					align="center"
					label="毕业学校"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					prop="education"
					align="center"
					label="学历"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					prop="degree"
					align="center"
					label="学位"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					prop="major"
					align="center"
					label="专业"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					prop="status"
					align="center"
					label="状态"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					align="center"
					label="操作"
					width="200"
				>
					<template slot-scope="scope">
						<el-button
							size="mini" class="edit-com"
							@click="handleEdit(scope.$index, scope.row)"><i class="iconfont icon-bianji"></i></el-button>
						<el-button
							size="mini"
							type="warning"
							class="del-com"
							@click="handleDelete(scope.$index, scope.row)"><i class="iconfont icon-shanchu"></i></el-button>
						<el-button
							size="mini"
							type="info"
							@click="handleDelete(scope.$index, scope.row)"><i class="iconfont icon-xiazai"></i></el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination-com">
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="[100, 200, 300, 400]"
					:page-size="100"
					:small="true"
					layout="total, prev, pager, next, sizes"
					:total="400">
				</el-pagination>
			</div>

		</div>
	</div>
</template>

<script>
	import addPeople from './children/addPeople.vue'
	export default {
		data: function () {
			return {
				aa: '',
				checked: false,
				currentPage: 1,
				params: {
					sex: '1',
					education: '1',
					degree: '1',
					status: '1'
				},
				options: [{
					value: '1',
					label: '男'
				}, {
					value: '2',
					label: '女'
				}],
				degree: [{
					value: '1',
					label: '大学'
				}, {
					value: '2',
					label: '高中'
				}],
				education: [{
					value: '1',
					label: '全部'
				}, {
					value: '2',
					label: '学士'
				}],
				status: [{
					value: '1',
					label: '全部'
				}, {
					value: '2',
					label: '待审核'
				}],
				tableData3: [{
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}, {
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				}],
				multipleSelection: []
			}
		},
		methods: {
			senior() {
				this.checked = !this.checked
			},
			handleSelectionChange() {},
			handleSizeChange() {

			},
			handleCurrentChange() {

			}
		},
		computed: function () {
			return {}
		},
		components: {addPeople},
		mounted: function () {

		},
		created: function () {

		}
	}
</script>
<style rel="stylesheet/sass" lang="sass">
	.common-list
		.el-table__body-wrapper
			.el-table__row
				td:nth-last-child(1)
					.cell
						visibility: hidden!important

	.common-list
		.el-table__body-wrapper
			.el-table__row:hover
				td:nth-last-child(1)
					.cell
						visibility: visible!important

		.el-table__header-wrapper th
			border-right: 1px solid #e1e1e1
			border-bottom: none!important

		.el-table__header-wrapper th:nth-last-child(2)
			border-right: none!important
		.pagination-com .el-pagination__total
			margin-top: -3px

		.pagination-com .el-pagination__sizes
			margin-top: -3px
		.com-select .el-form-item
			margin-bottom: 0 !important
			margin-right: 20px
</style>

<style scoped rel="stylesheet/sass" lang="sass">
	.up-icon
		position: absolute
		bottom: 0
		left: 50%
		margin-left: -24px
		color: #42a5f5
		/*height: 15px*/
		width: 48px
		border-bottom: 15px solid #eff2f7
		border-left: 15px solid transparent
		border-right: 15px solid transparent

	span.up-icon::before
		position: absolute
		left: 16px
		bottom: -15px
	.isChoose
		background-color: #42a5f5
		color: #fff

	.senior-choose
		font-size: 14px
		color: #000
		padding: 7px 0
		>span
			float: left
			padding: 5px 10px
			margin-right: 10px
		p
			float: left
			margin: 0
			span
				display: inline-block
				border-radius: 3px
				padding: 5px 10px
				margin-right: 10px

	.del-com
		background-color: #fb8137
		color: #fff
	.edit-com
		background-color: #505fee
		color: #fff
	.tran-an-enter, .tran-an-leave-to
		transform: translateY(-10px)
		opacity: 0

	.tran-an-enter-active
		transition: all .3s ease
	.tran-an-leave-active
		transition: all .3s ease


	.senior-com:before
		position: absolute
		top: -4px
		right: 20px
		content: " "
		width: 5px
		height: 5px
		background-color: #fff
		border-left: 1px solid #42a5f5
		border-top: 1px solid #42a5f5
		transform: rotate(45deg)
	.senior-com
		position: absolute
		right: 0
		top: 50px
		z-index: 99
		padding: 15px
		width: 610px
		height: 155px
		background-color: #fff
		border-style: solid
		border-width: 1px
		box-shadow: 0px 0px 5px #bbb
		border-radius: 3px

	.isCheck
		position: relative
		i
			transition: transform .3s
			transform: rotate(360deg)
	.common-list
		background-color: #fff
	.temp-cb
		font-size: 12px
		position: absolute
		top: 73px
		left: 100px

	.cursor
		cursor: pointer
	.font-size-12
		font-size: 12px
		transform: rotate(180deg)
	.pagination-com
		text-align: right
		margin-top: 20px
		margin-bottom: 20px

	.w-71
		width: 71px
	.table-com
		padding: 10px

	.next-title
		padding: 10px 0
		background: #e8ebf1

	.icon-com
		width: 20px
		height: 20px
	.w-260
		width: 260px
	.com-select
		padding: 10px 15px
		height: 35px
	.w-70
		width: 70px
</style>
