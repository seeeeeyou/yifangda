<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 19:57:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-03 01:37:19
 * @FilePath: \yifangda\src\views\System\convenience.vue
-->
<template>
  <div class="container">
    <card :introduction="introduction" :imageList="imageList" />
  </div>
</template>

<script>
import card from "@/components/system/card.vue";
export default {
  name: "convenience",
  components: {
    card,
  },
  data() {
    return {
      introduction:
        "便民服务属于公司衍生拓展业务，主要面对客户生活需求提供便利服务，目前，开设的便民业务有清洁服务（清洗油烟机、热水器、窗帘、擦拭玻璃、钟点服务等）、设施维修服务（上水故障处理、马桶及下水疏通、洁具更换，散热器清洗、维修及更换，电路维修及处理、锁具修理及更换等），约车代办服务、社区旅游、社区金融等业务。",
      imageList: [
        require("@/assets/img/System/convenience/蒙版组 17.png"),
        require("@/assets/img/System/convenience/蒙版组 18.png"),
        require("@/assets/img/System/convenience/蒙版组 19.png"),
        require("@/assets/img/System/convenience/蒙版组 82.png"),
        require("@/assets/img/System/convenience/蒙版组 83.png"),
        require("@/assets/img/System/convenience/蒙版组 84.png"),
      ],
    };
  },
};
</script>