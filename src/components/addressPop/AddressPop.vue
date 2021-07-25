<template>
  <div id="pop">
    <div class="module-dialog-layer" style="display: block"></div>
    <div class="module-dialog clear module-dialog-address module-dialog-show">
      <div class="dialog-panel">
        <div class="topbar">
          <div class="dialog-tit clear">
            <h4 class="js-dialog-title">管理收货地址</h4>
          </div>
          <span class="dialog-close" @click="closeFn">x</span>
        </div>
        <div class="dialog-con js-dialog-container">
          <div class="animate-layer">
            <div class="dialog-inner js-address-add">
              <div class="save-address-box">
                <div class="address-form">
                  <div class="module-form-row">
                    <div class="form-item-v3">
                      <!-- <i>收货人姓名</i> -->
                      <input type="text" class="js-verify" placeholder="收货人姓名"
                      v-model="addressInfo.name" />
                      <div class="verify-error">{{verifyName}}</div>
                    </div>
                  </div>
                  <div class="module-form-row">
                    <div class="form-item-v3">
                      <!-- <i>手机号</i> -->
                      <input type="text" class="js-verify" placeholder="手机号"
                      v-model="addressInfo.phone" />
                      <div class="verify-error">{{verifyPhone}}</div>
                    </div>
                  </div>
                  <div class="module-form-row clear">
                    <div
                      class="form-item-v3 area-code-w fn-left form-valid-item"
                    >
                      <!-- <i>区号（可选）</i> -->
                      <input
                        type="text"
                        class="js-verify js-address-area-code"
                        placeholder="区号（可选）"
                        v-model="addressInfo.areacode"
                      />
                      <div class="verify-error"></div>
                    </div>
                    <div
                      class="form-item-v3 telephone-w fn-right form-valid-item"
                    >
                      <!-- <i>固定电话（可选）</i> -->
                      <input
                        type="text"
                        class="js-verify js-address-telephone"
                        placeholder="固定电话（可选）"
                        v-model="addressInfo.tel"
                      />
                      <div class="verify-error"></div>
                    </div>
                  </div>
                  <div class="module-form-row clear">
                    <div class="form-item-v3 select-item province-wrapper">
                      <select
                        name="province_code"
                        v-model="addressInfo.provinceId"
                        class="province select-province js-form-province js-verify"
                        @change="changeAddress('p')"
                      >
                        <option value="0">请选择省份</option>
                        <option :value="item.aid"
                        v-for="item in provinceLists"
                        :key="item.aid">{{item.atitle}}</option>
                       
                      </select>
                    </div>
                  </div>
                  <div class="module-form-row clear">
                    <div
                      class="form-item-v3 select-item city-wrapper fn-left form-focus-item"
                    >
                      <select class="city select-city js-form-city js-verify"
                      v-model="addressInfo.cityId"
                      @change="changeAddress('c')">
                        <option value="0">请选择城市</option>
                        <option :value="item.aid"
                        v-for="item in cityLists"
                        :key="item.aid">{{item.atitle}}</option>
                      </select>
                    </div>
                    <div
                      class="form-item-v3 select-item district-wrapper fn-right form-focus-item"
                    >
                      <select class="city select-city js-form-city js-verify"
                      v-model="addressInfo.areasId">
                        <option value="0">请选择区县</option>
                        <option :value="item.aid"
                        v-for="item in areasLists"
                        :key="item.aid">{{item.atitle}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="module-form-row">
                    <div class="form-item-v3">
                      <!-- <i>详细地址，如街道名称，楼层，门牌号码等</i> -->
                      <input type="text" class="js-verify" placeholder="详细地址，如街道名称，楼层，门牌号码等" 
                      v-model="addressInfo.add"/>
                      <div class="verify-error"></div>
                    </div>
                  </div>
                  <div class="module-form-row fn-clear">
                    <input type="checkbox" class="hide" />
                    <span class="blue-checkbox" :class="{'blue-checkbox-on': addressInfo.default}"
                    @click="addressInfo.default=!addressInfo.default"></span>设为默认
                  </div>
                  <div
                    class="dialog-blue-btn big-main-btn js-verify-address"
                    :class="{'disabled-btn': !allChecked}"
                    @click="saveData"
                  >
                    <a>保存</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isshow: Boolean,
    addData: Object
  },
  data(){
    return {
      addressInfo: {
            name: '',
            phone: '',
            areacode: '',
            tel: '',
            provinceId: "0",
            province: '',
            cityId: "0",
            city: "",
            areasId: "0",
            areas: "",
            add: '',
            default: false
        },
      oldAddressInfo:{
          name: '',
          phone: '',
          areacode: '',
          tel: '',
          provinceId: "0",
          province: '',
          cityId: "0",
          city: "",
          areasId: "0",
          areas: "",
          add: '',
          default: false
      },
      allDatas: [],
      // 省列表
      provinceLists: [],
      // 市列表
      cityLists: [],
      // 区县列表
      areasLists: [],
      // 姓名的验证
      verifyName: ' ',
      verifyPhone:" "

    }
  },
  watch: {
    addData:{
      handler(obj){
        if(obj){
          // 修改
          this.addressInfo = obj;
        }else {
          this.addressInfo = this.oldAddressInfo;
        }

     },
     immediate:true
      
    },
    "addressInfo.name"(val){
      
        if((val.length < 2 || val.length >4) ) {
          this.verifyName = '您输入的姓名不符合规则'
        }else {
          this.verifyName = '';
        }
      
      
    },
    "addressInfo.phone"(val){
      if(/^1[35679]\d{9}$/.test(val)){
        this.verifyPhone = ''
      }else {
        this.verifyPhone = '您的手机号不符合规则'
      }
    }
  },
  computed:{
    allChecked(){
      // 是否全部通过校验
      if(this.verifyPhone==''&&this.verifyName==''&&this.addressInfo.add!=''){
        // 校验通过了
        // console.log('当前你填写的地址已经通过校验了');
        return true;
      }else {
        return false;
      }
    }
  },
  methods:{
    closeFn(){
      this.$emit('update:isshow',false)
    },
    // 更改省市区的方法
    changeAddress(tip){
     
      console.log(event.target.value);
      if(tip=='p'){
           // 获取所有的市
        this.cityLists = this.allDatas.filter(item=>item.pid===event.target.value)
        this.addressInfo.cityId = '0';
        this.areasLists = [];
        this.addressInfo.areasId = '0';
      }else if(tip == 'c') {
           // 获取所有的市
        this.areasLists = this.allDatas.filter(item=>item.pid===event.target.value)
        this.addressInfo.areasId = '0';
      }
   
    },
    saveData(){
      // 这个方法 既可能是 添加一个新地址 也可以是 修改一个原有地址

      this.allDatas.forEach(item=>{

        if(item.aid==this.addressInfo.provinceId){
           this.addressInfo.province = item.atitle
        }
        if(item.aid==this.addressInfo.cityId){
           this.addressInfo.city = item.atitle
        }
        if(item.aid==this.addressInfo.areasId){
           this.addressInfo.areas = item.atitle
        }

      })
      
      // 通过 addData 到底是收货地址对象(修改) 还是 null (添加)
      if(this.addData) {
        // 要修改
        this.$store.commit('saveData',{info:this.addressInfo,type:'modify'})
      }else {
        // 要添加新的
        this.$store.commit('saveData',{info:this.addressInfo,type:'add'})
      }

    
      // 把但前的整个地址信息重置为初始化状态
      this.addressInfo = this.oldAddressInfo;
      // 谁在当前的弹出框隐藏
      this.$emit('update:isshow',false)
    }
  },
  async created() {
    let res = await fetch('/data/areas.json')
    this.allDatas = await res.json();

    // 先拿到所有省
    this.provinceLists = this.allDatas.filter(item=>item.pid=='')
    
  },
};
</script>

<style>
</style>