<template>
  <section>
    <div class="error">
      <lottie
        class="lottie"
        :options="defaultOptions"
        :animCreated="handleAnimation"
      />
    </div>
    <br />
    <a href="/">GO HOME</a>
  </section>
</template>
<script>
import * as animationData from "@/assets/lottie/404-planet-animation.json";
export default {
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
    };
  },
  mounted() {},
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
  },
};
</script>

<style scoped lang="less">
section {
  width: 100%;
  .error {
    height: 80vh;
  }
  .lottie {
    margin: auto;
    transform: scale(0.6);
  }
  a {
    border: 2px solid #e6e9ed;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    position: absolute;
    left: calc(50% - 200px / 2);
    bottom: 8vh;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
  }
  a:hover,
  a:active {
    background: #e6e9ed;
    color: #fff;
  }
}
</style>
