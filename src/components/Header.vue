<template>
  <div class="header">
    <div class="navMenu">
      <div v-for="(item, index) of navDic" :key="index">
        <router-link :to="item.path">
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      navDic: [
        // 关于我们
        {
          path: "/about",
          name: "关于我们",
          children: [
            {
              path: "introduction",
              name: "公司介绍",
            },
            {
              path: "corporateCulture",
              name: "企业文化",
            },
            {
              path: "development",
              name: "发展历程",
            },
            {
              path: "staffStyle",
              name: "员工风采",
            },
            {
              path: "qualifications",
              name: "企业资质",
            },
          ],
        },
        // 服务项目
        {
          path: "/project",
          name: "服务项目",
        },
        // 服务体系
        {
          path: "/system",
          name: "服务体系",
          children: [
            {
              path: "property",
              name: "物业服务",
            },
            {
              path: "provide",
              name: "供热供水",
            },
            {
              path: "preferred",
              name: "宜民优选",
            },
            {
              path: "convenience",
              name: "便民服务",
            },
            {
              path: "build",
              name: "工程建设",
            },
          ],
        },
        // 新闻动态
        {
          path: "/journalism",
          name: "新闻动态",
          children: [
            {
              path: "industry",
              name: "行业新闻",
            },
            {
              path: "company",
              name: "公司动态",
            },
            {
              path: "community",
              name: "小区动态",
            },
          ],
        },
        // 企业人才需要
        {
          path: "/recruit",
          name: "企业人才需要",
        },
        // 党建工作
        {
          path: "/party",
          name: "党建工作",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  > .navMenu {
    display: flex;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    > div {
      padding: 20px;
      text-align: center;
      > a {
        > span {
          font-size: 1.4rem;
          font-family: Microsoft YaHei, Microsoft YaHei-Regular;
          color: #ffffff;
        }
      }
    }
  }
}
</style>