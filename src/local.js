let local = {
    // 存储
    set(key, val) {
        window.localStorage.setItem(key, JSON.stringify(val));
    },
    // 获取
    get(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }
}

export default {
    install(Vue, opts) {
        Vue.prototype.$local = local;
    }
}