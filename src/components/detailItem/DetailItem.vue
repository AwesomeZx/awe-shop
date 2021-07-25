<template>
  <div class="store-content item">
    <div class="item-box">
      <div class="gallery-wrapper">
        <div class="gallery">
          <div class="thumb">
            <ul>
              <li class="on">
                <img style="width:100%;" :src="productObj.ali_image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="sku-custom-title">
          <div class="params-price">
            <span>
              <em>¥</em>
              <i>{{productObj.price}}</i>
            </span>
          </div>
          <div class="params-info">
            <h4>{{productObj.title}}</h4>
            <h6>{{productObj.sub_title}}</h6>
          </div>
        </div>
        <div class="sku-dynamic-params-panel">
          <div class="sku-dynamic-params clear">
            <span class="params-name">颜色</span>
            <ul class="params-colors">
              <li
                :class="{cur: currentIdx==i}"
                v-for="(color,i) in productObj.spec_json"
                :key="color.spec_value_id"
                @click="changeProduct(i,color.spec_value_id)"
              >
                <a>
                  <i>
                    <img :src="color.image" />
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div class="sku-dynamic-params clear">
            <div class="params-name">数量</div>
            <div class="params-detail clear">
              <div class="item-num js-select-quantity">
                <span :class="{'down':true, 'down-disabled': count<=1 }" @click="reduceCount">-</span>
                <span class="num">{{count}}</span>
                <span
                  :class="{'up':true, 'up-disabled': count>= productObj.limit_num }"
                  @click="addCount"
                >+</span>
              </div>
            </div>
          </div>
        </div>
        <div class="sku-status">
          <div class="cart-operation-wrapper clearfix">
            <span class="blue-title-btn js-add-cart" @click="addCart">
              <a>加入购物车</a>
            </span>
            <span class="gray-title-btn" @click="gotoCart">
              <a>现在购买</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      // 本地的所有商品数据组件
      goodsLists: [],
      // 设置一个产品对象 用来存 当前应该渲染的产品
      productObj: {},
      // 初始化id 为当前路由的id参数的值
      id: this.$route.query.productid,
      // 当前商品的数量count
      count: 1,
    };
  },
  watch: {
    $route: {
      handler(to) {
        // 把当前的所有数据的数组 进行查找 根据当前的productid去找到对应的产品 赋给productObj
        this.productObj = this.goodsLists.find(
          (item) => item.sku_id == to.query.productid
        );
      },
    },
  },
  computed: {
    // 设置一个索引 用来切换颜色
    currentIdx: {
      get() {
        // 当前productObj 当前产品.color_id  去找 当前产品的.spec_json 第几项的spec_value_id
        return this.productObj.spec_json.findIndex(
          (item) => item.spec_value_id == this.productObj.color_id
        );
      },
      set(val) {},
    },
  },
  // vue创建完毕的钩子函数 它只会在当前组件创建的时候只执行一次
  async created() {
    let res = await fetch("/data/itemData.json");
    let data = await res.json();

    console.log(data);
    this.goodsLists = data;
    this.productObj = data.find((item) => item.sku_id == this.id);
  },
  methods: {
    changeProduct(i, id) {
      // 第一件事情
      this.currentIdx = i;
      // id: 当前的颜色列表 你点击的那个颜色的id值
      // 根据当前的id值去 找到对应的产品
      this.productObj = this.goodsLists.find((item) => item.color_id == id);
      // 把当前的地址 查询参数 更改一下
      // 调用 $router.push()
      this.$router.push({
        name: "details",
        query: { productid: this.productObj.sku_id },
      });
      // 只要一切换产品 就立即把count归 1
      this.count = 1;
    },
    // 减少数量
    reduceCount() {
      if (this.count > 1) {
        this.count--;
      }
    },
    // 增加数量
    addCount() {
      // 不能超过商品的限制最大数量
      if (this.count < this.productObj.limit_num) {
        this.count++;
      }
    },
    addCart(e) {
      // this.$paowu(e,this.productObj.ali_image);

      //调用小球飞入的抛物线函数 执行动画
      this.$paowu(this.productObj.ali_image, e);
      // 加入购物栏

      this.$store.commit("addCartProduct", {
        productObj: this.productObj,
        count: this.count,
      });
      // 显示购物栏
      // this.$store.commit('showOrHideCart',{bool:true})
    },
    gotoCart() {
      // 把当前商品对象以及数量 传过去 加入到购物车
      this.$store.commit("addCartProduct", {
        productObj: this.productObj,
        count: this.count,
      });
      // 通过$router.push
      this.$router.push({ name: "cartpage" });
    },
  },
};
</script>

<style>
</style>