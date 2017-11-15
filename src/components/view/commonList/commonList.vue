<template>
	<div class="common-list">
		<div class="temp-cb el-c-master-light">
			<span>用车管理 > </span>
			<span class="el-c-primary">中科院力学研究所</span>
		</div>
		<div class="com-select">
			<el-form :inline="true" label-width="50px" onsubmit="return false;">
				<el-form-item label="性别:">
					<el-select class="w-71" v-model="params.sex">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="学位:">
					<el-select class="w-71" v-model="params.degree">
						<el-option
							v-for="item in degree"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="学历:">
					<el-select class="w-71" v-model="params.education">
						<el-option
							v-for="item in education"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="状态:">
					<el-select class="w-100" v-model="params.status">
						<el-option
							v-for="item in status"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button class="m-r-10">清空</el-button>
					<el-button class="m-r-10" type="primary">查询</el-button>
					<el-button  type="text">高级<i class="font-size-12 iconfont icon-xiangxia el-icon--right"></i></el-button>
				</el-form-item>

				<el-form-item class="pull-right">
					<el-input class="w-260" suffix-icon="el-icon-search" placeholder="输入姓名/专业">
						<el-button slot="append"><i  class="cursor iconfont icon-search"></i></el-button>
					</el-input>
				</el-form-item>
			</el-form>
		</div>

		<div class="next-title">
			<el-button type="primary">新增</el-button>
			<el-button>删除</el-button>
			<el-button>下载</el-button>
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
							size="mini" type="primary"
							@click="handleEdit(scope.$index, scope.row)"><i class="iconfont icon-bianji"></i></el-button>
						<el-button
							size="mini"
							type="warning"

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
	export default {
		data: function () {
			return {
			    aa: '',
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
	.temp-cb
		font-size: 12px
		position: absolute
		top: 73px
		left: 100px

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
	.w-70
		width: 70px
</style>
