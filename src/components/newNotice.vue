<template>
  <div class="newNotice">
    <div class="content">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-notice",
  data() {
    return {
      page: 1,
    };
  },
};
</script>
<style lang="less" scoped>
@media screen and(min-width: 1200px) {
  .newNotice {
    .content {
      width: 68%;
    }
  }
}
@media screen and(max-width: 1200px) {
  .newNotice {
    .content {
      width: 90%;
    }
  }
}
@media screen and(max-width: 920px) {
  .newNotice {
    .content {
      width: 100%;
    }
  }
}
@media screen and(max-width: 850px) {
  .newNotice {
    .content {
      // width: 90%;
    }
  }
}
.newNotice {
  width: 100%;
  > content {
  }
}
</style>