/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 19:57:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-02 22:36:30
 * @FilePath: \yifangda\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from '@/components/banner'
import 'animate.css';
import "./plugins/antdUI";

const ElArr = [Header, Footer, Banner, ];
for (let i of ElArr) {
    Vue.component(i.name, i);
}
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");