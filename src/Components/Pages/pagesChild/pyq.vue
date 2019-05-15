<template>
 <div class="pyq">
    <div class="pyt">
        <span @click="backrouter">{{jt}}</span>
        <i class="iconfont">&#xeb61;</i>
    </div>
    <div class="userinfo">
        <img class="bgimage" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=27&gp=0.jpg" alt="">
        <img class="userface" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2060761043,284284863&fm=27&gp=0.jpg" alt="">
        <span class="nickname">毛豆</span>
    </div>
    <div class="pyqlistdata">
        <!-- 
            根据数据循环绑定朋友圈组件  展示文字 和图片  以及点赞
         -->
      <div class="pyqlist" v-for="(item,index) in list" :key="index">
             <v-pyq :url="item.url" :nick="item.name" :content="item.content" :imagelists="item.image"></v-pyq>
      </div>
    </div>
 </div>
</template>
<script>
import pyqcontent from './pyqcontent.vue';
import axios from 'axios';
export default {
    components:{
        'v-pyq':pyqcontent
    },
    data(){
        return {
            jt:"<",
            list:null
        }
    },
    mounted(){
        axios.get("/pyq").then((res)=>{
            this.list=res.data.result;
        });
    },
    methods:{
        backrouter(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang='scss'>
        .pyqlistdata{
            margin-top: 4rem;
        }
    .pyqlist{
        border-bottom: 1px solid rgb(236, 233, 233);
    }
    .pyq{
        .pyt{
            position: fixed;
            z-index: 10;
            left: 0;
            top: 0;
            width: 100%;
            height: 3rem;
            line-height: 3rem;
            box-sizing: border-box;
            padding: 0 1rem;
            display: flex;
            flex-direction: row;
            font-size: 2rem;
            color: white;
            span{
                flex: 0.5;
                text-align: left;
            }
            i{
                flex: 2;
                text-align: right;
            }
        }
        .userinfo{
            position: relative;
            width: 100%;
           height: 18rem;
           .nickname{
                position:absolute;
               right: 8rem;
               z-index: 10;
               top: 16.5rem;
               color: white;
           }
           img.bgimage{
               position: relative;
               left:-224.5px;
               margin-left:50%;
               width: auto;
               height: 100%;
           }
           .userface{
               position:absolute;
               right: 2rem;
               z-index: 10;
               top: 15.5rem;
               width: 5rem;
               height: 5rem;
               border-radius: 1rem;
           }
        }
    }
</style>