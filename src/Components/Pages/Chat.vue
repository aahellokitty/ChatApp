<template>
    <div id="chat">
        <v-header :name="msg" ></v-header>
        <div class="chatusr">
            <div class="list" ref="chatuser" @click="checkChat(index)" v-for="(item,index) in chat" :key="index">
                <v-chat  :imgurl="item.url" :nickname="item.name" :datetime="item.datetime" :smsg="item.smsg"></v-chat>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
import footer from '../Menu/Footer.vue';
import chatchild from './pagesChild/chatchild.vue';
import Header from '../Menu/Header.vue';
import axios from 'axios';
export default {
    components:{
        'v-footer':footer,
        'v-chat':chatchild,
        'v-header':Header
    },
    data(){
        return {
            msg:"微信",
            chat:null
        }
    },
    mounted(){
        axios.get("/chat").then((res)=>{
            this.chat=res.data.result;
        });
    },
    methods:{
        checkChat(index){
            this.$refs.chatuser[index].style.background=" rgb(243, 240, 240)";
            //动态修改完成之后  跳转
            let id=this.chat[index].id;
            this.$nextTick(()=>{
                 this.$router.push({
                    path:"/Chat",
                    query:{id:id}
                });
            });
        }
    }
}
</script>
<style lang='scss' scope>
    #chat{
        width: 100%;
        height: 100%;
        .chatusr{
            position: relative;
            top:3.5rem;
            margin-bottom: 4rem;
            .list{
                padding: 0.3rem 0;
            }
        }
    }
</style>