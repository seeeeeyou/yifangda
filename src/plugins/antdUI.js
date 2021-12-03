/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 22:45:18
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-04 02:29:03
 * @FilePath: \yifangda\src\plugins\antdUI.js
 */
import Vue from "vue";
import { Avatar, Drawer, Pagination, Collapse, Timeline, Icon } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Meta from "vue-meta";

const antdList = [Meta, Avatar, Drawer, Pagination, Collapse, Timeline, Icon];

for (let i of antdList) {
    Vue.use(i);
}