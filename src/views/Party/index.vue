<template>
  <div class="party">
    <my-banner :banner="banner" :nav="[]" />
    <my-notice :id="4" />
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
