<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 19:57:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-02 23:05:04
 * @FilePath: \yifangda\src\views\Home\index.vue
-->
<template>
  <div class="home">
    <my-banner :banner="banner" />
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "宜方达",
  },
  data() {
    return {
      banner: require("@/assets/img/Home/banner@2x.png"),
    };
  },
};
</script>
