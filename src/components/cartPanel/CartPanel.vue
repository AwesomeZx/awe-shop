<template>
  <div class="nav-cart-wrapper">
    <div class="nav-cart-list">
      <div class="empty" v-if="!cartProductLists.length">
        <h3>购物车为空</h3>
        <p>您还没有选购任何商品，现在前往商城选购吧!</p>
      </div>
      <div v-else class="full">
        <div class="nav-cart-items">
          <ul>
            <li class="clear" v-for="item in cartProductLists" :key="item.productObj.sku_id">
              <div class="cart-item js-cart-item cart-item-sell">
                <div class="cart-item-inner">
                  <div class="item-thumb">
                    <img :src="item.productObj.ali_image" />
                  </div>
                  <div class="item-desc">
                    <div class="cart-cell">
                      <h4>
                        <router-link
                          :to="{'name':'details','query':{'productid':item.productObj.sku_id}}"
                        >{{item.productObj.title}}</router-link>
                      </h4>
                      <p class="attrs">
                        <span>{{color(item.productObj)}}</span>
                      </p>
                      <h6>
                        <span class="price-icon">¥</span>
                        <span class="price-num">{{item.productObj.price}}</span>
                        <span class="item-num">x {{item.count}}</span>
                      </h6>
                    </div>
                  </div>
                  <div class="del-btn" @click="delCartProduct({productObj:item.productObj})">删除</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="nav-cart-total">
          <p>
            共
            <strong class="ng-binding">{{totalCount}}</strong> 件商品
          </p>
          <h5>
            合计：
            <span class="price-icon">¥</span>
            <span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{totalPrice}}</span>
          </h5>
          <h6>
            <router-link to="/cartpage" class="nav-cart-btn">去购物车</router-link>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cartProductLists"]),
    ...mapGetters(["totalCount", "totalPrice"]),
    color() {
      return function (obj) {
        let product = obj.spec_json.find(
          (item) => item.spec_value_id == obj.color_id
        );
        return product ? product.show_name : "";
      };
    },
  },
  methods: {
    ...mapMutations(["delCartProduct"]),
  },
};
</script>

<style>
</style>