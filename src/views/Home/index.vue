<template>
  <div class="home">
    <my-banner :banner="banner" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      banner: require('@/assets/img/Home/banner@2x.png')
    };
  },
};
</script>
