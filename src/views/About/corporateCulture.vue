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
    width: 80%;
    margin: auto;
    .culture {
      width: 100%;
    }
    .idea {
      color: #d20505;
      .idea-tit {
        font-size: 3.1rem;
        font-weight: bold;
        text-align: center;
        line-height: 3em;
      }
      .list {
        width: 500px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 20px;
        li {
          line-height: 3em;
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 10px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .corporateCulture {
    .main {
      width: 100%;
      .culture {
        width: 100%;
      }
      .idea {
        .idea-tit {
          font-size: 2.5rem;
        }
        .list {
          width: 80%;
          li {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
