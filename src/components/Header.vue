<template>
  <div class="header">
    <div class="nav">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/img/Home/logo.png" alt="" />
        </router-link>
      </div>
      <div class="navMenu">
        <div v-for="item of navDic" :key="item.id">
          <router-link :to="item.path">
            <span>{{ item.name }}</span>
          </router-link>
          <div class="childNav">
            <div
              v-for="(childItem, childIndex) of item.children"
              :key="childIndex"
            >
              <router-link :to="childItem.path">
                <span>{{ childItem.name }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="sideBar">
        <div class="nav" @click="showDrawer">
          <img src="@/assets/img/Home/nav.png" alt="" />
        </div>
      </div>

      <a-drawer
        title="菜单"
        placement="right"
        :closable="false"
        :visible="visible"
        @close="onClose"
      >
        <div class="sideMenu">
          <div v-for="(item, index) of navDic" :key="index">
            <router-link :to="item.path">
              <span>{{ item.name }}</span>
            </router-link>
          </div>
        </div>
      </a-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      checked: "",
      visible: false,
      navDic: [
        // 关于我们
        {
          id: 1,
          path: "/about",
          name: "关于我们",
          children: [
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
        },
        // 服务项目
        {
          id: 2,
          path: "/project",
          name: "服务项目",
        },
        // 服务体系
        {
          id: 3,
          path: "/system",
          name: "服务体系",
          children: [
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
        },
        // 新闻动态
        {
          id: 4,
          path: "/journalism",
          name: "新闻动态",
          children: [
            {
              
              path: "/journalism/industry",
              name: "行业新闻",
            },
            {
              path: "/journalism/company",
              name: "公司动态",
            },
            {
              path: "/journalism/community",
              name: "小区动态",
            },
          ],
        },
        // 企业人才需要
        {
          id: 5,
          path: "/recruit",
          name: "企业人才需要",
        },
        // 党建工作
        {
          id: 6,
          path: "/party",
          name: "党建工作",
        },
      ],
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
  watch: {
    $route: {
      handler(val) {
        this.checked = val.path;
        // console.log(this.checked);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
@media screen and(min-width: 1200px) {
  .header {
    .nav {
      width: 80%;
      justify-content: space-between;
    }
  }
}
@media screen and(max-width: 1200px) {
  .header {
    .nav {
      width: 90%;
      justify-content: space-between;
    }
  }
}
@media screen and(max-width: 920px) {
  .header {
    .nav {
      width: 100%;
      justify-content: space-around;
    }
  }
}
@media screen and(max-width: 850px) {
  .header {
    .nav {
      width: 90%;
      justify-content: space-between;
      .navMenu {
        display: none !important;
      }
      .sideBar {
        display: block !important;
      }
    }
  }
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;
  border-bottom: 2px solid rgba(255, 255, 255, 0.35);
  > .nav {
    margin: auto;
    height: 70px;
    display: flex;
    line-height: 70px;
    > .logo {
      width: 160px;
      img {
        width: 100%;
      }
    }
    .sideBar {
      display: none;
      > .nav {
        width: 40px;
        > img {
          width: 100%;
          height: auto;
        }
      }
    }

    > .navMenu {
      display: flex;
      justify-content: space-around;
      width: 73%;
      > div {
        flex: 1;
        text-align: center;
        > a {
          > span {
            display: block;
            width: 100%;
            height: 72px;
            font-size: 15px;
            font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            color: #ffffff;
            font-weight: bold;
          }
        }
        > .childNav {
          display: none;
          background: rgba(250, 45, 45, 0.5);
          width: 100%;
          > div {
            height: 40px;
            line-height: 40px;
            > a {
              > span {
                display: block;
                width: 100%;
                height: 100%;
                font-size: 1.2rem;
                font-family: Microsoft YaHei, Microsoft YaHei-Regular;
                color: #ffffff;
              }
              > span:hover {
                color: #d20505;
              }
            }
          }
        }
      }
      > div:hover {
        > a {
          > span {
            .checked();
          }
        }
        .childNav {
          display: block;
        }
      }
    }
  }
}
.sideMenu {
  > div {
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid rgb(201, 195, 195);
    > a {
      > span {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 12px;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        color: black;
        font-weight: bold;
        margin-left: 10px;
      }
      > span:hover {
        color: #d20505;
      }
    }
  }
}
.checked {
  color: #d20505;
  border-bottom: 2px solid #d20505;
}
</style>