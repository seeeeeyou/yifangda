import Vue from "vue";
import { Avatar, Drawer,  Pagination, Collapse, Timeline, Icon} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Meta from "vue-meta";

const antdList = [Meta, Avatar, Drawer, Pagination, Collapse, Timeline, Icon];

for (let i of antdList) {
  Vue.use(i);
}
