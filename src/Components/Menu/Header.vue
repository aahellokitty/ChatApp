<template>
    <div id="header">
        <span>{{name}}</span>
        <i class="iconfont">&#xec32;</i>
        <i class=iconfont>&#xeb89;</i>
    </div>
</template>
<script>
export default {
    props:{
        name:String
    },
    data(){
        return {

        }
    }
}
</script>
<style lang='scss'>
#header{
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
     background-color: rgb(243, 240, 240);
    span{
        flex: 1;
        padding: 1rem 1rem ;
        font-size:1.2rem;
    }
    i{
        padding: 1rem 1rem ;
        font-size:1.6rem;
    }
}
</style>