<template>
  <div class="item">
			<div>
				<div class="item-img">
					<img :alt="item.spu.sku_info[currIdx].title" 
					:src="item.spu.sku_info[currIdx].ali_image" style="opacity: 1;">
				</div>
				<h6>{{item.spu.shop_info.spu_title}}</h6>
				<h3 >{{item.spu.shop_info.spu_sub_title}}</h3>
				<div class="params-colors">
					<ul class="colors-list">
						<li v-for="(each,i) in filterLists"
						:key="each.color_id" 
						@mouseover="currIdx = i">
							<a href="javascript:;" :class="{active: i==currIdx }">
								<img :src="each.spec_json[0].image">
							</a>
						</li>
					</ul>
				</div>
				<div class="item-btns clearfix">
					<span class="item-gray-btn">
						<router-link :to="{'name':'details','query':{'productid':item.spu.sku_info[currIdx].sku_id }}">查看详情</router-link> 
					</span>
					<span class="item-blue-btn" @click="addCart(item.spu.sku_info[currIdx],$event)">加入购物车 </span>
				</div>
				<div class="item-price clearfix">
					<i>¥</i><span>{{item.spu.sku_info[currIdx].price}}</span>
				</div>
				<div class="discount-icon">false</div>
				<div class="item-cover">
					<router-link :to="{'name':'details','query':{'productid':item.spu.sku_info[currIdx].sku_id }}"></router-link>
				</div>
			</div>
		</div>
</template>

<script>
export default {
	props:{
		"item":{
			type: Object
		}
	},
	computed: {
		filterLists(){
			return this.item.spu.sku_info.filter(item=>item.spec_json[0].image)    
		}
	},
	data(){
		return {
			currIdx: 0
		}
	},
	methods: {
		addCart(obj,e){

			// 添加购物车
			this.$store.commit('addCartProduct',{productObj:obj, count:1})
			this.$store.commit('showOrHideCart',{bool:true})
		}
	}
}
</script>

<style>

</style>