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
@media screen and (min-width: 1078px) {
  .container {
    width: 68%;
  }
}

@media screen and (max-width: 1078px) {
  .container {
    width: 90%;
  }
}

@media screen and (max-width: 930px) {
  .container {
    .card-body {
      grid-template-columns: repeat(2, 50%) !important;
    }
  }
}
.container {
  margin: 40px auto;
  .card {
    .card-header {
      // max-width: 1100px;
      text-indent: 3em;
    }
    .card-body {
      width: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 33.3%);
      grid-gap: 15px;
      justify-content: center;
      // padding: 20px;
      > .imgItem {
        width: 100%;
        > img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
