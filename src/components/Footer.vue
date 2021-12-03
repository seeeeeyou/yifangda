<template>
  <div id="footer" :style="`background-image:url(${require('@/assets/img/Home/footer.png')})`">
    <div class="content">
      <!-- 联系方式 -->
      <div class="footer-top">
        <div
          class="footer-top-item"
          v-for="(item, index) in footerTopItem"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <span>{{ item.text }}</span>
        </div>
      </div>

      <!-- 底部导航 -->
      <div class="footer-content">
        <div class="content_left">
          <div v-for="(item, index) in routers" :key="index">
            <div class="footer-content-item">
              <div class="title">{{ item.name }}</div>
              <div class="content" v-for="i in item.children" :key="i">
                <router-link :to="item.path + '/' + i.path">{{
                  i.name
                }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- 二维码 -->
        <!-- <div class="footer-content-item" v-for="(item,index) in codes" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="content">
          <img :src="item.img" alt="" />
        </div>
        <span v-html="item.text"></span>
      </div> -->
      </div>
      <!-- 底部版权 -->
      <div class="bottom-copyright">
        <div
          class="bottom-copyright-item"
          v-for="(item,index) in bottomCopyrightItem"
          :key="index"
        >
          <span v-html="item.text"></span>
        </div>

        <div class="bottom-copyright-item">
          <div>
            <img src="../assets/img/Home/TB1.png" alt="" />
            <img src="../assets/img/Home/TB1S.png" alt="" />
          </div>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011302005598"
            target="_bland"
            >沪公网安备 31011302005598号</a
          >
          <a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_bland"
          >
            沪ICP备13036153号-1</a
          >
        </div>
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
      if (item.path == "/" || item.path == "*") {
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

#footer {
  .content {
    width: 80%;
    margin: auto;
    .footer-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      border-bottom: 2px solid rgba(179, 178, 178, 0.8);
      .content_left {
        width: 70%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .footer-content-item {
          margin-top: 5px;
          text-align: center;
          .title {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;
            text-align: center;
          }
          .content {
            width: 100%;
            padding: 5px;
            a {
              color: @color-grey;
              font-size: 13px;
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
    .footer-top {
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 15px 0;
      border-bottom: 2px solid rgba(179, 178, 178, 0.8);
      .footer-top-item {
        height: 100%;
        align-items: center;
        padding: 15px 0;
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
    // 底部版权
    .bottom-copyright {
      width: 100%;
      padding: 10px 0;
      .bottom-copyright-item {
        padding: 2px 0;
        > div {
          display: inline-block;
          > img {
            display: inline-block;
            padding: 0 1px;
            margin-top: -3px;
          }
        }
        span {
          font-size: 13px;
          color: @color-grey;
        }
        > a {
          font-size: 13px;
          color: @color-grey;
        }
        > a:hover {
          color: rgb(209, 207, 207);
        }
      }
    }
  }
}

@media screen and(max-width: 988px) {
  #footer {
    > .content {
      width: 90% !important;
    }
  }
}
#footer {
  width: 100%;
  position: relative;
  left: 0;
  background: #454b58;
  bottom: 0;
  z-index: 999;
}
</style>