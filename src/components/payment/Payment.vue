<template>
  <div class="content page-order-payment">
    <div class="gray-box clear">
      <div class="title">
        <h2>支付订单</h2>
      </div>
      <div class="box-inner order-info">
        <h3>提交订单成功</h3>
        <p class="payment-detail">
          请在 <span>24 小时内</span>完成支付，超时订单将自动取消。
        </p>
        <p class="payment-detail">我们将在您完成支付后的 72 小时内发货</p>
      </div>
      <div class="box-inner payment-checkout-panel clear">
        <span class="jianguo-blue-main-btn big-main-btn js-payment-order">
          <a>现在支付</a>
        </span>
        <span class="prices">
          应付金额： <em><span>¥ </span>{{ totalPrice + Number(freight)  }}</em>
        </span>
      </div>
    </div>
    <div class="confirm-detail">
      <div class="info-title">订单编号</div>
      <p class="info-detail">{{orderId}}</p>
    </div>
    <div class="confirm-detail">
      <div class="info-title">收货信息</div>
      <p class="info-detail">姓名：{{dd.name}}</p>
      <p class="info-detail">联系电话：{{dd.phone}}</p>
      <p class="info-detail">
        详细地址：{{dd.province}}{{dd.city}}{{dd.areas}}{{dd.add}}
      </p>
    </div>
    <div class="confirm-detail">
      <div class="info-title">发票信息</div>
      <p class="info-detail">发票类型：电子发票</p>
      <p class="info-detail">发票抬头：{{ticket.name}}</p>
      <p class="info-detail">发票内容：购买商品明细 {{ticket.msg}}</p>
    </div>
    <div class="confirm-table-title clear">
      <span class="name fn-left">商品信息</span>
      <span class="subtotal fn-right">小计</span>
      <span class="num fn-right">数量</span>
      <span class="price fn-right">单价</span>
    </div>
    <div class="confirm-goods-table">
      <div class="cart-items clear"
      v-for="(item,i) in lists"
      :key="i">
        <div class="name fn-left hide-row">
          <div class="name-cell">
            <a
              href="http://www.smartisan.com/shop/#/item/100029901"
              :title="item.productObj.title"
              target="_blank"
              >{{item.productObj.title}}</a
            ><br />
          </div>
        </div>
        <div class="subtotal fn-right">
          <div class="subtotal-cell">¥ {{item.count * item.productObj.price}}</div>
        </div>
        <div class="goods-num fn-right">{{item.count}}</div>
        <div class="price fn-right">¥ {{item.productObj.price}}</div>
      </div>
    
    </div>
    <div class="order-discount-line">
      <p>商品总计： <span>¥ {{totalPrice}}</span></p>
      <p>运费： <span>+ ¥ {{freight}}</span></p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  computed:{
    ...mapState(['ticket']),
    ...mapGetters({
       'lists':'selectedCartLists',
       "totalPrice":"selectedPrice",
       "dd":"defaultAdd"
    }),
    freight(){
      return this.totalPrice>1000?'0.00':"15.00"
    },
    orderId(){
      return "2020" + new Date().getTime()
    }
  }
};
</script>

<style>
</style>