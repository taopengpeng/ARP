<template>
	<div class="crate-project">
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
		<div class="tab-com">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item name="1">
					<template slot="title">
						<span class="iconfont icon-zhiboquyubofang m-r-5 el-c-primary"></span>
						<div class="tab-com-span-1">基本信息</div>
						<div class="tab-com-span-2">（必填）</div>
						<div class="choose-icon iconfont icon-xuanzhong el-c-master-lightest"></div>
					</template>

					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="135px" class="demo-ruleForm">
						<el-form-item label="保密级别" prop="region">
							<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="项目名称" class="com-width" prop="name">
							<el-input v-model="ruleForm.name" class="w-250" ></el-input>
						</el-form-item>
						<el-form-item label="项目简介" >
							<el-input v-model="ruleForm.name" class="w-250"></el-input>
						</el-form-item>
						<el-form-item label="承担部门" require>
							<el-input v-model="ruleForm.name" icon="more" class="w-250"></el-input>
						</el-form-item>
						<el-form-item label="项目来源 （大类）" require>
							<el-input v-model="ruleForm.name" icon="more" class="w-250"></el-input>
						</el-form-item>
						<el-form-item label="项目来源 （小类）" >
							<el-input v-model="ruleForm.name" icon="more" class="w-250"></el-input>
						</el-form-item>
						<el-form-item label="项目编码 （所）" class="position-r">
							<span class="crate-i">自动生成</span>
							<el-input v-model="ruleForm.name" class="w-250"></el-input>
						</el-form-item>
						<el-form-item label="上级项目合同号" >
							<el-input v-model="ruleForm.name" icon="more" class="w-250"></el-input>
						</el-form-item>
						<el-form-item label="项目级别" prop="region">
							<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="参与属性" prop="region">
							<el-select v-model="ruleForm.region" class="w-250" placeholder="请选择">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="开始时间" require prop="date1">
							<el-date-picker type="date" placeholder="选择日期" class="w-250" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
						</el-form-item>
						<el-form-item label="结束时间" require prop="date1">
							<el-date-picker type="date" placeholder="选择日期" class="w-250" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
						</el-form-item>
						<el-form-item label="依托单位" require>
							<el-input v-model="ruleForm.name" icon="more" class="w-250"></el-input>
						</el-form-item>

						<el-form-item label="负责人" require>
							<el-input v-model="ruleForm.name" icon="more" class="w-250"></el-input>
						</el-form-item>
						<el-form-item label="联系人" require>
							<el-input v-model="ruleForm.name" icon="more" class="w-250"></el-input>
						</el-form-item>
					</el-form>


				</el-collapse-item>
				<div class="com-space"></div>
				<el-collapse-item name="2">
					<template slot="title">
						<span class="iconfont icon-zhiboquyubofang m-r-5 el-c-primary"></span>
						<div class="tab-com-span-1">任务书/合同信息 </div> <div class="tab-com-span-2">（必填）</div>
						<div class="choose-icon iconfont icon-xuanzhong el-c-primary"></div>
					</template>
					<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
					<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
				</el-collapse-item>
				<div class="com-space"></div>
				<el-collapse-item  name="3">
					<template slot="title">
						<span class="iconfont icon-zhiboquyubofang m-r-5 el-c-primary"></span>
						<div class="tab-com-span-1">扩展信息 </div>
					</template>
					<div>简化流程：设计简洁直观的操作流程；</div>
					<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
					<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
				</el-collapse-item>
				<div class="com-space"></div>
				<el-collapse-item  name="4">
					<template slot="title">
						<span class="iconfont icon-zhiboquyubofang m-r-5 el-c-primary"></span>
						<div class="tab-com-span-1">合作单位与团队 </div>
					</template>
					<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
					<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
				</el-collapse-item>
				<div class="com-space"></div>
				<el-collapse-item  name="5">
					<template slot="title">
						<span class="iconfont icon-zhiboquyubofang m-r-5 el-c-primary"></span>
						<div class="tab-com-span-1">预期目标 </div>
					</template>
					<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
					<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
				</el-collapse-item>
				<div class="com-space"></div>
				<el-collapse-item  name="6">
					<template slot="title">
						<span class="iconfont icon-zhiboquyubofang m-r-5 el-c-primary"></span>
						<div class="tab-com-span-1">项目预算 </div>
					</template>
					<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
					<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
				</el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
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
				}
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
	.crate-project .el-input i
		color: #42a5f5!important
	.crate-project .el-collapse-item__header i
		display: none

	.crate-project .el-collapse-item.is-active > .el-collapse-item__header span
		transition: transform .3s
		transform: rotate(180deg)
		display: inline-block
		color: #42a5f5
</style>
<style scoped rel="stylesheet/sass" lang="sass">
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
	.tab-com-span-2
		display: inline-block
		font-size: 14px
	.tab-com-span-1
		display: inline-block
		font-size: 16px
	.tab-com
		margin-top: 20px

	.temp-cb
		font-size: 12px
		position: absolute
		top: 73px
		left: 100px

	.com-select
		padding: 10px 15px
		height: 35px
		background-color: #fff

</style>
