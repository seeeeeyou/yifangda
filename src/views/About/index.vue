<template>
  <div class="home">
    <my-banner :banner="banner" :nav="nav" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      banner: require("@/assets/img/About/introduction/banner@2x.png"),
      nav: [
        {
          path: "/about/introduction",
          name: "公司介绍",
        },
        {
          path: "/about/corporateCulture",
          name: "企业文化",
        },
        {
          path: "/about/development",
          name: "发展历程",
        },
        {
          path: "/about/staffStyle",
          name: "员工风采",
        },
        {
          path: "/about/qualifications",
          name: "企业资质",
        },
      ],
    };
  },
};
</script>
