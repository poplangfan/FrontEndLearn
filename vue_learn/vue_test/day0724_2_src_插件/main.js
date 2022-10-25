//引入Vue
import Vue from "vue";
//引入APP
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭Vue的生产提示
Vue.config.productionTip = false
//插件的使用
Vue.use(plugins)

new Vue({
    el:'#app',
    render:h => h(App)
})