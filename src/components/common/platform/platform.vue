<template>
    <div class="platformSelector" v-clickoutside="handleClose">
        <div class="inputcontro">
            <el-input 
            type="text"
            class="platformInput"
            v-model="platform"
            ref="platform"
            placeholder="请选择"
            @focus="platformFocus"
            @blur="platformBlur"
            @change="platformChange"
            ></el-input>

            <el-select v-model="city" placeholder="城市" class="citysel">
                <el-option
                v-for="item in cityList"
                :key="item.value"
                :label="item.name"
                :value="item.id">
            </el-option>
        </el-select>
        <div class="platformBox">
            <platformBox v-show="boxShow"></platformBox>
            <platformSlide v-show="slideShow"></platformSlide>
        </div>
    </div>
</div>
</template>
<script>
    import Clickoutside from '@/../node_modules/element-ui/src/utils/clickoutside';
    import platformBox from './platformBox'
    import platformSlide from './platformSlide'
    export default {
        data: function () {
            return {
                boxShow:false,
                slideShow:false,
                platform:'',
                city:'',
                platformList:[],
                cityList:[]
            }
        },
        methods: {
            platformFocus : function(event){
                console.dir(event)
                this.boxShow = true;
                this.$emit('focus', event);
            },
            platformBlur : function(event){
                //this.boxShow = false;
                this.$emit('blur', event);
            },
            handleClose:function(){
                console.log('clickout side');
                this.boxShow = false;

            },
            platformChange:function(){
                this.slideShow = true;
                this.boxShow = false;
            }
        },
        computed:{

        },
        components: {
            platformBox,platformSlide
        },
        directives: { Clickoutside },
        created: function () {

        }
    }
</script>
<style type="text/css" scope>

    .inputcontro{
        position: relative;
    }
    .platformInput{
        width:80px;
    }
    .citysel{
        width:80px;
    }

    .platformBox{
        position: absolute;
        z-index: 99999;
        top:36px;
        background: #fff;
    }
    
</style>