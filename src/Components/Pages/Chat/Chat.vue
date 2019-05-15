<template>
    <div id="chatuser">
        <div class="chatheader">
           <span @click="backgo" class="back">{{back}}</span>
           <span class="nick">毛豆</span>
           <i class="iconfont">&#xec1c;</i>
        </div>
        <div class="msglists">
            <v-chatmsg ref="childmsg" ></v-chatmsg>
        </div>
         <div class="chatfooter">
           <div>
               <i @click="changesound" class="iconfont sound" v-html="iss"></i>
           </div>
           <div>
           <input ref="content" @keypress="keyinfo" class="txt" :type="istype" :value="istext">
           </div>
           <div>
           <i class="iconfont face">&#xec81;</i>
           </div>
           <div>
           <i class="iconfont face">&#xeb89;</i>
           </div>
        </div>
    </div>
</template>
<script>
import chatmsg from './Chatmsg.vue';
export default {
    components:{
        'v-chatmsg':chatmsg
    },
    data(){
        return {
            back:"<",
            id:null,
            iss:"&#xeca6;",
            istype:"text",
            istext:"",
            isshow:false,
            tomsg:"",
            msgchild:null
         }
    },
    mounted(){
       this.id=this.$route.query.id
       this.msgchild=this.$refs.childmsg;
    },
    methods:{
       
        keyinfo(e){
            let content=this.$refs.content.value;
            if(e.keyCode=="13"&&content!="")
            {
                this.tomsg=content;
                //调子组件里面方法
                this.msgchild.saveMsg(this.tomsg);
                this.$refs.content.value="";
                this.msgchild.randomMsg();
            }
        },
        backgo(){
            this.$router.go(-1);
        },
        changesound(){
            if(!this.isshow)
            {
                this.isshow=true;
                this.iss="&#xec80;";
                this.istype="button";
                this.istext="按住 说话";
            }
            else{
                 this.isshow=false;
                this.iss="&#xeca6;";
                this.istype="text";
                this.istext="";
            }
        }
    }
}
</script>
<style lang='scss'>
 #chatuser{
     width: 100%;
     height: 100%;
     div.msglists{
         width: 100%;
         height: 100%; 
     }
     .chatheader{
         position: fixed;
         z-index: 10;
         width: 100%;
         top: 0;
         left: 0;
         background-color:  rgb(243, 240, 240);
         height: 3rem;
         box-sizing: border-box;
         flex: 1;
          display: flex;
            flex-direction: row;
            .nick{
                flex: 1;
                line-height: 3rem;
                font-size: 1.2rem;
            }
            .back{
                font-size: 2rem;
                flex: 1;
                line-height: 3rem;
                box-sizing: border-box;
                text-align: center;
            }
            i{
                flex: 5;
                line-height: 3rem;
                text-align: right;
                padding-right: 1rem;
            }
     }
     .chatfooter{
         position: fixed;
         width: 100%;
         bottom: 0;
         padding: 0.5rem 0rem;
         height: 3rem;
         background-color: rgb(243, 240, 240);
         display: flex;
         flex-direction: row;
         div:nth-child(1){
             flex: 0.7;
                text-align: center;
                line-height: 3rem;
             .sound{
                box-sizing: border-box;
                border: 1px solid black;
                border-radius: 50%;
                padding: 0.2rem;
            }
         }
        div:nth-child(2){
             flex: 4;
              .txt{
                  position: relative;
                  top: 0.3rem;
                width: 100%;
                border: 1px solid silver;
                border-radius: 0.5rem;
                height: 2.5rem;
                outline: none;
                box-sizing: border-box;
                padding-left: 1rem;
                background-color: white;
            }
        }
       div:nth-child(3),div:nth-child(4){
           flex: 0.6;
            text-align: center;
                line-height: 3rem;
            .face{
                        font-size: 2rem;

                    }
       }
     }
 }
</style>