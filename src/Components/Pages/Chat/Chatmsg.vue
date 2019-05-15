<template>
 <div id="msg" ref="msg">
        <div v-for="(item,index) in lists" :key="index">
            <div v-if="item.id==10086"  class="user">
                <img :src="item.face" alt="">
                <div class="qipao">
                    <span>{{item.msg}}</span>
                </div>
            </div>
            <div v-if="item.id==10088"  class="touser">
                <img :src="item.face" alt="">
                <div class="toqipao">
                    <span>{{item.msg}}</span>
                </div>
            </div>
        </div>
 </div>
</template>
<script>
import user from './myinfo.js';
export default {
    data(){
        return {
            url:"",
            lists:[]
        }
    },
    mounted(){
        this.url=user.url;
    },
    updated(){
        this.setscroll();
    },
    methods:{
         setscroll(){
            this.$refs.msg.scrollTop=this.$refs.msg.scrollHeight;
            //scrollHeight   元素内容总高度    scrollTop  滚动条滚动了的距离
        },
        saveMsg(msg){
            this.lists.push({
                 id:user.id,
                 face:this.url,
                 msg:msg
            });
        },
        randomMsg(){
            //产生随机消息
            let data=user.data;
            this.lists.push({
                        id:data.id,
                        face:data.url,
                        msg:data.msg[Math.floor(Math.random()*data.msg.length)].info
            });
        }
    }
}
</script>
<style lang='scss'>
    #msg{
        position: relative;
        top:5%;
        width: 100%;
        height: 88%;
        overflow-y: scroll;
        overflow-x: hidden;
        position: relative;
        background-color: beige;
        margin-bottom: 3rem;
        .touser{
             position: relative;
                width: 100%;
                overflow: hidden;
                margin: 0.6rem 0;
                img{
                float: left;
                width: 3rem;
                height: 3rem;
                border-radius: 1rem;
                margin-left: 1rem;
            }
            .toqipao{
                position: relative;
                min-height: 3rem;
                float: left;
                padding: 0 1rem;
                border-radius: 0.5rem;
                padding: 1rem 1rem;
                box-sizing: border-box;
                margin-left: 1rem;
                max-width: 70%;
                background-color: #61f00e;
            }
            .toqipao::after{
              content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 0.7rem;
                left: -1.4rem;
                border: 0.7rem solid;
                border-color:  transparent #61f00e transparent  transparent  ;
            }
        }
        .user{
            position: relative;
            width: 100%;
            overflow: hidden;
            margin: 0.6rem 0;
            img{
                width: 3rem;
                height: 3rem;
                border-radius: 1rem;
                float: right;
                margin-right: 1rem;
            }
            .qipao{
                position: relative;
                float: right;
                min-height: 3rem;
                padding: 0 1rem;
                border-radius: 0.5rem;
                padding: 1rem 1rem;
                box-sizing: border-box;
                margin-right: 1rem;
                max-width: 70%;
                background-color: #61f00e;
            }
            .qipao::after{
              content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 0.7rem;
                right: -1.4rem;
                border: 0.7rem solid;
                border-color:  transparent transparent  transparent  #61f00e;
            }
        }
    }
</style>