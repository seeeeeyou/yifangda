<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 19:57:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-03 00:58:03
 * @FilePath: \yifangda\src\components\Footer.vue
-->
<template>
  <div id="footer">
    <!-- 联系方式 -->
    <div class="footer-top">
      <div class="footer-top-item" v-for="item in footerTopItem" :key="item">
        <img :src="item.img" alt="" />
        <span>{{ item.text }}</span>
      </div>
    </div>
    <!-- 分割下划线 -->
    <div class="footer-line"></div>

    <!-- 底部导航 -->
    <div class="footer-content">
      <div v-for="item in routers" :key="item">
        <div class="footer-content-item">
          <div class="title">{{ item.name }}</div>
          <div class="content">
            <router-link
              v-for="i in item.children"
              :key="i"
              :to="item.path + '/' + i.path"
              >{{ i.name }}</router-link
            >
          </div>
        </div>
      </div>

      <div class="footer-content-item" v-for="item in codes" :key="item">
        <div class="title">{{ item.title }}</div>
        <div class="content">
          <img :src="item.img" alt="" />
        </div>
        <span v-html="item.text"></span>
      </div>
    </div>

    <!-- 分割下划线 -->
    <div class="footer-line"></div>

    <!-- 底部版权 -->
    <div class="bottom-copyright">
      <div
        class="bottom-copyright-item"
        v-for="item in bottomCopyrightItem"
        :key="item"
      >
        <span v-html="item.text"></span>
      </div>

      <div class="bottom-copyright-item">
        <span>
          <img src="../assets/img/Home/TB1.png" alt="" />
          <img src="../assets/img/Home/TB1S.png" alt="" />沪公网安备
          31011302005598号 沪ICP备13036153号-1</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-footer",
  data() {
    return {
      footerTopItem: [
        {
          img: require("@/assets/img/Home/座机.png"),
          text: "400-666-8888",
        },
        {
          img: require("@/assets/img/Home/vip.png"),
          text: "一对一vip专属服务",
        },
        {
          img: require("@/assets/img/Home/zhongbiao.png"),
          text: "周一到周五（8:30-17:30）",
        },
      ],
      routers: [],
      codes: [
        {
          title: "移动端",
          img: require("@/assets/img/Home/组 7.png"),
          text: "（移动端二维码）",
        },
        {
          title: "小程序",
          img: require("@/assets/img/Home/组 8.png"),
          text: "（小程序二维码）",
        },
      ],
      bottomCopyrightItem: [
        {
          text: "400-666-8888 一对一VIP专属服务 周一到周五（8：30-17：30）",
        },
        {
          text: "公司名称：金昌市宜方达物业管理有限责任公司",
        },
        {
          text: "公司地址：金昌市金昌区金昌路与红星路交叉口",
        },
        {
          text: "软件企业证书编号：31011302005598号 沪ICP备13036153号-1",
        },
        {
          text: "传真：",
        },
        {
          text: "邮箱：",
        },
        {
          text: "邮编：",
        },
        {
          text: "© 2007-2021 Inc.All rights reserved.",
        },
      ],
    };
  },
  mounted() {
    this.routers = this.$router.options.routes.map((item) => {
      if (item.path == "/") {
        return null;
      } else if (item.path == "/project") {
        return {
          path: item.path,
          name: item.name,
          children: [
            {
              path: "",
              name: "项目列表",
            },
          ],
        };
      } else if (item.path == "/recruit") {
        return {
          path: item.path,
          name: item.name,
          children: [
            {
              path: "",
              name: "岗位详情",
            },
          ],
        };
      } else if (item.path == "/party") {
        return {
          path: item.path,
          name: item.name,
          children: [
            {
              path: "",
              name: "文件列表",
            },
          ],
        };
      } else {
        return {
          path: item.path,
          name: item.name,
          children: item.children ? item.children : null,
        };
      }
    });
    this.routers = this.routers.filter((item) => {
      return item != null;
    });
  },
};
</script>

<style scoped lang="less">
@color-grey: grey;

// pc
@media screen and (min-width: 768px) {
  #footer {
    min-height: 65vh;
  }
  // 底部内容
  .footer-content {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 2vh;
    .footer-content-item {
      display: inline-block;
      .title {
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
      }
      .content {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
        a {
          color: @color-grey;
          font-size: 14px;
          margin-bottom: 10px;
          display: block;
        }
        a:hover {
          color: #fff;
          text-decoration: none;
        }
      }
      span {
        color: @color-grey;
      }
    }
  }
  .footer-top {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .footer-top-item {
      margin-top: 40px;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
      }
      span {
        font-size: 16px;
        color: #fff;
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }
}

// 移动端
@media screen and (max-width: 767px) {
  #footer {
    height: 100vh;
    justify-content: center;
    align-items: center;

    .footer-top {
      width: 80%;
      display: flex;
      margin: 0 auto;
      text-align: center;
      .footer-top-item{
        width: 100%;
        margin-top: 20px;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
        }
        span {
          font-size: 14px;
          color: #fff;
          font-weight: bold;
          margin-left: 10px;
        }
      }
    }

    .footer-content {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      margin-top: 2vh;
      .footer-content-item {
        width: 100px;
        margin: 0 auto;
        .title {
          font-size: 16px;
          color: #fff;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .content {
          font-size: 14px;
          color: #fff;
          margin-bottom: 10px;
          a {
            color: @color-grey;
            font-size: 14px;
            margin-bottom: 10px;
            display: block;
          }
          a:hover {
            color: #fff;
            text-decoration: none;
          }
        }
        span {
          color: @color-grey;
        }
      }
    }
  }
}

#footer {
  width: 100%;
  position: relative;
  left: 0;
  background-color: rgba(37, 36, 56, 0.9);
  bottom: 0;
  z-index: 999;
}

// 分割下划线
.footer-line {
  width: 80%;
  height: 1px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

// 底部版权
.bottom-copyright {
  width: 80%;
  margin: 0 auto;
  .bottom-copyright-item {
    span {
      font-size: 16px;
      color: @color-grey;
      margin-left: 10px;
    }
  }
}
</style>