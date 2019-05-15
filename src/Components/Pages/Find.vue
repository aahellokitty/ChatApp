<template>
 <div>
      <v-header :name="msg"></v-header>
       <div class="find">
             <ul>
                 <li @click="sendpyq">
                     <i class="iconfont">&#xec7d;</i>
                     <span class="nick">朋友圈</span>
                     <span class="jj">></span>
                 </li>
                  <li>
                     <i class="iconfont">&#xec7d;</i>
                     <span class="nick">扫一扫</span>
                     <span class="jj">></span>
                  </li>
                   <li>
                        <i class="iconfont">&#xec7d;</i>
                     <span class="nick">摇一摇</span>
                     <span class="jj">></span>
                   </li>
                    <li>
                         <i class="iconfont">&#xec7d;</i>
                     <span class="nick">看一看</span>
                     <span class="jj">></span>
                    </li>
                     <li>
                          <i class="iconfont">&#xec7d;</i>
                     <span class="nick">搜一搜</span>
                     <span class="jj">></span>
                     </li>
                      <li>
                           <i class="iconfont">&#xec7d;</i>
                     <span class="nick">附近的人</span>
                     <span class="jj">></span>
                      </li>
                       <li>
                            <i class="iconfont">&#xec7d;</i>
                     <span class="nick">购物</span>
                     <span class="jj">></span>
                       </li>
                        <li>
                             <i class="iconfont">&#xec7d;</i>
                     <span class="nick">游戏</span>
                     <span class="jj">></span>
                        </li>
                         <li>
                              <i class="iconfont">&#xec7d;</i>
                     <span class="nick">小程序</span>
                     <span class="jj">></span>
                         </li>
             </ul>
       </div>
      <v-footer></v-footer>
 </div>
</template>
<script>
import footer from '../Menu/Footer.vue';
import Header from '../Menu/Header.vue'
export default {
    components:{
        'v-footer':footer,
        'v-header':Header
    },
     data(){
        return {
            msg:"发现"
        }
    },
    methods:{
        sendpyq(){
            this.$router.push({
                path:"/pyq"
            });
        }
    }
}
</script>
<style lang='scss'>
.find{
    position: relative;
    top: 4rem;
    background-color: rgb(228, 222, 222);
    ul{
        li{
            list-style: none;
            background-color: white;
            padding: 0.7rem 1rem;
            box-sizing:border-box;
            border-bottom: 1px solid silver;
            display: flex;
            flex-direction: row;
            i{
                font-size:2rem;
                color: aqua;
                flex: 0.5;
                text-align: center;
            }
            span.nick{
                flex:3; 
                text-align: left;
                position: relative;
                top: 0.3rem;
            }
            span.jj{
                font-size: 1.5rem;
            }
        }
    }
}
</style>