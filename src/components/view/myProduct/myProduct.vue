<template>
	<div class="com-home">
		<p class="myinfo">我的信息</p>
		<button class="print">打印履历</button>
		<el-tabs v-model="activeName" @tab-click="handleClick" class="user_info">
			<el-tab-pane label="人员信息" name="first">
				<el-row :span="24">
					<el-col :span="4" class="r-user">
						<div>
							<p class="pic">
								<img src="../../../assets/img/r_design.png"/>
								<!--<img :src="myInfo.user.uimg"/>-->
							</p>
							<p class="line_x">{{myInfo.user.uname}}</p>
						</div>
						<ul>
							<li class="clearfix" v-for="(item,i) in myInfo.info">
								<span class="r_icon" :class="item.icon"></span>
								<p class="basic">{{item.title}}</p>
							</li>
						</ul>
					</el-col>
					<el-col :span="20">
						<div class="r_container">
							<el-row :span="24">
								<el-col :span="24" class="basic_info">
									<div class="title">
										<span class="bi" :class="myInfo.info[0].ricon"></span>
										<span>{{myInfo.info[0].title}}</span>
										<a href="#" class="detail">详情<span class="de_icon"></span></a>
									</div>
									<el-row :span="24" class="bf_content">
										<el-row :span="24"  v-for="(row,i) in listTemp">
											<el-col :span="8"  v-for="(cell,j) in row">
												<el-row :span="24">
													<el-col :span="12" align="right" class="gray">{{cell.rtitle}}</el-col>
													<el-col :span="12" align="left">{{cell.content}}</el-col>
												</el-row>
											</el-col>
										</el-row>
									</el-row>
								</el-col>
								<el-col :span="24">
									<el-col :span="7" class="con_info">
										<div class="title">
											<span class="bi" :class="myInfo.info[1].ricon"></span>
											<span>{{myInfo.info[1].title}}</span>
											<p class="detail">详情<span class="de_icon"></span></p>
										</div>
										<el-row :span="24">
											<el-row :span="24" v-for="(item,i) in myInfo.info[1].rightMenu.detail">
												<el-col :span="12" align="right" class="gray">{{item.rtitle}}<span class="null"></span></el-col>
												<el-col :span="12" align="left">{{item.content}}</el-col>
											</el-row>
										</el-row>
									</el-col>
									<el-col :span="17">
										<el-col :span="24" class="fpxx" style="">
											<div class="title">
												<span class="bi"  :class="myInfo.info[2].ricon"></span>
												<span>{{myInfo.info[2].title}}</span>
												<p class="detail">详情<span class="de_icon"></span></p>
											</div>
											<el-row :span="24">
												<el-row :span="24"  v-for="(row,i) in listTemptwo">
													<el-col :span="12"  v-for="(cell,j) in row">
														<el-row :span="12">
															<el-col :span="12" align="right" class="gray">{{cell.rtitle}}</el-col>
															<el-col :span="12" align="left">{{cell.content}}</el-col>
														</el-row>
													</el-col>
												</el-row>
											</el-row>
										</el-col>
									</el-col>
								</el-col>
								<el-col :span="24">
									<el-col :span="7" class="con_info">
										<div class="title">
											<span class="bi" :class="myInfo.info[3].ricon"></span>
											<span>{{myInfo.info[3].title}}</span>
											<p class="detail">详情<span class="de_icon"></span></p>
										</div>
										<el-row :span="24">
											<el-col :span="24">
												<el-row :span="24"  v-for="(item,i) in myInfo.info[3].rightMenu.detail">
													<el-col :span="12" align="right" class="gray">{{item.rtitle}}<span class="null"></span></el-col>
													<el-col :span="12" align="left">{{item.content}}</el-col>
												</el-row>

											</el-col>
										</el-row>
									</el-col>
									<el-col :span="17">
										<el-col :span="24" class="fpxx" style="">
											<div class="title">
												<span class="bi" :class="myInfo.info[4].ricon"></span>
												<span>{{myInfo.info[3].title}}</span>
												<p class="detail">详情<span class="de_icon"></span></p>
											</div>
											<el-row :span="24">
												<el-row :span="24"  v-for="(row,i) in listTemptwo">
													<el-col :span="12"  v-for="(cell,j) in row">
														<el-row :span="12">
															<el-col :span="12" align="right" class="gray">{{cell.rtitle}}</el-col>
															<el-col :span="12" align="left">{{cell.content}}</el-col>
														</el-row>
													</el-col>
												</el-row>
											</el-row>
										</el-col>
									</el-col>
								</el-col>
							</el-row>

						</div>
					</el-col>
				</el-row>
			</el-tab-pane>
			<el-tab-pane label="工作信息" name="second">
				<table>
					<tr v-for="(row,i) in listTemp">
						<td v-for="(cell,j) in row">
							<div :id="(i*3+j)">Date-{{cell}}</div>
						</td>
					</tr>
				</table>
			</el-tab-pane>
			<el-tab-pane label="分类信息" name="third">人员信息</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import ElRow from "element-ui/packages/row/src/row";
	import ElCol from "element-ui/packages/col/src/col";
	export default {
		data() {
			return {
				cordOne: '1',
				cordTwo: '2',
				activeName: 'first',
				//list: [1,2,3,4,5,6,7,8,9],
				myInfo: {
					info: [{
				        title: "基本信息",
						icon: "rr_per",
						ricon: "rr_pers",
						rightMenu: {
							detail: [
							    {
									rtitle: "姓名",
									content: "张三"
								},{
									rtitle: "参加工作日期",
									content: "2016-07-01"
								},{
									rtitle: "出生地",
									content: "河南"
								},{
									rtitle: "员工编号",
									content: "1705"
								},{
									rtitle: "身份证",
									content: "XXXXXXXXXXX"
								},{
									rtitle: "出生国家",
									content: "中国"
								},{
									rtitle: "人员类型",
									content: "项目聘用人员"
								},{
									rtitle: "员工编号",
									content: "1705"
								},{
									rtitle: "人员类型",
									content: "项目聘用人员"
								},{
									rtitle: "姓名拼音",
									content: "zhangsan"
								},{
									rtitle: "英文名",
									content: "Jim"
								},{
									rtitle: "性别",
									content: "男"
								},{
									rtitle: "姓名",
									content: "张三"
								},{
									rtitle: "员工编号",
									content: "1705"
								},{
									rtitle: "人员类型",
									content: "项目聘用人员"
								},{
									rtitle: "姓名拼音",
									content: "zhangsan"
								},{
									rtitle: "英文名",
									content: "Jim"
								},{
									rtitle: "性别",
									content: "男"
								}
							]
						}
					},{
						title: "联系信息",
						icon: "rr_tel",
						ricon: "rr_tels",
						rightMenu: {
							detail: [
								{
									rtitle: "移动电话",
									content: "18614563890"
								},{
									rtitle: "办公电话",
									content: "2016-07-01"
								},{
									rtitle: "出生地",
									content: "河南"
								},{
									rtitle: "员工编号",
									content: "1705"
								},{
									rtitle: "身份证",
									content: "XXXXXX"
								}
							]
						}
					},{
						title: "分配信息",
						icon: "rr_bag",
						ricon: "rr_bags",
						rightMenu: {
							detail: [
								{
									rtitle: "移动电话",
									content: "18614563890"
								},{
									rtitle: "办公电话",
									content: "2016-07-01"
								},{
									rtitle: "出生地",
									content: "河南"
								},{
									rtitle: "员工编号",
									content: "1705"
								},{
									rtitle: "身份证",
									content: "XXXXXXXXXXX"
								},{
									rtitle: "移动电话",
									content: "18614563890"
								},{
									rtitle: "办公电话",
									content: "2016-07-01"
								},{
									rtitle: "出生地",
									content: "河南"
								},{
									rtitle: "员工编号",
									content: "1705"
								},{
									rtitle: "身份证",
									content: "XXXXXXXXXXX"
								}
							]
						}
					},{
						title: "家庭成员",
						icon: "rr_home",
						ricon: "rr_homes",
						rightMenu: {
							detail: [
								{
									rtitle: "移动电话",
									content: "18614563890"
								},{
									rtitle: "办公电话",
									content: "2016-07-01"
								},{
									rtitle: "出生地",
									content: "河南"
								},{
									rtitle: "员工编号",
									content: "1705"
								},{
									rtitle: "身份证",
									content: "XXXXXX"
								}
							]
						}
					},{
						title: "学历信息",
						icon: "rr_pro",
						ricon: "rr_pros",
						rightMenu: {
							detail: [
								{
									rtitle: "移动电话",
									content: "18614563890"
								},{
									rtitle: "办公电话",
									content: "2016-07-01"
								},{
									rtitle: "出生地",
									content: "河南"
								},{
									rtitle: "员工编号",
									content: "1705"
								},{
									rtitle: "身份证",
									content: "XXXXXXXXXXX"
								},{
									rtitle: "移动电话",
									content: "18614563890"
								},{
									rtitle: "办公电话",
									content: "2016-07-01"
								},{
									rtitle: "出生地",
									content: "河南"
								},{
									rtitle: "员工编号",
									content: "1705"
								},{
									rtitle: "身份证",
									content: "XXXXXXXXXXX"
								}
							]
						}
					}],
					user: {
						uname: "UESDesign",
						uimg: "../../../assets/img/r_design.png"
					}

				}

			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		computed: {
			listTemp: function () {
				var list = this.myInfo.info[0].rightMenu.detail;
				var arrTemp = [];
				var index = 0;
				var sectionCount = 3;
				for (var i = 0; i < list.length; i++) {
					index = parseInt(i / sectionCount);
					if (arrTemp.length <= index) {
						arrTemp.push([]);
					}
					arrTemp[index].push(list[i]);
				}
				return arrTemp;
			},
			listTemptwo: function () {
				var list = this.myInfo.info[2].rightMenu.detail;
				var arrTemp = [];
				var index = 0;
				var sectionCount = 2;
				for (var i = 0; i < list.length; i++) {
					index = parseInt(i / sectionCount);
					if (arrTemp.length <= index) {
						arrTemp.push([]);
					}
					arrTemp[index].push(list[i]);
				}
				return arrTemp;
			}
		},
		components: {
			ElCol,
			ElRow
		}
	}
</script>
<style>
	/*通用灰色*/
	.gray{
		color: #9c9d9d;
		padding-right: 30px;
	}
	/*修改框架样式*/
	.el-tabs__item{
		font-size: 20px;
	}
	.el-tabs__item.is-active{
		color: #000;
	}
	/*左侧用户*/
	.user_info{
		padding-top: 14px;
	}
	.myinfo{
		color: #2f94f5;
		position: absolute;
		top: -34px;
	}
	.print{
		width: 90px;
		height: 36px;
		background: #2f94f5;
		color: #fff;
		text-align: center;
		line-height: 36px;
		border-radius: 5px;
		border: 0;
		position: absolute;
		right: 0;
		top: 12px;
	}
	.com-home{
		position: relative;
	}
	.r-user{
		height: 746px;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 0 10px 2px rgba(0,0,0,.1);
		text-align: center;
	}
	.pic{
		width: 99px;
		border-radius: 5px;
		box-shadow: 0 0 10px 5px rgba(0,0,0,.1);
		margin: 28px auto;
	}
	.pic img{
		width: 100%;
		height: auto;
	}
	.line_x{
		margin: 0 auto;
		margin-top: -20px;
		width: 180px;
		height: 54px;
		line-height: 54px;
		font-size: 14px;
		border-bottom: 1px solid #dedede;
	}
	.r-user li{
		width: 120px;
		margin: 0 auto;
		height: 34px;
		margin-top: 30px;
		position: relative;
	}
	.r_icon{
		display: block;
		width: 36px;
		height: 36px;
		background-size: contain;
		float: left;
	}
	.rr_per{
		background: url("../../../assets/img/r_per.png");
	}
	.rr_pers{
		background: url("../../../assets/img/r_pers.png");
	}
	.rr_tel{
		background: url("../../../assets/img/r_tel.png");
	}
	.rr_tels{
		background: url("../../../assets/img/r_tels.png");
	}
	.rr_bag{
		background: url("../../../assets/img/r_bag.png");
	}
	.rr_bags{
		background: url("../../../assets/img/r_bags.png");
	}
	.rr_home{
		background: url("../../../assets/img/r_home.png");
	}
	.rr_homes{
		background: url("../../../assets/img/r_homes.png");
	}
	.rr_pro{
		background: url("../../../assets/img/r_pro.png");
	}
	.rr_pros{
		background: url("../../../assets/img/r_pros.png");
	}
	.basic{
		height: 36px;
		line-height: 36px;
		float: left;
		margin:0 0 0 5px;
		padding: 0;
	}
	.r-user li:after{
		content:"\200B";
		display: block;
		width: 1px;
		height: 29px;
		background: #d7d7d7;
		position: absolute;
		bottom: -30px;
		left: 17px;
	}
	.r-user li:last-child:after{
		display: none;
	}
	/*右侧内容*/
	.r_container{
		width: 100%;
		margin-left: 20px;
	}
	.basic_info{
		background: #fff;
	}
	.title{
		height: 40px;
		line-height: 40px;
		margin: 10px 34px 0 14px;
		border-bottom: 1px solid #dcdce8;
	}
	.bi{
		display: inline-block;
		width: 20px;
		height: 20px;
		/*background: url("../../../assets/img/r_homes.png");*/
		background-size: contain;
		vertical-align: middle;
		margin-left: 14px;
	}
	.detail{
		float: right;
		font-size: 12px;
		color: #2f94f5;
		line-height: 30px;
		margin: 0;
	}
	.null{
		display: inline-block;
		width: 30px;
		height: 18px;
	}
	.bf_content{
		margin-top: 14px;
		padding-bottom: 20px;
	}
	.bf_content .el-row{
		line-height: 30px;
	}
	.con_info{
		margin-top: 20px;
		background: #fff;
		padding-bottom: 20px;
	}
	.de_icon{
		width: 20px;
		height: 8px;
		background: url("../../../assets/img/r_more.png");
		background-size: contain;
		display: inline-block;
	}
	.con_info .el-row{
		line-height: 30px;
	}
	.fpxx {
		margin-left: 20px;
		margin-top: 20px;
		padding-bottom: 20px;
		background: #fff;
	}
	.fpxx .el-row{
		line-height: 30px;
	}
	.fpxx .title{
		margin: 10px 54px 0 14px;
	}


</style>
