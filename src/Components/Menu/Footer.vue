<template>
 <div id="footnav">
    <ul>
        <li :class="{changeCo:item.ischeck}"  @click="changeState(index)" v-for="(item,index) in nav" :key="index">
           <i class="iconfont" v-html="item.face"></i> {{item.title}}
        </li>
    </ul>
 </div>
</template>
<script>
import m from './menudata.js';
export default {
    data(){
        return {
            stats:0,
            nav:null
        }
    },
    mounted(){
        this.nav=m.nav;
        this.stats=m.s;
    },
    methods:{
        changeState(index){
            this.nav[this.stats].ischeck=false;
            this.nav[index].ischeck=true;
            this.stats=index;
            //编程式路由
            this.$router.push({
                path:this.nav[index].path
            });
            //修改数据
            m.nav=this.nav;
            m.s=index;
        }
    }
}
</script>
<style lang='scss' scope>
    // @import '../../assets/css/iconfont.css';
    .changeCo{
        color:rgb(15, 161, 15) !important;
    }
    #footnav{
        position: fixed;
        z-index: 10;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4.6rem;
        background-color: rgb(243, 240, 240);
        ul{
            display: flex;
            flex-direction: row;
            li{
                flex: 1;
                list-style: none;
                text-align: center; 
                box-sizing: border-box;
                padding: 0.8rem 0;
                i{
                    position: relative;
                    display:block;
                    font-size: 1.7rem;
                }
            }
        }
    }
</style>