/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 20:44:18
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-02 22:57:15
 * @FilePath: \yifangda\src\plugins\antdUI.js
 */
import Vue from 'vue'
import { Avatar } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Meta from "vue-meta";

const antdList = [Meta, Avatar];

for (let i of antdList) {
    Vue.use(i);
}