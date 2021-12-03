<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 19:57:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-02 23:04:49
 * @FilePath: \yifangda\src\views\About\corporateCulture.vue
-->
<template>
  <div class="corporateCulture">
    <div class="main">
      <img
        src="../../assets/img/About/corporateCulture/企业文化@2x.png"
        alt=""
        class="culture"
      />
      <div class="idea">
        <p class="idea-tit">管理理念</p>
        <ul class="list">
          <li v-for="item in idea" :key="item.list">{{ item.content }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "corporateCulture",
  data() {
    return {
      idea: [
        {
          list: 1,
          content: "物业服务无小事",
        },
        {
          list: 2,
          content: "服务品质是根本",
        },
        {
          list: 3,
          content: "诚信服务做基础",
        },
        {
          list: 4,
          content: "业主满意为宗旨",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
 
<style scoped lang="less">
* {
  list-style: none;
  margin: 0;
  padding: 0;
}
.corporateCulture {
  width: 100%;
  .main {
    width: 68%;
    margin: 30px auto;
    .culture {
      width: 100%;
    }
    .idea {
      .idea-tit {
        color: #d20505;
        font-size: 2.2rem;
        font-weight: bold;
        text-align: center;
      }
      .list {
        margin: auto;
        width: 60%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        li {
          color: #d20505;
          line-height: 50px;
          text-align: center;
          font-size: 15px;
          font-weight: bold;
          letter-spacing: 4px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .corporateCulture {
    .main {
      width: 90%;
      .culture {
        width: 100%;
      }
      .list {
        width: 100% !important;
      }
    }
  }
}
</style>
