/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 20:44:18
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-02 20:46:20
 * @FilePath: \yifangda\src\plugins\antdUI.js
 */
import Vue from 'vue'
import { Avatar } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const antdList = [Avatar];

for (let i of antdList) {
    Vue.use(i);
}