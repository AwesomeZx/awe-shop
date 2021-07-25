import Vue from 'vue'
import VueRouter from 'vue-router'


//  () => import(/* webpackChunkName: "about" */ '../views/About.vue')
Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

const routes = [{
        path: '/',
        name: 'main',
        component: () =>
            import ( /* webpackChunkName: "importCom" */ '../views/Main.vue')
    },
    {
        path: '/details',
        name: 'details',
        component: () =>
            import ( /* webpackChunkName: "importCom" */ '../components/detailItem/DetailItem.vue')
    },
    {
        path: '/cartpage',
        name: "cartpage",
        component: () =>
            import ( /* webpackChunkName: "importCom" */ '../components/cartPage/CartPage.vue')
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () =>
            import ( /* webpackChunkName: "importCom" */ '../components/checkout/Checkout.vue')
    },
    {
        path: '/payment',
        name: 'payment',
        component: () =>
            import ( /* webpackChunkName: "importCom" */ '../components/payment/Payment.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router