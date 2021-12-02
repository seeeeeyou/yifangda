<template>
  <div class="project">
    <my-banner :banner="banner" />
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
