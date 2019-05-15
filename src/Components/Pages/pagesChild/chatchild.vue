<template>
 <div id="chatchild">
     <div class="face">
         <img :src="imgurl" alt="">
     </div>
     <div class="content">
          <div>
              <span class="nickname">{{nickname}}</span>
              <span class="time">{{datetime}}</span>
          </div>
          <span class="msg">{{smsg}}</span>
     </div>
 </div>
</template>
<script>
export default {
    props:{
        'imgurl':String,
        'nickname':String,
        'datetime':String,
        'smsg':String
    },
    data(){
        return {
            msg:"一个人的聊天"
        }
    }
}
</script>
<style lang='scss'>
    #chatchild{
        width: 100%;
        height: 5rem;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        .face{
             flex: 1.2;
             height: 5rem;
             img{
                 width: 4rem;
                 height: 4rem;
                 display: block;
                 margin: 0 auto;
                 margin-top: 0.5rem;
                 border-radius: 0.6rem;
             }
        }
        .content{
            flex: 4;
            height: 5rem;
            border-bottom: 0.5px solid rgb(228, 225, 225);
            box-sizing: border-box;
            .msg{
                display: block;
                padding: 0.5rem 0;
                 font-size: 0.9rem;
                    color: rgb(211, 205, 205);
            }
            div{
                .nickname{
                    font-size: 1.2rem;
                    margin-top: 0.5rem;
                    display: inline-block;
                }
                .time{
                    float:right;
                     margin-top: 0.5rem;
                    margin-right: 1rem;
                    font-size: 0.9em;
                    color: rgb(211, 205, 205);
                }
            }
        }
    }
</style>