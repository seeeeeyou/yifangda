<template>
  <div class="system">
    <my-banner :banner="banner" :nav="nav" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "system",
  data() {
    return {
      banner: require("@/assets/img/journalism/banner@2x.png"),
      nav: [
        {
          path: "/system/property",
          name: "物业服务",
        },
        {
          path: "/system/provide",
          name: "供热供水",
        },
        {
          path: "/system/preferred",
          name: "宜民优选",
        },
        {
          path: "/system/convenience",
          name: "便民服务",
        },
        {
          path: "/system/build",
          name: "工程建设",
        },
      ],
    };
  },
};
</script>
