<template>
    
    <div class="platformTab">
        <dl><dt>#</dt><dd><a href="#" value="">全国</a></dd></dl><dl><dt>C</dt><dd><a href="#" value="9">重庆</a></dd></dl><dl><dt>F</dt><dd><a href="#" value="26">福建</a></dd></dl><dl><dt>G</dt><dd><a href="#" value="20">广西</a><a href="#" value="21">甘肃</a><a href="#" value="28">广东</a></dd></dl><dl><dt>H</dt><dd><a href="#" value="10">河北</a><a href="#" value="102">湖北号码池</a><a href="#" value="14">黑龙江</a><a href="#" value="15">湖南</a><a href="#" value="2">湖北</a><a href="#" value="32">海南</a></dd></dl><dl><dt>J</dt><dd><a href="#" value="25">吉林</a><a href="#" value="4">江西</a><a href="#" value="6">江苏</a></dd></dl><dl><dt>L</dt><dd><a href="#" value="13">辽宁</a></dd></dl><dl><dt>N</dt><dd><a href="#" value="33">宁夏</a></dd></dl><dl><dt>Q</dt><dd><a href="#" value="1">其他</a><a href="#" value="30">青海</a></dd></dl><dl><dt>S</dt><dd><a href="#" value="101">四川短信通</a><a href="#" value="103">双创</a><a href="#" value="17">山东</a><a href="#" value="22">山西</a><a href="#" value="24">陕西</a><a href="#" value="29">四川</a><a href="#" value="37">上海电信</a><a href="#" value="5">上海</a></dd></dl><dl><dt>T</dt><dd><a href="#" value="8">天津</a></dd></dl><dl><dt>X</dt><dd><a href="#" value="31">西藏</a></dd></dl><dl><dt>Y</dt><dd><a href="#" value="12">云南</a></dd></dl><dl><dt>Z</dt><dd><a href="#" value="3">浙江</a><a href="#" value="36">总部</a></dd></dl>
    </div>
    
</template>
<script>


    export default {
        data: function () {
            return {

            }
        },
        methods: {

        },
        computed:{

        },
        components: {

        },
        created: function () {

        }
    }
</script>
<style type="text/css" scope>

    
    .platformTab{
        width: 380px;
        border: 1px solid #B3CDC0;
        overflow: hidden;
        box-shadow: 2px 2px 3px rgba(0,0,0,0.3);
        font: 12px/1.5 tahoma,arial,\5b8b\4f53;
        
        text-align: left;
    }

    .platformTab dl {
        margin: 0;
        padding: 0 0 0 10px;
        overflow: hidden;
    }

    .platformTab dl dt {
        float: left;
        padding-left: 3px;
        color: #3a8fc8;
        text-indent: 5px;
        line-height: 25px;
        font-size: 14px;
        width: 20px;
    }

    .platformTab dl dd {
        margin-left: 2px;
        float: left;
        width: 326px;
    }

    .platformTab dl dd a {
        padding-left: 5px;
        min-width: 66px;
        line-height: 25px;
        display: inline-block;
        color: #333;
        text-decoration: none;
    }

</style>