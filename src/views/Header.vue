<template>
  <div id="header">
    <div class="nav-global">
      <div class="container">
        <h1 class="nav-logo" @click="$router.push({'path':'/'})">
          <a href="javascript:;" style="width:120px;margin-top:-8px"></a>
        </h1>
        <ul class="nav-aside">
          <li class="nav-user">
            <a href="javascript:;">个人中心</a>
            <!--active-->
            <div class="nav-user-wrapper">
              <div class="nav-user-list">
                <dl class="nav-user-avatar">
                  <dd>
                    <span class="ng-scope"></span>
                  </dd>
                  <dt class="ng-binding">+86 138****9453</dt>
                </dl>
                <ul>
                  <li class="order">
                    <a href="javascript:;">我的订单</a>
                  </li>
                  <li class="support">
                    <a href="javascript:;">售后服务</a>
                  </li>
                  <li class="coupon">
                    <a href="javascript:;">我的优惠</a>
                  </li>
                  <li class="information">
                    <a href="javascript:;">账户资料</a>
                  </li>
                  <li class="address">
                    <a href="javascript:;">收货地址</a>
                  </li>
                  <li class="logout">
                    <a href="javascript:;">退出</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <!--active-->
          <li
            :class="{'nav-cart':true, 'active': isShowCartPanel}"
            @mouseenter="showOrHideCart({bool:true})"
            @mouseleave="showOrHideCart({bool:false})"
          >
            <a href="javascript:;">购物车</a>
            <!--根据class改变颜色-->
            <span class="cart-empty-num" :class="{'cart-num':totalCount!=0}">
              <i>{{totalCount}}</i>
            </span>
            <!-- 购物车面板 -->
            <cart-panel></cart-panel>
            <!-- 创建小球div -->
            <transition
              name="ball"
              @before-enter="beforeEnterFn"
              @enter="enterFn"
              @after-enter="afterEnterFn"
            >
              <div class="cart_ball" v-show="ball.show">
                <img alt class="cart_ball_img" />
              </div>
            </transition>
          </li>
        </ul>
        <ul class="nav-list">
          <li>
            <a href="javascript:;">在线商城</a>
          </li>
          <!-- <li>
            <a href="javascript:;">坚果 Pro</a>
          </li> -->
          <!-- <li>
            <a href="javascript:;">Smartisan M1 / M1L</a>
          </li>
          <li>
            <a href="javascript:;">Smartisan OS</a>
          </li> -->
          <!-- <li>
            <a href="javascript:;">欢喜云</a>
          </li> -->
          <li>
            <a href="javascript:;">应用下载</a>
          </li>
          <li>
            <a href="javascript:;">官方论坛</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-sub">
      <div class="nav-sub-wrapper">
        <div class="container">
          <ul class="nav-list">
            <li>
              <a href="javascript:;">首页</a>
            </li>
            <li>
              <a href="javascript:;">手机</a>
            </li>
            <!-- <li>
              <a href="javascript:;">“足迹系列”手感膜</a>
            </li> -->
            <li class="active">
              <a href="javascript:;">官方配件</a>
            </li>
            <li>
              <a href="javascript:;">周边产品</a>
            </li>
            <li>
              <a href="javascript:;">第三方配件</a>
            </li>
            <li>
              <a href="javascript:;">全部商品</a>
            </li>
            <li>
              <a href="javascript:;">服务</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartPanel from "@/components/cartPanel/CartPanel";
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  components: {
    cartPanel,
  },
  computed: {
    ...mapState(["isShowCartPanel", "ball"]),
    ...mapGetters(["totalCount"]),
  },
  methods: {
    ...mapMutations(["showOrHideCart"]),
    beforeEnterFn(el) {
      let addCartRect = this.ball.el.getBoundingClientRect();
      console.log(addCartRect);

      // 获取目标点的位置信息  购物栏的图标
      let cart = document.querySelector(".cart-empty-num");

      let cartRect = cart.getBoundingClientRect();

      console.log(cartRect);

      // 计算差值 x差值  y差值
      let x = cartRect.left - addCartRect.left - addCartRect.width / 2;
      let y = addCartRect.top - cartRect.top + cartRect.height / 2;

      // 需要让el css样式 变换到 y
      // el的图片的位置  再变化到x
      el.style.transform = "translate3d(0," + y + "px,0)";

      let img = el.children[0];

      img.style.transform = "translate3d(" + -x + "px,0,0)";

      img.width = 20;
      img.height = 20;
      // 设置图片的src路径
      img.src = this.ball.img;
      img.style.borderRadius = "50%";
    },
    enterFn(el) {
      // 需要让js 去实时读取当前小球的位置信息
      // 宽度  高度  left top
      el.offsetLeft;
      //过渡进入时钩子函数
      el.style.transform = "translate3d(0,0,0)";
      let img = el.children[0];
      img.style.transform = "translate3d(0,0,0)";
    },
    afterEnterFn() {
      // 过渡进入之后的钩子函数
      this.$store.commit("changeBallShow", { bool: false });
    },
  },
};
</script>

<style>
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 25;
}
#header .nav-sub {
  background-color: #fff;
}

/* 给一个进入过渡时激活类 */
.ball-enter-active {
  /* 过渡时间 给transition组件包裹的div元素添加的这个过渡 */
  /* 小球ball div元素 垂直y轴往回走  先快后慢 */
  /* cubic-bezier(0.24, 0.88, 0.68, 1.15) */
  transition: 0.8s cubic-bezier(0.24, 0.88, 0.68, 1.15);
}
.ball-enter-active .cart_ball_img {
  transition: 0.8s linear;
}
.cart_ball {
  position: relative;
  top: -20px;
  left: 20px;
  z-index: 40;
}
</style>