(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["importCom"],{"1da1":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));s("d3b7");function a(t,e,s,a,i,r,n){try{var o=t[r](n),c=o.value}catch(l){return void s(l)}o.done?e(c):Promise.resolve(c).then(a,i)}function i(t){return function(){var e=this,s=arguments;return new Promise((function(i,r){var n=t.apply(e,s);function o(t){a(n,i,r,o,c,"next",t)}function c(t){a(n,i,r,o,c,"throw",t)}o(void 0)}))}}},"6d84":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content page-order-payment"},[s("div",{staticClass:"gray-box clear"},[t._m(0),t._m(1),s("div",{staticClass:"box-inner payment-checkout-panel clear"},[t._m(2),s("span",{staticClass:"prices"},[t._v(" 应付金额： "),s("em",[s("span",[t._v("¥ ")]),t._v(t._s(t.totalPrice+Number(t.freight)))])])])]),s("div",{staticClass:"confirm-detail"},[s("div",{staticClass:"info-title"},[t._v("订单编号")]),s("p",{staticClass:"info-detail"},[t._v(t._s(t.orderId))])]),s("div",{staticClass:"confirm-detail"},[s("div",{staticClass:"info-title"},[t._v("收货信息")]),s("p",{staticClass:"info-detail"},[t._v("姓名："+t._s(t.dd.name))]),s("p",{staticClass:"info-detail"},[t._v("联系电话："+t._s(t.dd.phone))]),s("p",{staticClass:"info-detail"},[t._v(" 详细地址："+t._s(t.dd.province)+t._s(t.dd.city)+t._s(t.dd.areas)+t._s(t.dd.add)+" ")])]),s("div",{staticClass:"confirm-detail"},[s("div",{staticClass:"info-title"},[t._v("发票信息")]),s("p",{staticClass:"info-detail"},[t._v("发票类型：电子发票")]),s("p",{staticClass:"info-detail"},[t._v("发票抬头："+t._s(t.ticket.name))]),s("p",{staticClass:"info-detail"},[t._v("发票内容：购买商品明细 "+t._s(t.ticket.msg))])]),t._m(3),s("div",{staticClass:"confirm-goods-table"},t._l(t.lists,(function(e,a){return s("div",{key:a,staticClass:"cart-items clear"},[s("div",{staticClass:"name fn-left hide-row"},[s("div",{staticClass:"name-cell"},[s("a",{attrs:{href:"http://www.smartisan.com/shop/#/item/100029901",title:e.productObj.title,target:"_blank"}},[t._v(t._s(e.productObj.title))]),s("br")])]),s("div",{staticClass:"subtotal fn-right"},[s("div",{staticClass:"subtotal-cell"},[t._v("¥ "+t._s(e.count*e.productObj.price))])]),s("div",{staticClass:"goods-num fn-right"},[t._v(t._s(e.count))]),s("div",{staticClass:"price fn-right"},[t._v("¥ "+t._s(e.productObj.price))])])})),0),s("div",{staticClass:"order-discount-line"},[s("p",[t._v("商品总计： "),s("span",[t._v("¥ "+t._s(t.totalPrice))])]),s("p",[t._v("运费： "),s("span",[t._v("+ ¥ "+t._s(t.freight))])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",[t._v("支付订单")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-inner order-info"},[s("h3",[t._v("提交订单成功")]),s("p",{staticClass:"payment-detail"},[t._v(" 请在 "),s("span",[t._v("24 小时内")]),t._v("完成支付，超时订单将自动取消。 ")]),s("p",{staticClass:"payment-detail"},[t._v("我们将在您完成支付后的 72 小时内发货")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"jianguo-blue-main-btn big-main-btn js-payment-order"},[s("a",[t._v("现在支付")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"confirm-table-title clear"},[s("span",{staticClass:"name fn-left"},[t._v("商品信息")]),s("span",{staticClass:"subtotal fn-right"},[t._v("小计")]),s("span",{staticClass:"num fn-right"},[t._v("数量")]),s("span",{staticClass:"price fn-right"},[t._v("单价")])])}],r=s("5530"),n=s("2f62"),o={computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(n["d"])(["ticket"])),Object(n["b"])({lists:"selectedCartLists",totalPrice:"selectedPrice",dd:"defaultAdd"})),{},{freight:function(){return this.totalPrice>1e3?"0.00":"15.00"},orderId:function(){return"2020"+(new Date).getTime()}})},c=o,l=s("2877"),d=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=d.exports},"96cf":function(t,e,s){var a=function(t){"use strict";var e,s=Object.prototype,a=s.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",n=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function c(t,e,s){return Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(A){c=function(t,e,s){return t[e]=s}}function l(t,e,s,a){var i=e&&e.prototype instanceof h?e:h,r=Object.create(i.prototype),n=new L(a||[]);return r._invoke=k(t,s,n),r}function d(t,e,s){try{return{type:"normal",arg:t.call(e,s)}}catch(A){return{type:"throw",arg:A}}}t.wrap=l;var u="suspendedStart",v="suspendedYield",p="executing",f="completed",m={};function h(){}function _(){}function C(){}var b={};b[r]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g($([])));y&&y!==s&&a.call(y,r)&&(b=y);var j=C.prototype=h.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function s(i,r,n,o){var c=d(t[i],t,r);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"===typeof u&&a.call(u,"__await")?e.resolve(u.__await).then((function(t){s("next",t,n,o)}),(function(t){s("throw",t,n,o)})):e.resolve(u).then((function(t){l.value=t,n(l)}),(function(t){return s("throw",t,n,o)}))}o(c.arg)}var i;function r(t,a){function r(){return new e((function(e,i){s(t,a,e,i)}))}return i=i?i.then(r,r):r()}this._invoke=r}function k(t,e,s){var a=u;return function(i,r){if(a===p)throw new Error("Generator is already running");if(a===f){if("throw"===i)throw r;return E()}s.method=i,s.arg=r;while(1){var n=s.delegate;if(n){var o=I(n,s);if(o){if(o===m)continue;return o}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(a===u)throw a=f,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);a=p;var c=d(t,e,s);if("normal"===c.type){if(a=s.done?f:v,c.arg===m)continue;return{value:c.arg,done:s.done}}"throw"===c.type&&(a=f,s.method="throw",s.arg=c.arg)}}}function I(t,s){var a=t.iterator[s.method];if(a===e){if(s.delegate=null,"throw"===s.method){if(t.iterator["return"]&&(s.method="return",s.arg=e,I(t,s),"throw"===s.method))return m;s.method="throw",s.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=d(a,t.iterator,s.arg);if("throw"===i.type)return s.method="throw",s.arg=i.arg,s.delegate=null,m;var r=i.arg;return r?r.done?(s[t.resultName]=r.value,s.next=t.nextLoc,"return"!==s.method&&(s.method="next",s.arg=e),s.delegate=null,m):r:(s.method="throw",s.arg=new TypeError("iterator result is not an object"),s.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function $(t){if(t){var s=t[r];if(s)return s.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,n=function s(){while(++i<t.length)if(a.call(t,i))return s.value=t[i],s.done=!1,s;return s.value=e,s.done=!0,s};return n.next=n}}return{next:E}}function E(){return{value:e,done:!0}}return _.prototype=j.constructor=C,C.constructor=_,_.displayName=c(C,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c(t,o,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},w(x.prototype),x.prototype[n]=function(){return this},t.AsyncIterator=x,t.async=function(e,s,a,i,r){void 0===r&&(r=Promise);var n=new x(l(e,s,a,i),r);return t.isGeneratorFunction(s)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},w(j),c(j,o,"Generator"),j[r]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var s in t)e.push(s);return e.reverse(),function s(){while(e.length){var a=e.pop();if(a in t)return s.value=a,s.done=!1,s}return s.done=!0,s}},t.values=$,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var s in this)"t"===s.charAt(0)&&a.call(this,s)&&!isNaN(+s.slice(1))&&(this[s]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var s=this;function i(a,i){return o.type="throw",o.arg=t,s.next=a,i&&(s.method="next",s.arg=e),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r],o=n.completion;if("root"===n.tryLoc)return i("end");if(n.tryLoc<=this.prev){var c=a.call(n,"catchLoc"),l=a.call(n,"finallyLoc");if(c&&l){if(this.prev<n.catchLoc)return i(n.catchLoc,!0);if(this.prev<n.finallyLoc)return i(n.finallyLoc)}else if(c){if(this.prev<n.catchLoc)return i(n.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return i(n.finallyLoc)}}}},abrupt:function(t,e){for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var n=r?r.completion:{};return n.type=t,n.arg=e,r?(this.method="next",this.next=r.finallyLoc,m):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.finallyLoc===t)return this.complete(s.completion,s.afterLoc),P(s),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.tryLoc===t){var a=s.completion;if("throw"===a.type){var i=a.arg;P(s)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,s,a){return this.delegate={iterator:$(t),resultName:s,nextLoc:a},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=a}catch(i){Function("r","regeneratorRuntime = r")(a)}},b1f0:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-content item"},[s("div",{staticClass:"item-box"},[s("div",{staticClass:"gallery-wrapper"},[s("div",{staticClass:"gallery"},[s("div",{staticClass:"thumb"},[s("ul",[s("li",{staticClass:"on"},[s("img",{staticStyle:{width:"100%"},attrs:{src:t.productObj.ali_image}})])])])])]),s("div",{staticClass:"banner"},[s("div",{staticClass:"sku-custom-title"},[s("div",{staticClass:"params-price"},[s("span",[s("em",[t._v("¥")]),s("i",[t._v(t._s(t.productObj.price))])])]),s("div",{staticClass:"params-info"},[s("h4",[t._v(t._s(t.productObj.title))]),s("h6",[t._v(t._s(t.productObj.sub_title))])])]),s("div",{staticClass:"sku-dynamic-params-panel"},[s("div",{staticClass:"sku-dynamic-params clear"},[s("span",{staticClass:"params-name"},[t._v("颜色")]),s("ul",{staticClass:"params-colors"},t._l(t.productObj.spec_json,(function(e,a){return s("li",{key:e.spec_value_id,class:{cur:t.currentIdx==a},on:{click:function(s){return t.changeProduct(a,e.spec_value_id)}}},[s("a",[s("i",[s("img",{attrs:{src:e.image}})])])])})),0)]),s("div",{staticClass:"sku-dynamic-params clear"},[s("div",{staticClass:"params-name"},[t._v("数量")]),s("div",{staticClass:"params-detail clear"},[s("div",{staticClass:"item-num js-select-quantity"},[s("span",{class:{down:!0,"down-disabled":t.count<=1},on:{click:t.reduceCount}},[t._v("-")]),s("span",{staticClass:"num"},[t._v(t._s(t.count))]),s("span",{class:{up:!0,"up-disabled":t.count>=t.productObj.limit_num},on:{click:t.addCount}},[t._v("+")])])])])]),s("div",{staticClass:"sku-status"},[s("div",{staticClass:"cart-operation-wrapper clearfix"},[s("span",{staticClass:"blue-title-btn js-add-cart",on:{click:t.addCart}},[s("a",[t._v("加入购物车")])]),s("span",{staticClass:"gray-title-btn",on:{click:t.gotoCart}},[s("a",[t._v("现在购买")])])])])])])])},i=[],r=s("1da1"),n=(s("96cf"),s("7db0"),s("c740"),s("d3b7"),{data:function(){return{goodsLists:[],productObj:{},id:this.$route.query.productid,count:1}},watch:{$route:{handler:function(t){this.productObj=this.goodsLists.find((function(e){return e.sku_id==t.query.productid}))}}},computed:{currentIdx:{get:function(){var t=this;return this.productObj.spec_json.findIndex((function(e){return e.spec_value_id==t.productObj.color_id}))},set:function(t){}}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/itemData.json");case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,console.log(a),t.goodsLists=a,t.productObj=a.find((function(e){return e.sku_id==t.id}));case 9:case"end":return e.stop()}}),e)})))()},methods:{changeProduct:function(t,e){this.currentIdx=t,this.productObj=this.goodsLists.find((function(t){return t.color_id==e})),this.$router.push({name:"details",query:{productid:this.productObj.sku_id}}),this.count=1},reduceCount:function(){this.count>1&&this.count--},addCount:function(){this.count<this.productObj.limit_num&&this.count++},addCart:function(t){this.$paowu(this.productObj.ali_image,t),this.$store.commit("addCartProduct",{productObj:this.productObj,count:this.count})},gotoCart:function(){this.$store.commit("addCartProduct",{productObj:this.productObj,count:this.count}),this.$router.push({name:"cartpage"})}}}),o=n,c=s("2877"),l=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports},cd56:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sku-box store-content"},[t._m(0),s("div",{staticClass:"gray-box"},[s("div",{staticClass:"item-box"},t._l(t.productLists,(function(t){return s("product-item",{key:t.spu_id,attrs:{item:t}})})),1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sort-option"},[s("ul",{staticClass:"line clear"},[s("li",[s("a",{staticClass:"active",attrs:{href:"javascript:;"}},[t._v("综合排序")])]),s("li",[s("a",{attrs:{href:"javascript:;"}},[t._v("销量排序")])]),s("li",[s("a",{attrs:{href:"javascript:;"}},[t._v("价格低到高")])]),s("li",[s("a",{attrs:{href:"javascript:;"}},[t._v("价格高到低")])])])])}],r=s("1da1"),n=(s("96cf"),s("d3b7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("div",[s("div",{staticClass:"item-img"},[s("img",{staticStyle:{opacity:"1"},attrs:{alt:t.item.spu.sku_info[t.currIdx].title,src:t.item.spu.sku_info[t.currIdx].ali_image}})]),s("h6",[t._v(t._s(t.item.spu.shop_info.spu_title))]),s("h3",[t._v(t._s(t.item.spu.shop_info.spu_sub_title))]),s("div",{staticClass:"params-colors"},[s("ul",{staticClass:"colors-list"},t._l(t.filterLists,(function(e,a){return s("li",{key:e.color_id,on:{mouseover:function(e){t.currIdx=a}}},[s("a",{class:{active:a==t.currIdx},attrs:{href:"javascript:;"}},[s("img",{attrs:{src:e.spec_json[0].image}})])])})),0)]),s("div",{staticClass:"item-btns clearfix"},[s("span",{staticClass:"item-gray-btn"},[s("router-link",{attrs:{to:{name:"details",query:{productid:t.item.spu.sku_info[t.currIdx].sku_id}}}},[t._v("查看详情")])],1),s("span",{staticClass:"item-blue-btn",on:{click:function(e){return t.addCart(t.item.spu.sku_info[t.currIdx],e)}}},[t._v("加入购物车 ")])]),s("div",{staticClass:"item-price clearfix"},[s("i",[t._v("¥")]),s("span",[t._v(t._s(t.item.spu.sku_info[t.currIdx].price))])]),s("div",{staticClass:"discount-icon"},[t._v("false")]),s("div",{staticClass:"item-cover"},[s("router-link",{attrs:{to:{name:"details",query:{productid:t.item.spu.sku_info[t.currIdx].sku_id}}}})],1)])])}),o=[],c=(s("4de4"),{props:{item:{type:Object}},computed:{filterLists:function(){return this.item.spu.sku_info.filter((function(t){return t.spec_json[0].image}))}},data:function(){return{currIdx:0}},methods:{addCart:function(t,e){this.$store.commit("addCartProduct",{productObj:t,count:1}),this.$store.commit("showOrHideCart",{bool:!0})}}}),l=c,d=s("2877"),u=Object(d["a"])(l,n,o,!1,null,null,null),v=u.exports,p={data:function(){return{productLists:[]}},components:{productItem:v},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/goodData.json");case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,console.log(a),t.productLists=a;case 8:case"end":return e.stop()}}),e)})))()}},f=p,m=Object(d["a"])(f,a,i,!1,null,null,null);e["default"]=m.exports},d9fa:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content page-order-checkout checkout"},[s("div",{staticClass:"js-checkout-address-box"},[s("div",{staticClass:"gray-box clear"},[t._m(0),s("div",{staticClass:"box-inner js-checkout-address-panel"},[s("div",{staticClass:"address-common-table js-multiple-address-panel"},[s("ul",{staticClass:"address-item-list clear js-address-item-list"},[t._l(t.addressInfo,(function(e,a){return s("li",{key:a,staticClass:"js-choose-address",class:{"selected-address-item":e.default},on:{mouseenter:function(e){t.isShowBtmAdd=a},mouseleave:function(e){t.isShowBtmAdd=-1}}},[s("div",{staticClass:"address-item"},[s("div",{staticClass:"name-section"},[t._v(t._s(e.name))]),s("div",{staticClass:"mobile-section"},[t._v(t._s(e.phone))]),s("div",{staticClass:"detail-section"},[t._v(" "+t._s(e.province)+" "+t._s(e.city)+" "+t._s(e.areas)),s("br"),t._v(" "+t._s(e.add)+" ")])]),s("div",{staticClass:"operation-section",style:{transform:t.isShowBtmAdd==a?"translate(0,0px)":"translate(0, 29px)"}},[s("span",{staticClass:"update-btn js-edit-address",on:{click:function(s){return t.changeAddressPop(e)}}},[t._v("修改")]),s("span",{staticClass:"delete-btn js-delete-address",on:{click:function(e){return t.delAddress({index:a})}}},[t._v("删除")])])])})),s("li",{staticClass:"add-address-item js-add-address",on:{click:function(e){return t.changeAddressPop(null)}}},[s("p",[t._v("使用新地址")])])],2)])])])]),s("div",{staticClass:"gray-box"},[t._m(1),s("div",{staticClass:"box-inner invoice-box js-invoice-box"},[s("p",{staticClass:"invoice-detail"},[t._v("发票类型：电子发票")]),s("div",{staticClass:"invoice-detail"},[t._v(" 发票抬头： "),s("div",{staticClass:"radio-box"},[s("label",[s("input",{staticClass:"hide",attrs:{type:"radio"}}),s("span",{staticClass:"blue-radio",class:{"blue-radio-on":!t.selectBool},on:{click:function(e){t.selectBool=!1}}},[s("a")]),t._v(" 个人 ")]),s("label",[s("input",{staticClass:"hide",attrs:{type:"radio"}}),s("span",{staticClass:"blue-radio",class:{"blue-radio-on":t.selectBool},on:{click:function(e){t.selectBool=!0}}},[s("a")]),t._v(" 单位 ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.selectBool,expression:"selectBool"}],staticClass:"module-form-row form-item fn-hide js-invoice-title"},[s("div",{staticClass:"module-form-item-wrapper no-icon small-item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.companyMsg,expression:"companyMsg"}],staticClass:"js-verify",attrs:{type:"text",placeholder:"请填写公司发票抬头"},domProps:{value:t.companyMsg},on:{input:function(e){e.target.composing||(t.companyMsg=e.target.value)}}})])])]),s("p",{staticClass:"invoice-detail"},[t._v("发票内容：购买商品明细")]),s("p",{staticClass:"invoice-label"},[t._v(" 电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。 ")])])]),s("div",{staticClass:"gray-box"},[t._m(2),s("div",{staticClass:"box-inner ui-goods-cart"},[t._m(3),s("div",{staticClass:"cart-table"},[s("div",{staticClass:"cart-group js-cart-group"},t._l(t.selectedCartLists,(function(e,a){return s("div",{key:a,staticClass:"cart-items"},[s("div",{staticClass:"items-thumb"},[s("a",{attrs:{href:"javascript:;",target:"_blank"}},[s("img",{attrs:{src:e.productObj.ali_image}})])]),s("div",{staticClass:"name hide-row"},[s("div",{staticClass:"name-cell"},[s("a",{attrs:{href:"javascript:;",title:e.productObj.title,target:"_blank"}},[t._v(t._s(e.productObj.title))])])]),s("div",{staticClass:"subtotal"},[s("div",{staticClass:"subtotal-cell"},[t._v("¥ "+t._s(e.count*e.productObj.price))])]),s("div",{staticClass:"goods-num"},[t._v(t._s(e.count))]),s("div",{staticClass:"price"},[t._v("¥ "+t._s(e.productObj.price))])])})),0)])]),s("div",{staticClass:"box-inner"},[s("div",{staticClass:"order-discount-line"},[s("p",[t._v("商品总计： "),s("span",[t._v("¥ "+t._s(t.selectedPrice))])]),t._m(4),t._m(5)])]),s("div",{staticClass:"box-inner"},[s("div",{staticClass:"last-payment clear"},[s("span",{staticClass:"jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout",on:{click:t.goToPayment}},[s("a",[t._v("提交订单")])]),s("span",{staticClass:"prices fn-right"},[t._v("应付金额： "),s("em",[t._v("¥ "+t._s(t.selectedPrice))])])])])]),s("address-pop",{directives:[{name:"show",rawName:"v-show",value:t.isShowAddressPop,expression:"isShowAddressPop"}],attrs:{isshow:t.isShowAddressPop,addData:t.addData},on:{"update:isshow":function(e){t.isShowAddressPop=e}}})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title columns-title pre-title"},[s("h2",[t._v("收货信息")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",[t._v("发票信息")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title pre-title"},[s("h2",[t._v("购物清单")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gray-sub-title cart-table-title"},[s("span",{staticClass:"name"},[t._v("商品名称")]),s("span",{staticClass:"subtotal"},[t._v("小计")]),s("span",{staticClass:"num"},[t._v("数量")]),s("span",{staticClass:"price"},[t._v("单价")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("运费： "),s("span",[t._v("+ ¥ 0.00")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"discount-line js-discount-cash"},[s("em",[t._v("现金券")]),t._v("： "),s("span",[t._v(" - 0 ")])])}],r=s("5530"),n=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"pop"}},[s("div",{staticClass:"module-dialog-layer",staticStyle:{display:"block"}}),s("div",{staticClass:"module-dialog clear module-dialog-address module-dialog-show"},[s("div",{staticClass:"dialog-panel"},[s("div",{staticClass:"topbar"},[t._m(0),s("span",{staticClass:"dialog-close",on:{click:t.closeFn}},[t._v("x")])]),s("div",{staticClass:"dialog-con js-dialog-container"},[s("div",{staticClass:"animate-layer"},[s("div",{staticClass:"dialog-inner js-address-add"},[s("div",{staticClass:"save-address-box"},[s("div",{staticClass:"address-form"},[s("div",{staticClass:"module-form-row"},[s("div",{staticClass:"form-item-v3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addressInfo.name,expression:"addressInfo.name"}],staticClass:"js-verify",attrs:{type:"text",placeholder:"收货人姓名"},domProps:{value:t.addressInfo.name},on:{input:function(e){e.target.composing||t.$set(t.addressInfo,"name",e.target.value)}}}),s("div",{staticClass:"verify-error"},[t._v(t._s(t.verifyName))])])]),s("div",{staticClass:"module-form-row"},[s("div",{staticClass:"form-item-v3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addressInfo.phone,expression:"addressInfo.phone"}],staticClass:"js-verify",attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.addressInfo.phone},on:{input:function(e){e.target.composing||t.$set(t.addressInfo,"phone",e.target.value)}}}),s("div",{staticClass:"verify-error"},[t._v(t._s(t.verifyPhone))])])]),s("div",{staticClass:"module-form-row clear"},[s("div",{staticClass:"form-item-v3 area-code-w fn-left form-valid-item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addressInfo.areacode,expression:"addressInfo.areacode"}],staticClass:"js-verify js-address-area-code",attrs:{type:"text",placeholder:"区号（可选）"},domProps:{value:t.addressInfo.areacode},on:{input:function(e){e.target.composing||t.$set(t.addressInfo,"areacode",e.target.value)}}}),s("div",{staticClass:"verify-error"})]),s("div",{staticClass:"form-item-v3 telephone-w fn-right form-valid-item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addressInfo.tel,expression:"addressInfo.tel"}],staticClass:"js-verify js-address-telephone",attrs:{type:"text",placeholder:"固定电话（可选）"},domProps:{value:t.addressInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.addressInfo,"tel",e.target.value)}}}),s("div",{staticClass:"verify-error"})])]),s("div",{staticClass:"module-form-row clear"},[s("div",{staticClass:"form-item-v3 select-item province-wrapper"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.addressInfo.provinceId,expression:"addressInfo.provinceId"}],staticClass:"province select-province js-form-province js-verify",attrs:{name:"province_code"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.addressInfo,"provinceId",e.target.multiple?s:s[0])},function(e){return t.changeAddress("p")}]}},[s("option",{attrs:{value:"0"}},[t._v("请选择省份")]),t._l(t.provinceLists,(function(e){return s("option",{key:e.aid,domProps:{value:e.aid}},[t._v(t._s(e.atitle))])}))],2)])]),s("div",{staticClass:"module-form-row clear"},[s("div",{staticClass:"form-item-v3 select-item city-wrapper fn-left form-focus-item"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.addressInfo.cityId,expression:"addressInfo.cityId"}],staticClass:"city select-city js-form-city js-verify",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.addressInfo,"cityId",e.target.multiple?s:s[0])},function(e){return t.changeAddress("c")}]}},[s("option",{attrs:{value:"0"}},[t._v("请选择城市")]),t._l(t.cityLists,(function(e){return s("option",{key:e.aid,domProps:{value:e.aid}},[t._v(t._s(e.atitle))])}))],2)]),s("div",{staticClass:"form-item-v3 select-item district-wrapper fn-right form-focus-item"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.addressInfo.areasId,expression:"addressInfo.areasId"}],staticClass:"city select-city js-form-city js-verify",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.addressInfo,"areasId",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"0"}},[t._v("请选择区县")]),t._l(t.areasLists,(function(e){return s("option",{key:e.aid,domProps:{value:e.aid}},[t._v(t._s(e.atitle))])}))],2)])]),s("div",{staticClass:"module-form-row"},[s("div",{staticClass:"form-item-v3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addressInfo.add,expression:"addressInfo.add"}],staticClass:"js-verify",attrs:{type:"text",placeholder:"详细地址，如街道名称，楼层，门牌号码等"},domProps:{value:t.addressInfo.add},on:{input:function(e){e.target.composing||t.$set(t.addressInfo,"add",e.target.value)}}}),s("div",{staticClass:"verify-error"})])]),s("div",{staticClass:"module-form-row fn-clear"},[s("input",{staticClass:"hide",attrs:{type:"checkbox"}}),s("span",{staticClass:"blue-checkbox",class:{"blue-checkbox-on":t.addressInfo.default},on:{click:function(e){t.addressInfo.default=!t.addressInfo.default}}}),t._v("设为默认 ")]),s("div",{staticClass:"dialog-blue-btn big-main-btn js-verify-address",class:{"disabled-btn":!t.allChecked},on:{click:t.saveData}},[s("a",[t._v("保存")])])])])])])])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dialog-tit clear"},[s("h4",{staticClass:"js-dialog-title"},[t._v("管理收货地址")])])}],l=s("1da1"),d=(s("96cf"),s("4de4"),s("159b"),s("d3b7"),{props:{isshow:Boolean,addData:Object},data:function(){return{addressInfo:{name:"",phone:"",areacode:"",tel:"",provinceId:"0",province:"",cityId:"0",city:"",areasId:"0",areas:"",add:"",default:!1},oldAddressInfo:{name:"",phone:"",areacode:"",tel:"",provinceId:"0",province:"",cityId:"0",city:"",areasId:"0",areas:"",add:"",default:!1},allDatas:[],provinceLists:[],cityLists:[],areasLists:[],verifyName:" ",verifyPhone:" "}},watch:{addData:{handler:function(t){this.addressInfo=t||this.oldAddressInfo},immediate:!0},"addressInfo.name":function(t){t.length<2||t.length>4?this.verifyName="您输入的姓名不符合规则":this.verifyName=""},"addressInfo.phone":function(t){/^1[35679]\d{9}$/.test(t)?this.verifyPhone="":this.verifyPhone="您的手机号不符合规则"}},computed:{allChecked:function(){return""==this.verifyPhone&&""==this.verifyName&&""!=this.addressInfo.add}},methods:{closeFn:function(){this.$emit("update:isshow",!1)},changeAddress:function(t){console.log(event.target.value),"p"==t?(this.cityLists=this.allDatas.filter((function(t){return t.pid===event.target.value})),this.addressInfo.cityId="0",this.areasLists=[],this.addressInfo.areasId="0"):"c"==t&&(this.areasLists=this.allDatas.filter((function(t){return t.pid===event.target.value})),this.addressInfo.areasId="0")},saveData:function(){var t=this;this.allDatas.forEach((function(e){e.aid==t.addressInfo.provinceId&&(t.addressInfo.province=e.atitle),e.aid==t.addressInfo.cityId&&(t.addressInfo.city=e.atitle),e.aid==t.addressInfo.areasId&&(t.addressInfo.areas=e.atitle)})),this.addData?this.$store.commit("saveData",{info:this.addressInfo,type:"modify"}):this.$store.commit("saveData",{info:this.addressInfo,type:"add"}),this.addressInfo=this.oldAddressInfo,this.$emit("update:isshow",!1)}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/areas.json");case 2:return s=e.sent,e.next=5,s.json();case 5:t.allDatas=e.sent,t.provinceLists=t.allDatas.filter((function(t){return""==t.pid}));case 7:case"end":return e.stop()}}),e)})))()}}),u=d,v=s("2877"),p=Object(v["a"])(u,o,c,!1,null,null,null),f=p.exports,m={computed:Object(r["a"])(Object(r["a"])({},Object(n["d"])(["addressInfo"])),Object(n["b"])(["selectedCartLists","selectedPrice"])),data:function(){return{isShowBtmAdd:-1,isShowAddressPop:!1,addData:{},selectBool:!1,companyMsg:""}},components:{addressPop:f},methods:Object(r["a"])(Object(r["a"])({},Object(n["c"])(["delAddress"])),{},{changeAddressPop:function(t){this.addData=t?Object(r["a"])({},t):t,this.isShowAddressPop=!0},goToPayment:function(){this.$router.push({name:"payment"}),this.$store.commit("commitTicket",{bool:this.selectBool,msg:this.companyMsg})}})},h=m,_=Object(v["a"])(h,a,i,!1,null,null,null);e["default"]=_.exports},fe67:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-content"},[s("div",{staticClass:"cart-box"},[t._m(0),s("div",{staticClass:"cart-inner"},[t.cartProductLists.length?s("div",[t._m(1),s("div",{staticClass:"cart-table"},[s("div",{staticClass:"cart-group"},t._l(t.cartProductLists,(function(e){return s("div",{key:e.productObj.sku_id,staticClass:"cart-top-items"},[s("div",{staticClass:"cart-items"},[s("div",{staticClass:"items-choose"},[s("span",{class:{"blue-checkbox-new":!0,"checkbox-on":e.isChecked},on:{click:function(s){return t.changeIsChecked({productObj:e.productObj})}}},[s("a")])]),s("div",{staticClass:"items-thumb"},[s("img",{attrs:{src:e.productObj.ali_image}}),s("a",{attrs:{href:"javascript:;",target:"_blank"}})]),s("div",{staticClass:"name hide-row"},[s("div",{staticClass:"name-table"},[s("a",{attrs:{href:"javascript:;",target:"_blank"}},[t._v(t._s(e.productObj.title))]),s("ul",{staticClass:"attribute"},[s("li",[t._v(t._s(t.color(e.productObj)))])])])]),s("div",{staticClass:"operation"},[s("a",{staticClass:"items-delete-btn",on:{click:function(s){return t.delCartProduct({productObj:e.productObj})}}})]),s("div",{staticClass:"subtotal"},[t._v("¥ "+t._s(e.productObj.price*e.count))]),s("div",{staticClass:"item-cols-num"},[s("div",{staticClass:"select js-select-quantity"},[s("span",{staticClass:"down",class:{"down-disabled":e.count<=1},on:{click:function(s){return t.changeCartCount({obj:e.productObj,count:-1})}}},[t._v("-")]),s("span",{staticClass:"num"},[s("input",{staticStyle:{display:"inline-block"},attrs:{type:"text"},domProps:{value:e.count}})]),s("span",{staticClass:"up",class:{"up-disabled":e.count>=e.productObj.limit_num},on:{click:function(s){return t.changeCartCount({obj:e.productObj,count:1})}}},[t._v("+")])])]),s("div",{staticClass:"price"},[t._v("¥ "+t._s(e.productObj.price))])])])})),0)])]):s("div",{staticClass:"empty-label"},[s("h3",[t._v("您的购物车中还没有商品")]),s("router-link",{attrs:{to:"/"}},[t._v("现在选购")])],1)]),t.cartProductLists.length?s("div",{staticClass:"cart-bottom-bg fix-bottom"},[s("div",{staticClass:"cart-bar-operation"},[s("div",[s("div",{staticClass:"choose-all js-choose-all"},[s("span",{class:{"blue-checkbox-new":!0,"checkbox-on":t.allChecked},on:{click:t.changeAllChecked}},[s("a")]),t._v(" 全选 ")]),s("div",{staticClass:"delete-choose-goods"},[t._v("删除选中的商品")])])]),s("div",{staticClass:"shipping"},[s("div",{staticClass:"shipping-box"},[s("div",{staticClass:"shipping-total shipping-num"},[s("h4",{},[t._v(" 已选择 "),s("i",[t._v(t._s(t.selectedCount))]),t._v(" 件商品 ")]),s("h5",[t._v(" 共计 "),s("i",[t._v(t._s(t.totalCount))]),t._v(" 件商品 ")])]),s("div",{staticClass:"shipping-total shipping-price"},[s("h4",{},[t._v(" 应付总额："),s("span",[t._v("￥")]),s("i",[t._v(t._s(t.selectedPrice))])]),s("h5",{staticClass:"shipping-tips"},[t._v(" 应付总额不含运费 ")])])]),s("span",{staticClass:"jianguo-blue-main-btn big-main-btn js-checkout",class:{"disabled-btn":t.isCheckout}},[s("router-link",{attrs:{to:"/checkout"}},[t._v("现在结算")])],1)])]):t._e()])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h2",[t._v("购物清单")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-table-title"},[s("span",{staticClass:"name"},[t._v("商品信息")]),s("span",{staticClass:"operation"},[t._v("操作")]),s("span",{staticClass:"subtotal"},[t._v("小计")]),s("span",{staticClass:"num"},[t._v("数量")]),s("span",{staticClass:"price"},[t._v("单价")])])}],r=s("5530"),n=(s("7db0"),s("2f62")),o={computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(n["d"])(["cartProductLists"])),Object(n["b"])(["totalCount","selectedCount","selectedPrice"])),{},{color:function(){return function(t){var e=t.spec_json.find((function(e){return e.spec_value_id==t.color_id}));return console.log(e),e?e.show_name:""}},allChecked:{get:function(){return this.cartProductLists.every((function(t){return t.isChecked}))},set:function(t){this.$store.commit("changeAllChecked",{isChecked:t})}},isCheckout:function(){return!this.cartProductLists.some((function(t){return t.isChecked}))}}),methods:Object(r["a"])(Object(r["a"])({},Object(n["c"])(["delCartProduct","changeCartCount"])),{},{changeIsChecked:function(t){console.log(t),this.$store.commit("changeIsChecked",t)},changeAllChecked:function(){this.allChecked=!this.allChecked}})},c=o,l=s("2877"),d=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=importCom.77f8c6fe.js.map