<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 19:57:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-03 02:14:20
 * @FilePath: \yifangda\src\views\System\property.vue
-->
<template>
  <div class="property">
    <card :introduction="introduction" :imageList="imageList" />
  </div>
</template>

<script>
import card from "@/components/system/card.vue";
export default {
  name: "property",
  metaInfo: {
    title: "宜方达-物业服务",
  },
  components: {
    card,
  },
  data() {
    return {
      introduction:
        "住宅物业服务是公司的基础业务之一。主要围绕卫生保洁、垃圾拉运、绿化管护、设备设施维护、车辆管理、治安巡逻等业务运作，为每一位业主提供优 质服务。商业（办公）物业是公司今后拓展业务板块，主要为所中标标的提供个性化的物业服务。目前，已经承接了政府机构、银行等办公物业。",
      imageList: [
        require("@/assets/img/System/property/蒙版组 17.png"),
        require("@/assets/img/System/property/蒙版组 18.png"),
        require("@/assets/img/System/property/蒙版组 19.png"),
        require("@/assets/img/System/property/蒙版组 82.png"),
        require("@/assets/img/System/property/蒙版组 83.png"),
        require("@/assets/img/System/property/蒙版组 84.png"),
      ],
    };
  },
};
</script>
