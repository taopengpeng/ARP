<template>
	<div class="my-product">
		<div class="temp-cb el-c-master-light">
			<span>会议管理 > </span>
			<span class="el-c-primary">中科院力学研究所</span>
		</div>
		<div class="com-select clearfix">
			<el-button type="primary" class="m-r-10 pull-left">新建项目</el-button>
			<el-radio-group v-model="tabPosition" class="com-auto">
				<el-radio-button label="1">暂存项目</el-radio-button>
				<el-radio-button label="2">审批项目</el-radio-button>
				<el-radio-button label="3">主持项目</el-radio-button>
				<el-radio-button label="4">参与项目</el-radio-button>
			</el-radio-group>
			<el-input class="w-260 pull-right" suffix-icon="el-icon-search" placeholder="输入姓名/专业">
				<el-button slot="append"><i  class="cursor iconfont icon-search"></i></el-button>
			</el-input>
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
					label="项目名称"
					align="center">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
					prop="name"
					align="center"
					label="开始日期">
				</el-table-column>
				<el-table-column
					prop="address"
					align="center"
					label="负责人"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					align="center"
					label="操作"
				>
					<template slot-scope="scope">
						<el-button
							size="mini" class="com-icon-s"
							@click="handleEdit(scope.$index, scope.row)"><i class=" iconfont icon-search "></i></el-button>
						<el-button
							size="mini"
							type="primary"

							@click="handleDelete(scope.$index, scope.row)"><i class="iconfont icon-bianji "></i></el-button>
						<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.$index, scope.row)"><i class="iconfont icon-shanchu"></i></el-button>
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
	export default {
		data: function () {
			return {
				aa: '',
				tabPosition: '1',
				currentPage: '1',
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
					date: '人脸识别APP应用开发',
					name: '2016-05-03',
					address: '王小虎'
				},{
					date: '人脸识别APP应用开发',
					name: '2016-05-03',
					address: '王小虎'
				},{
					date: '人脸识别APP应用开发',
					name: '2016-05-03',
					address: '王小虎'
				},{
					date: '人脸识别APP应用开发',
					name: '2016-05-03',
					address: '王小虎'
				},{
					date: '人脸识别APP应用开发',
					name: '2016-05-03',
					address: '王小虎'
				},{
					date: '人脸识别APP应用开发',
					name: '2016-05-03',
					address: '王小虎'
				}],
				multipleSelection: []
			}
		},
		methods: {
			handleSizeChange() {

			},
			handleCurrentChange() {

			}
		},
		computed: function () {
			return {}
		},
		compontes: {},
		mounted: function () {

		},
		created: function () {

		}
	}
</script>
<style rel="stylesheet/sass" lang="sass">
	.my-product
		.el-table__body-wrapper
			.el-table__row
				td:nth-last-child(1)
					.cell
						visibility: hidden!important

	.my-product
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
	.temp-cb
		font-size: 12px
		position: absolute
		top: 73px
		left: 100px

	.com-icon-s
		background-color: #c03eea
		color: #fff

	.com-auto
		position: absolute
		top: 10px
		left: 50%
		margin-left: -165px

	.cursor
		cursor: pointer
	.font-size-12
		font-size: 12px
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
		position: relative
	.w-70
		width: 70px
</style>
