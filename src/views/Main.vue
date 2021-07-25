<template>
  <div class="sku-box store-content">
    <div class="sort-option">
      <ul class="line clear">
        <li><a href="javascript:;" class="active">综合排序</a></li>
        <li><a href="javascript:;" class="">销量排序</a></li>
        <li><a href="javascript:;" class="">价格低到高</a></li>
        <li><a href="javascript:;" class="">价格高到低</a></li>
      </ul>
    </div>
    <div class="gray-box">
      <div class="item-box">
        <product-item
          v-for="item in productLists"
          :key="item.spu_id"
          :item="item"
        ></product-item>
      </div>
    </div>
  </div>
</template>

<script>
import productItem from "@/components/productItem/ProductItem";
export default {
  data() {
    return {
      productLists: [],
    };
  },
  components: {
    productItem,
  },
  async created() {
    let res = await fetch("/data/goodData.json");
    let data = await res.json();

    console.log(data);
    this.productLists = data;
  },
};
</script>

<style>
</style>