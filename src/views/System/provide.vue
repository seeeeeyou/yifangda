<template>
  <div class="container">
    <card :introduction="introduction" :imageList="imageList" />
  </div>
</template>

<script>
import card from "@/components/system/card.vue";
export default {
  name: "provide",
  metaInfo: {
    title: "宜方达-供热供水",
  },
  components: {
    card,
  },
  data() {
    return {
      introduction:
        "供水、供热也是公司的基础业务之一。供水业务：公司现承担金川集团公司居民35908户，八冶公司居民10676户，其它居民337户，单位和非居民用户1223户的转供水，转供水公共设施的维修维护，计量收费等业务，总转供户48144户，建有二级增压供水泵房4座。供热业务：公司主要承担金川集团公司所属3#、4#、5#、6#、白泉村、7#、9#、10#、11#、12#、13#、18#、19#、20#、21#、22#、25#、26#、 27#等20个金川集团公司职工住宅小区的供热业务、及其供热附属设备设施的维修维护、热费收缴等业务，建有高温一级换热站1座、二级换热站24座。",
      imageList: [
        require("@/assets/img/System/provide/蒙版组 17.png"),
        require("@/assets/img/System/provide/蒙版组 18.png"),
        require("@/assets/img/System/provide/蒙版组 19.png"),
        require("@/assets/img/System/provide/蒙版组 82.png"),
        require("@/assets/img/System/provide/蒙版组 83.png"),
        require("@/assets/img/System/provide/蒙版组 84.png"),
      ],
    };
  },
};
</script>