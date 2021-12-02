<template>
  <div class="party">
    <my-banner :banner="banner" />
  </div>
</template>

<script>
export default {
  name: "party",
  data() {
    return {
      banner: require("@/assets/img/Party/banner@2x.png"),
    };
  },
};
</script>
