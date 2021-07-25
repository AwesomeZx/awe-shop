import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        isShowPrompt: false,

        cartProductLists: JSON.parse(window.localStorage.getItem('cartData')) || [],
        // [{productObj, count}, {}]
        // 直接在根组件中 对cartProductLists数组 进行监测 如果他一旦发生变化 则存入到本地存储中
        // 是否显示购物栏
        isShowCartPanel: false,

        // 设置ball 数据对象  用来存小球的初始化数据
        ball: {
            show: false,
            el: null,
            img: ''
        },
        // 存收货地址信息
        addressInfo: [{
            id: 1,
            name: '李小华',
            phone: '13611223344',
            areacode: '010',
            tel: '68421709',
            provinceId: "110000",
            province: '北京市',
            cityId: "110100",
            city: "北京市",
            areasId: "110101",
            areas: "东城区",
            add: '北街胡同2号102',
            default: true
        }],
        ticket: {
            name: '',
            msg: ''
        }


    },
    getters: {
        //  选中的商品列表
        selectedCartLists(state) {
            return state.cartProductLists.filter(item => item.isChecked)
        },
        // 总计数量
        totalCount(state) {
            let total = 0;
            state.cartProductLists.forEach(item => {

                total += item.count
            })
            return total;
        },
        // 总计价格
        totalPrice(state) {
            let price = 0;
            state.cartProductLists.forEach(item => {

                price += item.productObj.price * item.count
            })
            return price;
        },
        // 选中的总数量
        selectedCount(state) {
            let count = 0;
            state.cartProductLists.filter(item => item.isChecked).map(item => {
                count += item.count;
            })
            return count;
        },
        // 选中的总金额
        selectedPrice(state) {
            let cPrice = 0;
            state.cartProductLists.filter(item => item.isChecked).map(item => {
                cPrice += item.count * item.productObj.price;
            })
            return cPrice;
        },
        // 默认的地址
        defaultAdd(state) {
            return state.addressInfo.find(item => item.default)
        }
    },
    mutations: {
        changePrompt(state, { bool }) {
            state.isShowPrompt = bool;
        },
        // 加入购物车 需要两个数据  什么商品  这个商品的数量
        addCartProduct(state, { productObj, count }) {
            // 如果是第一次添加购物车 
            let idx = state.cartProductLists.findIndex(item => item.productObj.sku_id == productObj.sku_id)
            console.log(idx);
            if (idx == -1) {
                state.cartProductLists.push({
                    productObj,
                    isChecked: true,
                    count
                })
            } else {
                // 在这里控制一下 最大添加商品数量
                if ((state.cartProductLists[idx].count + count) > state.cartProductLists[idx].productObj.limit_num) {
                    // 显示最大数量限制框
                    state.isShowPrompt = true;
                } else {
                    // 如果是再次添加 只需要更改数量即可
                    state.cartProductLists[idx].count += count;
                }

            }

            // 如果当前已经达到最大数量限制了 此时不应该执行小球动画了
            if (!state.isShowPrompt) {
                // 当用户点击了加入购物车 把小球ball数据做初始化设置
                // 让小球的show变为true 
                state.ball.show = true;
                // event.path 当前触发该事件之后 存的所有事件冒泡的dom元素集合列表

                let path = event.path || (event.composedPath && event.composedPath());
                console.log(path);
                // 把加入购物车按钮dom元素 赋值给 ball.el
                state.ball.el = path[0];
                // 把当前加入购物车的商品的图片设置给ball.img 
                state.ball.img = productObj.ali_image;
            }




        },
        // 删除购物车
        delCartProduct(state, { productObj }) {

            let idx = state.cartProductLists.findIndex(item => item.productObj.sku_id == productObj.sku_id);

            state.cartProductLists.splice(idx, 1)
        },
        // 设置是否显示购物栏
        showOrHideCart(state, { bool }) {
            state.isShowCartPanel = bool;
        },
        // 改变购物车商品的数量的mutate
        changeCartCount(state, { obj, count }) {
            let idx = state.cartProductLists.findIndex(item => item.productObj.sku_id == obj.sku_id)

            let maxNum = state.cartProductLists[idx].productObj.limit_num;

            // 去判断 最大购物商品数量 限制
            if (state.cartProductLists[idx].count + count <= maxNum) {
                state.cartProductLists[idx].count += count;

            }
            if (state.cartProductLists[idx].count == maxNum) {
                // 显示最大数量限制框
                state.isShowPrompt = true;
            }





        },
        // 改变当前商品的是否被选中
        changeIsChecked(state, { productObj }) {
            console.log('aaaa');
            let idx = state.cartProductLists.findIndex(item => item.productObj.sku_id == productObj.sku_id)
            console.log(idx);
            state.cartProductLists[idx].isChecked = !state.cartProductLists[idx].isChecked;

        },
        //通过全选 控制 所有的商品的是否选中
        changeAllChecked(state, { isChecked }) {
            state.cartProductLists.forEach(item => {
                item.isChecked = isChecked;
            })
        },
        // 控制小球是否显示
        changeBallShow(state, { bool }) {
            state.ball.show = bool;
        },
        // 删除收货地址
        delAddress(state, { index }) {
            state.addressInfo.splice(index, 1);
        },
        // 提交新地址
        saveData(state, { info, type }) {

            // 判断一下 type
            if (type == 'modify') {

                // info 最新改好的收货地址信息
                // 找到当前的收货地址数组中 对应的那个收货地址 直接替换掉
                let idx = state.addressInfo.findIndex(item => item.id == info.id)

                if (info.default) {
                    state.addressInfo.forEach(item => {
                        item.default = false;
                    })
                } else {
                    // 如果你当前把修改默认地址取消了 那么 应该默认让所有的收货地中 第一个为默认地址
                    state.addressInfo[0].default = true;
                }
                console.log(info);
                state.addressInfo[idx] = info;

            } else if (type == 'add') {

                // 如果你当前的新的收货地址 设了默认
                // 需要把别的收货地址的默认取消
                if (info.default) {
                    state.addressInfo.forEach(item => item.default = false);
                }
                // 根据省市区的id 去拿到对应的title

                console.log("哈哈哈这是添加打印", info);

                state.addressInfo.push({...info, id: state.addressInfo.length + 1 })
            }


        },
        // 更改发票
        commitTicket(state, { bool, msg }) {

            if (bool) {
                state.ticket.name = '公司'
                state.ticket.msg = msg;
            } else {
                state.ticket.name = '个人'
                state.ticket.msg = '';
            }
        }




    },
    actions: {},
    modules: {}
})