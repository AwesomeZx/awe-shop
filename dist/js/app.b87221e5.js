(function(t){function a(a){for(var r,c,i=a[0],o=a[1],l=a[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(a);while(f.length)f.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,c=1;c<e.length;c++){var o=e[c];0!==n[o]&&(r=!1)}r&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},n={app:0},s=[];function c(t){return i.p+"js/"+({importCom:"importCom"}[t]||t)+"."+{importCom:"77f8c6fe"}[t]+".js"}function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var a=[],e=n[t];if(0!==e)if(e)a.push(e[2]);else{var r=new Promise((function(a,r){e=n[t]=[a,r]}));a.push(e[2]=r);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=c(t);var l=new Error;s=function(a){o.onerror=o.onload=null,clearTimeout(u);var e=n[t];if(0!==e){if(e){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,e[1](l)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(a)},i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/",i.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var u=0;u<o.length;u++)a(o[u]);var d=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0906":function(t,a,e){"use strict";e("1d87")},"1d87":function(t,a,e){},2395:function(t,a,e){},"4ee2":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),e("div",{staticClass:"hander-car",attrs:{id:"main"}},[e("router-view"),e("prompt",{directives:[{name:"show",rawName:"v-show",value:t.isShowPrompt,expression:"isShowPrompt"}]})],1)],1)},s=[],c=e("5530"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"header"}},[e("div",{staticClass:"nav-global"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"nav-logo",on:{click:function(a){return t.$router.push({path:"/"})}}},[e("a",{staticStyle:{width:"120px","margin-top":"-8px"},attrs:{href:"javascript:;"}})]),e("ul",{staticClass:"nav-aside"},[t._m(0),e("li",{class:{"nav-cart":!0,active:t.isShowCartPanel},on:{mouseenter:function(a){return t.showOrHideCart({bool:!0})},mouseleave:function(a){return t.showOrHideCart({bool:!1})}}},[e("a",{attrs:{href:"javascript:;"}},[t._v("购物车")]),e("span",{staticClass:"cart-empty-num",class:{"cart-num":0!=t.totalCount}},[e("i",[t._v(t._s(t.totalCount))])]),e("cart-panel"),e("transition",{attrs:{name:"ball"},on:{"before-enter":t.beforeEnterFn,enter:t.enterFn,"after-enter":t.afterEnterFn}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.ball.show,expression:"ball.show"}],staticClass:"cart_ball"},[e("img",{staticClass:"cart_ball_img",attrs:{alt:""}})])])],1)]),t._m(1)])]),t._m(2)])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-user"},[e("a",{attrs:{href:"javascript:;"}},[t._v("个人中心")]),e("div",{staticClass:"nav-user-wrapper"},[e("div",{staticClass:"nav-user-list"},[e("dl",{staticClass:"nav-user-avatar"},[e("dd",[e("span",{staticClass:"ng-scope"})]),e("dt",{staticClass:"ng-binding"},[t._v("+86 138****9453")])]),e("ul",[e("li",{staticClass:"order"},[e("a",{attrs:{href:"javascript:;"}},[t._v("我的订单")])]),e("li",{staticClass:"support"},[e("a",{attrs:{href:"javascript:;"}},[t._v("售后服务")])]),e("li",{staticClass:"coupon"},[e("a",{attrs:{href:"javascript:;"}},[t._v("我的优惠")])]),e("li",{staticClass:"information"},[e("a",{attrs:{href:"javascript:;"}},[t._v("账户资料")])]),e("li",{staticClass:"address"},[e("a",{attrs:{href:"javascript:;"}},[t._v("收货地址")])]),e("li",{staticClass:"logout"},[e("a",{attrs:{href:"javascript:;"}},[t._v("退出")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"nav-list"},[e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("在线商城")])]),e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("应用下载")])]),e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("官方论坛")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav-sub"},[e("div",{staticClass:"nav-sub-wrapper"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"nav-list"},[e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("首页")])]),e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("手机")])]),e("li",{staticClass:"active"},[e("a",{attrs:{href:"javascript:;"}},[t._v("官方配件")])]),e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("周边产品")])]),e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("第三方配件")])]),e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("全部商品")])]),e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("服务")])])])])])])}],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav-cart-wrapper"},[e("div",{staticClass:"nav-cart-list"},[t.cartProductLists.length?e("div",{staticClass:"full"},[e("div",{staticClass:"nav-cart-items"},[e("ul",t._l(t.cartProductLists,(function(a){return e("li",{key:a.productObj.sku_id,staticClass:"clear"},[e("div",{staticClass:"cart-item js-cart-item cart-item-sell"},[e("div",{staticClass:"cart-item-inner"},[e("div",{staticClass:"item-thumb"},[e("img",{attrs:{src:a.productObj.ali_image}})]),e("div",{staticClass:"item-desc"},[e("div",{staticClass:"cart-cell"},[e("h4",[e("router-link",{attrs:{to:{name:"details",query:{productid:a.productObj.sku_id}}}},[t._v(t._s(a.productObj.title))])],1),e("p",{staticClass:"attrs"},[e("span",[t._v(t._s(t.color(a.productObj)))])]),e("h6",[e("span",{staticClass:"price-icon"},[t._v("¥")]),e("span",{staticClass:"price-num"},[t._v(t._s(a.productObj.price))]),e("span",{staticClass:"item-num"},[t._v("x "+t._s(a.count))])])])]),e("div",{staticClass:"del-btn",on:{click:function(e){return t.delCartProduct({productObj:a.productObj})}}},[t._v("删除")])])])])})),0)]),e("div",{staticClass:"nav-cart-total"},[e("p",[t._v(" 共 "),e("strong",{staticClass:"ng-binding"},[t._v(t._s(t.totalCount))]),t._v(" 件商品 ")]),e("h5",[t._v(" 合计： "),e("span",{staticClass:"price-icon"},[t._v("¥")]),e("span",{staticClass:"price-num ng-binding",attrs:{"ng-bind":"cartMenu.totalPrice"}},[t._v(t._s(t.totalPrice))])]),e("h6",[e("router-link",{staticClass:"nav-cart-btn",attrs:{to:"/cartpage"}},[t._v("去购物车")])],1)])]):e("div",{staticClass:"empty"},[e("h3",[t._v("购物车为空")]),e("p",[t._v("您还没有选购任何商品，现在前往商城选购吧!")])])])])},u=[],d=(e("7db0"),e("2f62")),f={computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(d["d"])(["cartProductLists"])),Object(d["b"])(["totalCount","totalPrice"])),{},{color:function(){return function(t){var a=t.spec_json.find((function(a){return a.spec_value_id==t.color_id}));return a?a.show_name:""}}}),methods:Object(c["a"])({},Object(d["c"])(["delCartProduct"]))},p=f,v=e("2877"),m=Object(v["a"])(p,l,u,!1,null,null,null),h=m.exports,b={components:{cartPanel:h},computed:Object(c["a"])(Object(c["a"])({},Object(d["d"])(["isShowCartPanel","ball"])),Object(d["b"])(["totalCount"])),methods:Object(c["a"])(Object(c["a"])({},Object(d["c"])(["showOrHideCart"])),{},{beforeEnterFn:function(t){var a=this.ball.el.getBoundingClientRect();console.log(a);var e=document.querySelector(".cart-empty-num"),r=e.getBoundingClientRect();console.log(r);var n=r.left-a.left-a.width/2,s=a.top-r.top+r.height/2;t.style.transform="translate3d(0,"+s+"px,0)";var c=t.children[0];c.style.transform="translate3d("+-n+"px,0,0)",c.width=20,c.height=20,c.src=this.ball.img,c.style.borderRadius="50%"},enterFn:function(t){t.offsetLeft,t.style.transform="translate3d(0,0,0)";var a=t.children[0];a.style.transform="translate3d(0,0,0)"},afterEnterFn:function(){this.$store.commit("changeBallShow",{bool:!1})}})},C=b,_=(e("0906"),Object(v["a"])(C,i,o,!1,null,null,null)),g=_.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"prompt"}},[e("div",{staticClass:"module-dialog-layer"}),e("div",{staticClass:"clear module-dialog module-dialog-confirm module-dialog-show",staticStyle:{opacity:"1"}},[e("div",{staticClass:"dialog-panel"},[e("div",{staticClass:"topbar"},[t._m(0),e("span",{staticClass:"dialog-close png",on:{click:function(a){return t.changePrompt({bool:!1})}}})]),t._m(1),e("div",{staticClass:"dialog-btn-wrap clear"},[e("div",{staticClass:"blue-main-btn normal-main-btn js-dialog-done",on:{click:function(a){return t.changePrompt({bool:!1})}}},[e("a",[t._v("确定")])])])])])])},P=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dialog-tit clear"},[e("h4",{staticClass:"js-dialog-title"},[t._v("提示")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dialog-con js-dialog-container"},[e("div",{staticClass:"confirm-msg"},[t._v("商品已达到最大可购买数量，无法继续添加")])])}],w={methods:Object(c["a"])({},Object(d["c"])(["changePrompt"]))},O=w,y=Object(v["a"])(O,j,P,!1,null,null,null),k=y.exports,L={components:{Header:g,prompt:k},computed:Object(c["a"])({},Object(d["d"])(["isShowPrompt","cartProductLists"])),watch:{cartProductLists:{handler:function(t){this.$local.set("cartData",t)},deep:!0}},data:function(){return{}}},S=L,x=(e("7c55"),Object(v["a"])(S,n,s,!1,null,null,null)),I=x.exports,E=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f"));r["a"].use(E["a"]);var $=E["a"].prototype.push;E["a"].prototype.push=function(t){return $.call(this,t).catch((function(t){return t}))};var F=[{path:"/",name:"main",component:function(){return e.e("importCom").then(e.bind(null,"cd56"))}},{path:"/details",name:"details",component:function(){return e.e("importCom").then(e.bind(null,"b1f0"))}},{path:"/cartpage",name:"cartpage",component:function(){return e.e("importCom").then(e.bind(null,"fe67"))}},{path:"/checkout",name:"checkout",component:function(){return e.e("importCom").then(e.bind(null,"d9fa"))}},{path:"/payment",name:"payment",component:function(){return e.e("importCom").then(e.bind(null,"6d84"))}}],H=new E["a"]({routes:F}),T=H;e("4de4"),e("159b"),e("d81d"),e("c740"),e("a434"),e("b0c0");r["a"].use(d["a"]);var J=new d["a"].Store({strict:!0,state:{isShowPrompt:!1,cartProductLists:JSON.parse(window.localStorage.getItem("cartData"))||[],isShowCartPanel:!1,ball:{show:!1,el:null,img:""},addressInfo:[{id:1,name:"李小华",phone:"13611223344",areacode:"010",tel:"68421709",provinceId:"110000",province:"北京市",cityId:"110100",city:"北京市",areasId:"110101",areas:"东城区",add:"北街胡同2号102",default:!0}],ticket:{name:"",msg:""}},getters:{selectedCartLists:function(t){return t.cartProductLists.filter((function(t){return t.isChecked}))},totalCount:function(t){var a=0;return t.cartProductLists.forEach((function(t){a+=t.count})),a},totalPrice:function(t){var a=0;return t.cartProductLists.forEach((function(t){a+=t.productObj.price*t.count})),a},selectedCount:function(t){var a=0;return t.cartProductLists.filter((function(t){return t.isChecked})).map((function(t){a+=t.count})),a},selectedPrice:function(t){var a=0;return t.cartProductLists.filter((function(t){return t.isChecked})).map((function(t){a+=t.count*t.productObj.price})),a},defaultAdd:function(t){return t.addressInfo.find((function(t){return t.default}))}},mutations:{changePrompt:function(t,a){var e=a.bool;t.isShowPrompt=e},addCartProduct:function(t,a){var e=a.productObj,r=a.count,n=t.cartProductLists.findIndex((function(t){return t.productObj.sku_id==e.sku_id}));if(console.log(n),-1==n?t.cartProductLists.push({productObj:e,isChecked:!0,count:r}):t.cartProductLists[n].count+r>t.cartProductLists[n].productObj.limit_num?t.isShowPrompt=!0:t.cartProductLists[n].count+=r,!t.isShowPrompt){t.ball.show=!0;var s=event.path||event.composedPath&&event.composedPath();console.log(s),t.ball.el=s[0],t.ball.img=e.ali_image}},delCartProduct:function(t,a){var e=a.productObj,r=t.cartProductLists.findIndex((function(t){return t.productObj.sku_id==e.sku_id}));t.cartProductLists.splice(r,1)},showOrHideCart:function(t,a){var e=a.bool;t.isShowCartPanel=e},changeCartCount:function(t,a){var e=a.obj,r=a.count,n=t.cartProductLists.findIndex((function(t){return t.productObj.sku_id==e.sku_id})),s=t.cartProductLists[n].productObj.limit_num;t.cartProductLists[n].count+r<=s&&(t.cartProductLists[n].count+=r),t.cartProductLists[n].count==s&&(t.isShowPrompt=!0)},changeIsChecked:function(t,a){var e=a.productObj;console.log("aaaa");var r=t.cartProductLists.findIndex((function(t){return t.productObj.sku_id==e.sku_id}));console.log(r),t.cartProductLists[r].isChecked=!t.cartProductLists[r].isChecked},changeAllChecked:function(t,a){var e=a.isChecked;t.cartProductLists.forEach((function(t){t.isChecked=e}))},changeBallShow:function(t,a){var e=a.bool;t.ball.show=e},delAddress:function(t,a){var e=a.index;t.addressInfo.splice(e,1)},saveData:function(t,a){var e=a.info,r=a.type;if("modify"==r){var n=t.addressInfo.findIndex((function(t){return t.id==e.id}));e.default?t.addressInfo.forEach((function(t){t.default=!1})):t.addressInfo[0].default=!0,console.log(e),t.addressInfo[n]=e}else"add"==r&&(e.default&&t.addressInfo.forEach((function(t){return t.default=!1})),console.log("哈哈哈这是添加打印",e),t.addressInfo.push(Object(c["a"])(Object(c["a"])({},e),{},{id:t.addressInfo.length+1})))},commitTicket:function(t,a){var e=a.bool,r=a.msg;e?(t.ticket.name="公司",t.ticket.msg=r):(t.ticket.name="个人",t.ticket.msg="")}},actions:{},modules:{}}),M=(e("4ee2"),e("5a42"),e("81b4"),e("74c4"),e("5eb3"),e("624d"),e("b993"),e("e9c3"),e("bd9d"),{set:function(t,a){window.localStorage.setItem(t,JSON.stringify(a))},get:function(t){return JSON.parse(window.localStorage.getItem(t))}}),N={install:function(t,a){t.prototype.$local=M}};r["a"].use(N),r["a"].config.productionTip=!1,new r["a"]({router:T,store:J,render:function(t){return t(I)}}).$mount("#app")},"5a42":function(t,a,e){},"5eb3":function(t,a,e){},"624d":function(t,a,e){},"74c4":function(t,a,e){},"7c55":function(t,a,e){"use strict";e("2395")},"81b4":function(t,a,e){},b993:function(t,a,e){},bd9d:function(t,a,e){},e9c3:function(t,a,e){}});
//# sourceMappingURL=app.b87221e5.js.map