<template>
  			<div class="store-content">
				<div class="cart-box">
					<div class="title">
						<h2>购物清单</h2>
					</div>
					<div class="cart-inner">
						<div class="empty-label" v-if="!cartProductLists.length">
							<h3>您的购物车中还没有商品</h3>
							<router-link to="/">现在选购</router-link>
						</div>
						<div  v-else>
							<div class="cart-table-title">
								<span class="name">商品信息</span>
								<span class="operation">操作</span>
								<span class="subtotal">小计</span>
								<span class="num">数量</span>
								<span class="price">单价</span>
							</div>
							<div class="cart-table">
								<div class="cart-group">
									<!--购物列表-->
									<div class="cart-top-items"
									v-for="item in cartProductLists"
									:key="item.productObj.sku_id">
										<div class="cart-items">
											<div class="items-choose">
												<span :class="{'blue-checkbox-new':true, 'checkbox-on':item.isChecked}"
												@click="changeIsChecked({productObj:item.productObj})"><a></a></span>
											</div>
											<div class="items-thumb">
												<img :src="item.productObj.ali_image">
												<a href="javascript:;" target="_blank"></a>
											</div>
											<div class="name hide-row" >
												<div class="name-table">
													<a href="javascript:;" target="_blank">{{item.productObj.title}}</a>
													<ul class="attribute">
														<li>{{color(item.productObj)}}</li>
													</ul>
												</div>
											</div>
											<div class="operation">
												<a class="items-delete-btn" @click="delCartProduct({productObj:item.productObj})"></a>
											</div>
											<div class="subtotal">¥ {{ item.productObj.price * item.count }}</div>
											<div class="item-cols-num">
												<div class="select js-select-quantity">
													<span class="down"
													:class="{'down-disabled': item.count <= 1}"
													 @click="changeCartCount({obj:item.productObj,count:-1})">-</span>
													<span class="num">
														<input type="text" style="display: inline-block;"
														:value="item.count">
														<!-- <ul>
															<li>1</li>
															<li>2</li>
														</ul> -->
													</span>
													<span class="up" 
													:class="{'up-disabled': item.count >= item.productObj.limit_num}"
													@click="changeCartCount({obj:item.productObj,count:1})">+</span>
													
												</div>
											</div>
											<div class="price">¥ {{item.productObj.price}}</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					<div class="cart-bottom-bg fix-bottom" v-if="cartProductLists.length">
						<div class="cart-bar-operation">
							<div>
								<div class="choose-all js-choose-all">
									<span :class="{'blue-checkbox-new':true, 'checkbox-on':allChecked}"
									@click="changeAllChecked"><a></a></span>
									全选
								</div>
								<div class="delete-choose-goods">删除选中的商品</div>
							</div>
						</div>
						<div class="shipping">
							<div class="shipping-box">
								<div class="shipping-total shipping-num">
									<h4 class="">
										已选择 <i>{{selectedCount}}</i> 件商品
									</h4>
									<h5>
										共计 <i >{{totalCount}}</i> 件商品
									</h5>
								</div>
								<div class="shipping-total shipping-price">
									<h4 class="">
										应付总额：<span>￥</span><i >{{selectedPrice}}</i> 
									</h4>
									<h5 class="shipping-tips">
										应付总额不含运费
									</h5>
									
								</div>
							</div>
							<span class="jianguo-blue-main-btn big-main-btn js-checkout"
							:class="{'disabled-btn': isCheckout}"><router-link to="/checkout">现在结算</router-link></span>
						</div>
					</div>
				</div>
			</div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
	computed: {
		...mapState(['cartProductLists']),
		...mapGetters(['totalCount','selectedCount','selectedPrice']),
		color(){
			return function(obj){

				let product = obj.spec_json.find(item=>item.spec_value_id== obj.color_id)
				console.log(product);
				if(product) {
					return product.show_name
				}else {
					return '';
				}
				
			}
		},
		// 全选
		allChecked:{
			get(){
         return this.cartProductLists.every(item=>item.isChecked);
			},
			set(val){
         this.$store.commit('changeAllChecked',{isChecked:val})
			}
			
		},
		isCheckout(){
			return !this.cartProductLists.some(item=>item.isChecked)
		}
	},
	methods: {
		...mapMutations(['delCartProduct','changeCartCount']),
		changeIsChecked(obj){
			console.log(obj);
			this.$store.commit('changeIsChecked',obj);
		},
		changeAllChecked(){
			this.allChecked = !this.allChecked;
		}
	}
	
}
</script>

<style>

</style>