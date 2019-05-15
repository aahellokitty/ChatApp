/<template>
  <div>
    <v-header :name="msg"></v-header>
    <mt-index-list class="topnav">
      <mt-index-section v-for="(item,index) in listsinfo" :key="index" :index="item.type">
        <div class="listuser" @click="clickUser" v-for="(t,k) in item.lists" :key="k">
          <img :src="t.url" alt>
          <span class="nickname">{{t.name}}</span>
        </div>
      </mt-index-section>
    </mt-index-list>
    <v-footer></v-footer>
  </div>
</template>
<script>
import footer from "../Menu/Footer.vue";
import Header from "../Menu/Header.vue";
import axios from "axios";
export default {
  components: {
    "v-footer": footer,
    "v-header": Header
  },
  data() {
    return {
      msg: "通讯录",
      listsinfo: null
    };
  },
  mounted() {
    axios.get("/User").then(res => {
      this.listsinfo = res.data.result;
    });
  },
    methods: {
    clickUser(){
      this.$router.push({
        path:"/Chat"
      })
    }
  }
};
</script>
<style lang='scss'>
.topnav {
  position: relative;
  top: 3rem;
}
.listuser {
  // overflow: hidden;
  line-height: 3rem;
  margin: 0.6rem 0;
  display: flex;
  flex-direction: row;
  img {
    flex: 1;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    margin-left: 1rem;
  }
  .nickname {
    flex: 5;
    color: black;
    margin-left: 1rem;
    border-bottom: 1px solid rgb(224, 221, 221);
  }
}
</style>