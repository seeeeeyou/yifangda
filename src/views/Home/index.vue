<template>
  <div class="home">
    <my-banner :banner="banner" />
    <div class="service">
      <div class="content">
        <div
          v-for="(item, index) of serviceList"
          :key="index"
          :style="`background-image:url('${item.bg}')`"
        >
          <div class="title">
            <p>{{ item.title1 }}</p>
            <p>{{ item.title2 }}</p>
          </div>
          <p>{{ item.name }}</p>
          <p>{{ item.content }}</p>
          <div class="arrow">
            <img src="@/assets/img/Home/arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="modular">
      <div class="content">
        <div v-for="item of modularList" :key="item.id" class="item">
          <p>{{ item.title }}</p>
          <div
            class="itemContent"
            v-for="listItem of item.list"
            :key="listItem.id"
          >
            <div class="img"><img :src="listItem.img" alt="" /></div>
            <div>
              <p>{{ listItem.listTitle }}</p>
              <p>{{ listItem.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="content">
        <div>
          <img src="@/assets/img/Home/introduce1.png" alt="" />
          <div>
            <p>宜方达物业</p>
            <p>金昌市宜方达物业管理有限责任公司</p>
          </div>
        </div>
        <div>
          <img src="@/assets/img/Home/introduce2.png" alt="" />
          <div>
            <p>宜方达物业简介</p>
            <p>
              成立于2018年8月1日，隶属市政府国资委管理，集物业
              管理、民用供暖、民用给排水、公共设施供电... <span>更多</span>
            </p>
            <ul>
              <li>
                <h1>163</h1>
                <p>
                  员工数量<br />
                  (人)
                </p>
              </li>
              <li>
                <h1>357.88</h1>
                <p>
                  服务面积<br />
                  (万㎡)
                </p>
              </li>
              <li>
                <h1>48433</h1>
                <p>
                  覆盖人群<br />
                  (户)
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src="@/assets/img/Home/introduce3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      banner: require("@/assets/img/Home/banner@2x.png"),
      serviceList: [
        {
          title1: "PROPERTY",
          title2: "SERVICES",
          name: "物业服务",
          content: "提供温馨、敬业的物业服务，共筑美好未来",
          bg: require("@/assets/img/Home/wy.png"),
        },
        {
          title1: "ENGINEERING",
          title2: "MAINTENANCE",
          name: "工程维修",
          content: "对小区内设施进行快速维修，保障住户生活",
          bg: require("@/assets/img/Home/gc.png"),
        },
        {
          title1: "HOME",
          title2: "SERVICE",
          name: "到家服务",
          content: "为住户提供优质的服务",
          bg: require("@/assets/img/Home/dj.png"),
        },
        {
          title1: "CONVENIENT",
          title2: "SERVICE",
          name: "便民服务",
          content: "为住户生活需求提供便利服务",
          bg: require("@/assets/img/Home/bm.png"),
        },
      ],
      modularList: [
        {
          id: 1,
          title: "公司新闻",
          list: [
            {
              id: 1,
              img: require("@/assets/img/Home/modular1_1.png"),
              listTitle: "文明城市志愿者服务",
              content:
                "休息时就享受平淡，忙碌时就享受灿烂；公司举办文明城 市志愿者服务",
            },
            {
              id: 2,
              img: require("@/assets/img/Home/modular1_2.png"),
              listTitle: "临近佳节，公司慰问员工",
              content:
                "新年的钟声即将响起,深深的思念已经传递,暖暖的问候藏在 心底，公司在春节期间慰问各部门员工",
            },
          ],
        },
        {
          id: 2,
          title: "行业新闻",
          list: [
            {
              id: 1,
              img: require("@/assets/img/Home/modular2_1.png"),
              listTitle: "金昌市政协调研居民住宅小区物业管理情况",
              content:
                "3月29日，市政协副主席蒲海泉一行实地考察调研我市居 民住宅小区物业管理情况，并召开座谈会。",
            },
            {
              id: 2,
              img: require("@/assets/img/Home/modular2_2.png"),
              listTitle: "《金昌市物业管理办法》自2021年1月1日起...",
              content:
                "《金昌市物业管理办法》已经2020年9月28日八届市政府 第九次全体会议讨论通过，于2020年10月22日以金昌市...",
            },
          ],
        },
        {
          id: 3,
          title: "社区动态",
          list: [
            {
              id: 1,
              img: require("@/assets/img/Home/modular3_1.png"),
              listTitle: "金昌：金川集团25号住宅小区的美好生活",
              content:
                "金昌市金川集团25号住宅小区日间照料中心的一日三餐，社 区工作人员每天通过微信群提前将食谱发布，社区里的居...",
            },
            {
              id: 2,
              img: require("@/assets/img/Home/modular3_2.png"),
              listTitle: "金昌市社区开展科普知识进小区活动",
              content:
                "为进一步普及科学知识，传播科学思想，倡导科学生活，增 强辖区居民学习科普知识的积极性，促使居民群众具备基...",
            },
          ],
        },
        {
          id: 4,
          title: "社区党建",
          list: [
            {
              id: 1,
              img: require("@/assets/img/Home/modular4_1.png"),
              listTitle: "努力为党和人民争取更大光荣",
              content:
                "党的盛典，人民的节日。7月1日上午，天安门广场成为欢 声笑语的海洋，各界代表7万余人以盛大仪式欢庆中国共...",
            },
            {
              id: 2,
              img: require("@/assets/img/Home/modular4_2.png"),
              listTitle: "宜方达物业公司开展主题党日",
              content:
                "2月4日上午，易方达物业公司联合市委组织部、市委编办、 市政府金融办、市三中和金川区举办了”学党史见行动、...",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@media screen and(min-width:1301px) {
  .home {
    .content {
      width: 68%;
    }
  }
}
@media screen and(max-width:1300px) {
  .home {
    .content {
      width: 80%;
    }
  }
}
@media screen and(max-width:1128px) {
  .home {
    .content {
      width: 100%;
    }
  }
}
@media screen and(max-width:974px) {
  .home {
    .service {
      padding: 30px 15px !important;
      .content {
        > div {
          width: 50% !important;
        }
      }
    }
    .modular {
      padding: 30px 15px !important;
      .content {
        > div {
          width: 100% !important;
        }
      }
    }
    .introduce {
      > .content {
        > :last-child {
          display: none;
        }
      }
    }
  }
}
@media screen and(max-width:745px) {
  .home {
    .introduce {
      > .content {
        flex-wrap: wrap;
        > div {
          width: 100%;
        }
      }
    }
  }
}

@media screen and(max-width:540px) {
  .home {
    .introduce {
      > .content {
        > :nth-child(2) {
          > :nth-child(2) {
            > p {
              width: auto !important;
            }
            > ul {
              display: none;
            }
          }
        }
      }
    }
  }
}

.home {
  .service {
    width: 100%;
    padding: 40px;
    background: #fef7f7;
    > .content {
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      > div {
        position: relative;
        width: 25%;
        height: 240px;
        padding: 20px;
        .title {
          margin-bottom: 20px;
          > p {
            margin: 0;
            padding: 0;
            width: 71px;
            font-size: 1.4rem;
            font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            color: #ffffff;
          }
        }
        > :nth-child(2) {
          font-size: 15px;
          font-family: Microsoft YaHei, Microsoft YaHei-Regular;
          font-weight: 400;
          color: #ffffff;
        }
        > :nth-child(3) {
          font-size: 12px;
          font-family: Microsoft YaHei, Microsoft YaHei-Regular;
          font-weight: 400;
          color: #ffffff;
          display: none;
        }
        > .arrow {
          display: none;
          position: absolute;
          bottom: 30px;
          width: 25px;
          > img {
            width: 100%;
          }
        }
      }
      > div:hover {
        transform: scale(1.05);
        z-index: 1;
        overflow: hidden;
        transition: 0.5s;
        > :nth-child(3) {
          display: block;
          animation: fadeInRight;
          animation-duration: 1s;
        }
        > .arrow {
          display: block;
          animation: fadeInRight;
          animation-duration: 2s;
        }
      }
    }
  }
  .modular {
    width: 100%;
    padding: 40px 40px 20px 40px;
    > .content {
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > div {
        width: 49%;
        margin-bottom: 2%;
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
        padding: 20px;
        > p {
          font-size: 16px;
          font-family: Microsoft YaHei, Microsoft YaHei-Bold;
          font-weight: 700;
          color: #333333;
        }
        > :last-child {
          margin-top: 20px;
        }
        > .itemContent {
          display: flex;
          justify-content: space-between;
          > .img {
            width: 200px;
            img {
              width: 100%;
              height: auto;
            }
          }
          > :last-child {
            padding: 10px;
            width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            > :first-child {
              font-size: 13px;
              font-family: Microsoft YaHei, Microsoft YaHei-Regular;
              color: #d20505;
              font-weight: bold;
            }
            > :last-child {
              font-size: 12px;
              font-family: Microsoft YaHei, Microsoft YaHei-Regular;
              text-align: left;
              color: #333333;
            }
          }
        }
      }
      > div:hover {
        box-shadow: 0px 0px 10px 0px rgba(210, 5, 5, 0.32);
      }
    }
  }
  .introduce {
    width: 100%;
    padding: 40px;
    background: rgba(210, 5, 5, 0.05);
    .content {
      margin: auto;
      display: flex;
      > :first-child {
        position: relative;
        > img {
          width: 100%;
          height: auto;
        }
        > div {
          position: absolute;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          width: 100%;
          padding: 10px;
          > p {
            margin: 0;
          }
          > :first-child {
            font-size: 14px;
            font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            color: #ffffff;
            margin-bottom: 5px;
          }
          > :last-child {
            font-size: 10px;
            font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            color: #ffffff;
          }
        }
      }
      > :nth-child(2) {
        position: relative;

        > img {
          width: 100%;
          height: auto;
        }
        > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 15px;
          > p:first-child {
            font-size: 18px;
            font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            text-align: left;
            color: #837e75;
          }
          > :nth-child(2) {
            width: 300px;
            height: 51px;
            font-size: 12px;
            font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            color: #9e978b;
            line-height: 32px;
            > span {
              color: #d20505;
              margin-left: 20px;
            }
          }
          > ul {
            list-style: none;
            display: flex;
            padding: 0;
            justify-content: space-between;
            width: 300px;
            border-top: 2px solid rgb(206, 196, 196);
            margin-top: 15px;
            padding-top: 15px;
            > li {
              > :first-child {
                font-size: 20px;
                font-family: Microsoft YaHei, Microsoft YaHei-Regular;
                color: #d20505;
              }
              > :last-child {
                font-size: 12px;
                font-family: Microsoft YaHei, Microsoft YaHei-Regular;
                color: #9e978b;
              }
            }
          }
        }
      }
      > :last-child {
        > img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
