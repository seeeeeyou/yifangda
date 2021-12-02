<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-03 01:04:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-03 01:33:25
 * @FilePath: \yifangda\src\components\system\card.vue
-->
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>{{ introduction }}</h3>
      </div>
      <div class="card-body">
        <div class="imgItem" v-for="item in imageList" :key="item">
          <img width="356" height="200" :src="item" alt="" />
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    introduction: {
      type: String,
      default: "这是一段简介",
    },
    imageList: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
// pc端
@media screen and (min-width: 1200px) {
  .container {
    width: 1200px;
    margin: 0 auto;
  }
}

// 移动端
@media screen and (max-width: 1200px) {
  .container {
    width: 90%;
    margin: 0 auto;
  }
}

.card {
  .card-header {
    padding-top: 30px;
    margin: 0 auto;
    max-width: 1100px;
    text-indent: 3em;
  }
  .card-body {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 356px);
    grid-gap: 20px;
    justify-content: center;
    padding: 40px;
  }
}
</style>
