<template>

    <ul class="platformslide mCustomScrollbar"><li class="" value="101" name="四川短信通"><b class="platformname">四川短信通</b><b class="platformspell">scdxt</b></li><li class="" value="103" name="双创"><b class="platformname">双创</b><b class="platformspell">jssc</b></li><li class="" value="17" name="山东"><b class="platformname">山东</b><b class="platformspell">sd</b></li><li class="" value="22" name="山西"><b class="platformname">山西</b><b class="platformspell">sx</b></li><li class="" value="24" name="陕西"><b class="platformname">陕西</b><b class="platformspell">ss</b></li><li class="" value="29" name="四川"><b class="platformname">四川</b><b class="platformspell">sc</b></li><li class="" value="37" name="上海电信"><b class="platformname">上海电信</b><b class="platformspell">shtel</b></li><li class="" value="5" name="上海"><b class="platformname">上海</b><b class="platformspell">sh</b></li></ul>
    
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
    .platformslide {
        width: 200px;
        list-style: none;
        margin: 0;
        padding: 0;
        border: 1px solid #B3CDC0;
        box-shadow: 2px 2px 3px rgba(0,0,0,0.3);
        overflow: auto;
        max-height: 300px;
    }
    .platformslide li {
        list-style: none;
        overflow: hidden;
        height: 30px;
        padding: 0 10px;
        line-height: 30px;
    }
    .platformslide li:hover {
        background: #3a8fc8;
        color: #fff;
        cursor: pointer;
    }
    .platformslide li b {
        font-weight: normal;
    }
    .platformname {
        float: left;
    }
    .platformspell {
        float: right;
    }

</style>