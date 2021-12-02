<template>
  <div class="journalism">
    <my-banner :banner="banner" :nav="nav" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "journalism",
  data() {
    return {
      banner: require("@/assets/img/journalism/banner@2x.png"),
      nav: [
        {
          path: "/journalism/industry",
          name: "行业新闻",
        },
        {
          path: "/journalism/company",
          name: "公司动态",
        },
        {
          path: "/journalism/community",
          name: "小区动态",
        },
      ],
    };
  },
};
</script>
