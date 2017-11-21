<template>
	<div class="my-product">
		<div class="temp-cb el-c-master-light">
			<span>会议管理 > </span>
			<span class="el-c-primary">中科院力学研究所</span>
		</div>

		<div class="clearfix p-bt-5 bg-ff">
			<el-col :span="6" class="m-t-2 ">
				<el-button class="btn-def btn-act">通过</el-button>
				<el-button class="btn-def">驳回</el-button>
				<el-button class="btn-def">下载</el-button>
		</el-col>
			<el-col :span="18" >
				<div>
					<el-form :inline="true" :span="20" class="textr" label-width="50px" onsubmit="return false;">
						<el-form-item class="m-b-0" label="学位:">
							<el-select class="w-100" v-model="params.degree">
								<el-option
									v-for="item in degree"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>

						<el-form-item class="m-b-0" label="状态:">
							<el-select class="w-100" v-model="params.status">
								<el-option
									v-for="item in status"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item class="m-b-0">
							<el-button class="m-r-10" type="primary">查询</el-button>
						</el-form-item>

						<el-form-item class="m-b-0">
							<el-input class="w-260" suffix-icon="el-icon-search" placeholder="输入姓名/专业">
								<el-button slot="append"><i  class="cursor iconfont icon-search"></i></el-button>
							</el-input>
						</el-form-item>

						<el-form-item class="m-b-0">
							<el-button  type="text" @click="senior" :class="{isCheck: checked}">
								高级<i class="font-size-12 iconfont icon-xiangxia el-icon--right"></i>
								<transition name="tran-an">
									<div v-if="checked" @click.stop class="senior-com el-border-primary">
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
											</el-form-item>

										</el-form>
									</div>
								</transition>

							</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
		</div>

		<div class="clearfix ">
				<el-col :span="4">
					<div class=" bg-ff">
						<el-tree
							:data="treeData"
							node-key="id"
							:props="defaultProps"
							:default-expand-all="false">
						</el-tree>
					</div>
				</el-col>
				<el-col :span="20" style="float: right;width: 82%" class="el-tree">
					<div class="bg-ff">
						<el-table
						ref="multipleTable"
						:data="tableData3"
						tooltip-effect="dark"
						style="width: 100%"
						align="center"
						@select="haschange"
						:highlight-current-row = "true">
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
							style="padding: 0 !important;"
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
								<el-button style=" background-color: #13ce66;border-color: #13ce66;"
									size="mini" type="primary"
									@click="handleEdit(scope.$index, scope.row)"><i class="iconfont icon-xuanzhong"></i></el-button>
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
					</div>
				</el-col>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				checked: false,
				params: {
					degree: '1',
					status: '1'
				},
				degree: [{
					value: '1',
					label: '大学'
				}, {
					value: '2',
					label: '高中'
				}],
				status: [{
					value: '1',
					label: '状态1'
				}, {
					value: '2',
					label: '状态2'
				}],
				treeData: [{
					id: 1,
					label: '中科院',
					children: [{
						id: 4,
						label: '力学研究所',
						children: [{
							id: 9,
							label: '科技处'
						}, {
							id: 10,
							label: '工程科技处'
						}, {
							id: 11,
							label: '博士后'
						}, {
							id: 10,
							label: '测试部门'
						}, {
							id: 10,
							label: '其他人员'
						}]
					},{
						id: 5,
						label: '人力资源部',
						children: [{
							id: 9,
							label: '科技处'
						}, {
							id: 10,
							label: '工程科技处'
						}, {
							id: 11,
							label: '博士后'
						}, {
							id: 10,
							label: '测试部门'
						}, {
							id: 10,
							label: '其他人员'
						}]
					},{
						id: 5,
						label: '财务部',
						children: [{
							id: 9,
							label: '科技处'
						}, {
							id: 10,
							label: '工程科技处'
						}, {
							id: 11,
							label: '博士后'
						}, {
							id: 10,
							label: '测试部门'
						}, {
							id: 10,
							label: '其他人员'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
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
				},{
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				},{
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				},{
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				},{
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				},{
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				},{
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				},{
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				},{
					date: '王小虎',
					name: '男',
					address: '2016-05-03',
					school: '北京大学',
					education: '大学',
					degree: '硕士',
					major: '计算机网络',
					status: '待审核'
				},{
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
		methods: {
			senior() {
				this.checked = !this.checked
			},
			handleSizeChange() {

			},
			handleCurrentChange() {

			},
			haschange(selection, row) {
				console.log();
			}
		},
		computed: function () {
			return {}
		},
		compontes: {

		},
		mounted: function () {

		},
		created: function () {

		}
	}
</script>
<style rel="stylesheet/sass" lang="sass">
	.font-size-12
		font-size: 12px
		transform: rotate(180deg)
	.el-tree-node__content:hover
		border-radius: 3px
	.cell
		padding: 0 !important
	.w-71
		width: 71px
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
		padding: 5px
		z-index: 99
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
	.bg-ff
		.el-table__body-wrapper
			.el-table__row
				td:nth-last-child(1)
					.cell
						visibility: hidden!important
	.bg-ff
		.el-table__body-wrapper
			.el-table__row:hover
				td:nth-last-child(1)
					.cell
						visibility: visible!important
	.el-tree-node__expand-icon
		border: none
		width: 15px
		height: 15px
		speak: none
		font-style: normal
		font-weight: 400
		font-variant: normal
		text-transform: none
		line-height: 1
		vertical-align: sub
		display: inline-block
		font-size: 25px
		color: #42a5f5
		-webkit-font-smoothing: antialiased
	.el-tree-node__expand-icon
		background: url("images/jia.png") no-repeat
	.el-tree-node__expand-icon.expanded
		background: url("images/jian.png") no-repeat
	.el-tree-node__expand-icon.expanded
		transform: rotate(0deg)
		background: url("images/jian.png") no-repeat
	.el-tree-node__expand-icon.is-leaf
		background: url("images/jian.png") no-repeat
	.is-current
		background: #f3f3f3
		color: #42a5f5
		border-radius: 3px
	.el-tree
		padding: 0 5px
	.el-checkbox__inner
		width: 12px
		height: 12px
	.el-checkbox__inner::after
		height: 6px
		left: 2px
	.el-tree-node__label
		font-size: 12px
</style>

<style scoped rel="stylesheet/sass" lang="sass">
	.boder_1
		margin: 0 2px
		border-radius: 3px
		overflow: hidden
		border: 1px solid #42a5f5
	.el-radio-button__inner
		color: #42a5f5 !important
	.temp-cb
		font-size: 12px
		position: absolute
		top: 73px
		left: 100px
	.my-product
		background: #e8ebf1
		min-height: 500px
	.el-radio-button__inner
		color: #42a5f5
	.textr
		text-align: right
	.m-b-0
		margin-bottom: 0
	.p-bt-5
		padding: 5px 3px
	.bg-ff
		background: #fff
		margin-bottom: 10px
	.m-t-2
		margin-top: 2px
		padding-left: 5px
	.el-tree
		min-height: 450px
	.btn-def
		color: #42a5f5
		border-color: #42a5f5
	.btn-act
		color: #fff
		background-color: #42a5f5
		border-color: #42a5f5

</style>
