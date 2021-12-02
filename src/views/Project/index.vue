<template>
  <div class="project">
    <my-banner :banner="banner" />
    <h1>服务项目</h1>
    <my-notice :id="5" />
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      banner: require("@/assets/img/journalism/banner@2x.png"),
    };
  },
};
</script>
