<template>
  <div class="container">
    <card :introduction="introduction" :imageList="imageList" />
  </div>
</template>

<script>
import card from "@/components/system/card.vue";
export default {
  name: "preferred",
  components: {
    card,
  },
  data() {
    return {
      introduction:
        "甘肃宜民优选商贸有限责任公司属于金昌市宜方达物业管理有限责任公司成立的全资子公司，主要开展社区商超、便民服务等业务，目前，已经建成并投 入运营线下商超6家，线上业务正在筹建中，未来将实现线下线上同步运营。",
      imageList: [
        require("@/assets/img/System/preferred/蒙版组 17.png"),
        require("@/assets/img/System/preferred/蒙版组 18.png"),
        require("@/assets/img/System/preferred/蒙版组 19.png"),
        require("@/assets/img/System/preferred/蒙版组 85.png"),
        require("@/assets/img/System/preferred/蒙版组 86.png"),
        require("@/assets/img/System/preferred/蒙版组 87.png"),
      ],
    };
  },
};
</script>