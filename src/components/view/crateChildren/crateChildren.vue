<template>
	<div class="crate-children">
		<div class="temp-cb el-c-master-light">
			<span>用车管理 > </span>
			<span class="el-c-primary">中科院力学研究所</span>
		</div>
		<div class="com-select">
			<el-form :inline="true" label-width="50px" onsubmit="return false;">
				<el-form-item>
					<el-button  type="primary" class="m-r-10">提交</el-button>
					<el-button class="m-r-10">暂存</el-button>
					<el-button >取消</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="com-form">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="135px" class="demo-ruleForm">
				<el-form-item label="表名" prop="name" class="com-width">
					<el-input v-model="ruleForm.name" class="w-250" ></el-input>
				</el-form-item>
				<el-form-item label="表描述" class="com-width">
					<el-input v-model="ruleForm.name" class="w-250" ></el-input>
				</el-form-item>
				<el-form-item label="主键描述">
					<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="表单分类">
					<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="表类型">
					<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="PC表单风格">
					<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="移动表单风格">
					<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="显示复选框">
					<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="是否分类">
					<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="是否树">
					<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="查询模式">
					<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</div>
		<div class="com-select1 clearfix m-t-20">
			<div class="clearfix">
				<el-button type="primary" class="m-r-10 pull-left">新建项目</el-button>
				<el-button class="m-r-10 w-80 pull-left">删 除</el-button>
				<el-radio-group v-model="tabPosition" class="com-auto">
					<el-radio-button label="1">暂存项目</el-radio-button>
					<el-radio-button label="2">审批项目</el-radio-button>
					<el-radio-button label="3">主持项目</el-radio-button>
					<el-radio-button label="4">参与项目</el-radio-button>
				</el-radio-group>
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
						label="序号"
						align="center"
						width="120">
						<template slot-scope="scope">{{ scope.row.date }}</template>
					</el-table-column>
					<el-table-column
						prop="name"
						align="center"
						label="字段名称">
					</el-table-column>
					<el-table-column
						prop="address"
						align="center"
						label="字段备注"
						show-overflow-tooltip>
					</el-table-column>
					<el-table-column
						prop="school"
						align="center"
						label="字段长度"
						show-overflow-tooltip>
					</el-table-column>
					<el-table-column
						prop="education"
						align="center"
						label="小数点"
						show-overflow-tooltip>
					</el-table-column>
					<el-table-column
						prop="degree"
						align="center"
						label="默认值"
						show-overflow-tooltip>
					</el-table-column>
					<el-table-column
						prop="major"
						align="center"
						label="字段类型"
						show-overflow-tooltip>
					</el-table-column>
					<el-table-column
						prop="status"
						align="center"
						label="是否允许空值"
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
		<div class="tab-com">

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabPosition: '1',
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					name: [
						{ required: true, message: '请输入活动名称', trigger: 'blur' },
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					region: [
						{ required: true, message: '请选择活动区域', trigger: 'change' }
					],
					date1: [
						{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
					],
					date2: [
						{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }
					],
					type: [
						{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
					],
					resource: [
						{ required: true, message: '请选择活动资源', trigger: 'change' }
					],
					desc: [
						{ required: true, message: '请填写活动形式', trigger: 'blur' }
					]
				},
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
				}]
			}
		},
		methods: {},
		computed: {},
		components: {},
		created() {

		}
	}
</script>
<style rel="stylesheet/sass" lang="sass">
	.crate-children .el-input i
		color: #42a5f5!important
	.crate-children .el-collapse-item__header i
		display: none
	.crate-children
		.el-table__body-wrapper
			.el-table__row
				td:nth-last-child(1)
					.cell
						visibility: hidden!important

	.crate-children
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
	.edit-com
		background-color: #505fee
		color: #fff
	.pagination-com
		text-align: right
		margin-top: 20px
		margin-bottom: 20px

	.table-com
		/*padding: 10px*/
		margin-top: 20px
	.com-form
		background-color: #fff
		margin-top: 20px
		padding: 10px 15px
	.crate-i
		position: absolute
		right: 5px
		top: 9px
		width: 58px
		height: 22px
		background-color: #eaf4fe
		color: #42a5f5
		line-height: 24px
		padding-left: 4px
		font-size: 13px
		border-radius: 3px
		z-index: 100
	.position-r
		position: relative
	.choose-icon
		display: inline-block
		font-size: 20px
		line-height: 20px
		margin-left: 15px
	.com-space
		background-color: #eef1f6
		height: 20px

	.tab-com
		margin-top: 20px

	.temp-cb
		font-size: 12px
		position: absolute
		top: 73px
		left: 100px

	.com-select1
		padding: 10px 15px
		text-align: center
		background-color: #fff
	.com-select
		padding: 10px 15px
		height: 35px
		background-color: #fff

</style>
