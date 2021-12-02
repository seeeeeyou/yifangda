import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Header from "@/components/Header";
import Footer from "@/components/Header";

const ElArr = [Header, Footer];
for (let i of ElArr) {
  Vue.component(i.name, i);
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
