<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 19:57:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-03 01:42:37
 * @FilePath: \yifangda\src\views\System\build.vue
-->
<template>
  <div class="build">
    <card :introduction="introduction" :imageList="imageList" />
  </div>
</template>

<script>
import card from "@/components/system/card.vue";
export default {
  name: "build",
  components: {
    card,
  },
  data() {
    return {
      introduction:
        "金昌市宜方达物业管理有限责任公司建筑分公司是公司新成立的分公司，在承担公司内部设备设施中小修工程实施的同时，涉足建筑领域，积极拓展外部 工程项目，实现建筑领域新的业务增长。",
      imageList: [
        require("@/assets/img/System/build/蒙版组 17.png"),
        require("@/assets/img/System/build/蒙版组 18.png"),
        require("@/assets/img/System/build/蒙版组 19.png"),
        require("@/assets/img/System/build/蒙版组 82.png"),
        require("@/assets/img/System/build/蒙版组 83.png"),
        require("@/assets/img/System/build/蒙版组 84.png"),
      ],
    };
  },
};
</script>
