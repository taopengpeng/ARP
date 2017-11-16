<template>
	<div class="add-people">
		<el-button type="primary" @click="centerDialogVisible = true">新增</el-button>
		<el-dialog
			title="选择人员"
			:visible.sync="centerDialogVisible"
			width="300px"
			custom-class="recommendTemplate-cmp-dialog"
			center>
			<div class="tpl-tab clearfix">
				<el-input class="w-300 pull-right" suffix-icon="el-icon-search" placeholder="搜索机构名称/姓名/身份证号">
					<el-button slot="append"><i  class="cursor iconfont icon-search"></i></el-button>
				</el-input>
			</div>
			<div class="com-con-body clearfix">
				<div class="com-con-part pull-left">
					<el-tree :data="data" highlight-current :props="defaultProps" @node-click="handleNodeClick"></el-tree>

				</div>
				<div class="com-con-part pull-right">
					<el-table
						:show-header="false"
						ref="multipleTable"
						:data="tableData3"
						tooltip-effect="dark"
						style="width: 100%"
						align="center"
						@selection-change="handleSelectionChange">
						<el-table-column
							type="selection"
							align="center"
							width="50">
						</el-table-column>
						<el-table-column
							label="姓名"
							align="center"
							width="70px">
							<template slot-scope="scope">{{ scope.row.date }}</template>
						</el-table-column>
						<el-table-column
							prop="name"
							align="center"
							label="性别">
						</el-table-column>
					</el-table>
				</div>
			</div>
			<div>
				<span>已选人员列表</span>
				<div>
					<div class="com-people-del">
						<span class="m-r-5">张三</span>
						<i class="com-icon-del iconfont icon-shanchu-copy"></i>
					</div>
					<div class="com-people-del">
						<span class="m-r-5">李四</span>
						<i class="com-icon-del iconfont icon-shanchu-copy"></i>
					</div>
					<div class="com-people-del">
						<span class="m-r-5">王小虎</span>
						<i class="com-icon-del iconfont icon-shanchu-copy"></i>
					</div>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
			<el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
			<el-button @click="centerDialogVisible = false">取 消</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				centerDialogVisible: false,
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				data: [
					{
						label: '研究总院',
						children: [{
							label: '科技处'
						}]
					}, {
						label: '分院',
						children: [{
							label: '财务处',
							children: [{
								label: '三级 2-1-1'
							}]
						}]
					}
				],
				tableData3: [{
					date: '王小虎',
					name: '（男 - 21000019790913000）'
				},{
					date: '王小虎',
					name: '（男 - 21000019790913000）'
				},{
					date: '王小虎',
					name: '（男 - 21000019790913000）'
				},{
					date: '王小虎',
					name: '（男 - 21000019790913000）'
				},{
					date: '王小虎',
					name: '（男 - 21000019790913000）'
				}]
			}
		},
		methods: {
			handleNodeClick() {

			}
		},
		computed: {},
		components: {},
		created() {

		}
	}
</script>
<style rel="stylesheet/sass" lang="sass">
	.add-people
		.recommendTemplate-cmp-dialog
			width: 660px
		.el-dialog__header
			background-color: #42a5f5
			padding: 10px 20px
			line-height: 20px
			span
				color: #fff!important
			button
				i:hover
					color: #fff
		.el-dialog__body
			padding: 10px 20px

		.el-tree
			background-color: transparent
			border: none
		.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content
			background-color: #e2f1ff
			color: #42a5f5
		.el-tree-node__expand-icon
			position: relative
			width: 12px
			height: 12px
			border: 1px solid #42a5f5
		.el-tree-node__expand-icon:before
			position: absolute
			top: 5px
			left: 2px
			content: ' '
			width: 6px
			border: 1px solid #42a5f5
		.el-tree-node__expand-icon.expanded
			transform: rotate(0deg)

		.el-table__body-wrapper
			.el-table__row
				background-color: #f2f6fa
				td:nth-last-child(1)
					.cell
						visibility: visible!important
				td
					.cell
						padding-left: 0px
						padding-right: 0px
		.el-dialog__footer
			border-top: 1px dashed rgb(209, 218, 229)
</style>
<style scoped rel="stylesheet/sass" lang="sass">
	.com-icon-del:active
		color: #e64242
	.com-icon-del
		color: #fd5757
		cursor: pointer
	.com-people-del
		display: inline-block
		width: 85px
		height: 30px
		line-height: 30px
		border-radius: 3px
		background-color: #f2f6fa
		text-align: center
		margin-right: 18px
		margin-bottom: 5px
	.com-con-part
		width: 300px
		height: 400px
		border-radius: 3px
		background-color: #f2f6fa
		border: 1px solid rgb(209, 218, 229)
		overflow-y: auto
	.com-con-body
		width: 100%
		margin-top: 10px
	.add-people
		display: inline-block
		margin-right: 10px
</style>
