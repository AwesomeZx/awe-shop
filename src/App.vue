<template>
  <div id="app">
      <Header></Header>
      <div id="main" class="hander-car">
         <router-view></router-view>
         <!-- 弹出框 用来提示用户购买最大数量 -->
         <prompt v-show="isShowPrompt"></prompt>
      </div>
  </div>
</template>
<script>
import Header from '@/views/Header.vue'
import prompt from '@/components/prompt/Prompt'
import { mapState } from 'vuex'
export default {
  components:{
    Header,
    prompt
  },
  computed: {
    ...mapState(['isShowPrompt','cartProductLists'])
  },
  watch: {
    cartProductLists:{
      handler(val){
        // 存入到本地存储中
      this.$local.set('cartData',val); // val:最新的购物车数据数组
        // this.$localStorage
      },
      deep:true
    }
  },
  data(){
    return {

    }
  }

}
</script>
<style lang="less">
  #main {
    margin-top: 190px;
  }
</style>
