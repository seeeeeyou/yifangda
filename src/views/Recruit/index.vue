<template>
  <div class="recruit">
    <my-banner :banner="banner" />
  </div>
</template>

<script>
export default {
  name: "recruit",
  data() {
    return {
      banner: require("@/assets/img/journalism/banner@2x.png"),
    };
  },
};
</script>
