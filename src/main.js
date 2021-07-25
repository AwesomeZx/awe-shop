import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入css样式
import './assets/css/reset.css'
import './assets/css/header.css'
import './assets/css/goodsList.css'
import './assets/css/item.css'
import './assets/css/prompt.css'
import './assets/css/cart.css'
// 结算页样式
import './assets/css/checkout.css'
import './assets/css/address-pop.css'
import './assets/css/payment.css'

// 导入本地存储插件
import local from './local'


Vue.use(local); // this.$local

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')