import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import lottie from 'vue-lottie';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from '@/components/banner'
import NewNotice from '@/components/newNotice'
// import './rem'

import 'animate.css';
import "./plugins/antdUI";

const ElArr = [Header, Footer, Banner, NewNotice];
for (let i of ElArr) {
    Vue.component(i.name, i);
}
Vue.component('lottie', lottie);
Vue.prototype.axios = axios
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");