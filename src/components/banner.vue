<template>
  <div class="banner">
    <div class="img">
      <img :src="banner" alt="" />
    </div>
    <div class="nav" v-if="nav.length > 1">
      <div v-for="(item, index) of nav" :key="index">
        <router-link :to="item.path">
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-banner",
  props: {
    banner: {
      type: String,
      default: () => {
        return "";
      },
    },
    nav: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted(){
  }
};
</script>

<style lang="less" scoped>
.banner {
  .img {
    width: 100%;
    > img {
      width: 100%;
      height: auto;
    }
  }
  .nav {
    height: 60px;
    background: #f0f0f1;
    display: flex;
    justify-content: center;
    line-height: 60px;
    > div {
      width: 100px;
      text-align: center;
      > a {
        > span {
          display: block;
          width: 100%;
          height: 100%;
          font-family: Microsoft YaHei, Microsoft YaHei-Regular;
          color: #333333;
          font-size: 1.4rem;
          font-weight: bold;
        }
      }
    }
    > div:hover {
      > a {
        > span {
          color: #d20505;
          border-bottom: 2px solid #d20505; 
        }
      }
    }
  }
}
</style>