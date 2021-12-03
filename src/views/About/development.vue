<template>
  <div class="development">
    <div class="content">
      <div class="pc">
        <div class="item">
          <div class="left">
            <div class="content_left">
              <p>2021年7月1日</p>
              <p>公司庆祝建党100周年汇演活动圆满完成</p>
            </div>
            <div class="horizontal_line"></div>
            <div class="time_line">
              <div class="time">2021年7月</div>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="right">
            <div class="time_line">
              <div class="time">2021年6月</div>
              <div class="line"></div>
            </div>
            <div class="horizontal_line"></div>
            <div class="content_left">
              <p>2021年6月28日</p>
              <p>
                公司召开第八次股东大会，总结2021年上
                半年工作内容，确定2021年下半年规划， 确定今后公司的三个指导思想
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <div class="content_left">
              <p>2021年6月7日</p>
              <p>
                端午节前召开端午动员会，总结个人上半年工作总结，
                规划下半工作计划并有效进行实施
              </p>
            </div>
            <div class="horizontal_line"></div>
            <div class="time_line">
              <div
                class="line"
                style="height: 120px; margin: -20px 0px 0px 46.5px"
              ></div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="right">
            <div class="time_line">
              <div class="time">2021年5月</div>
              <div class="line"></div>
            </div>
            <div class="horizontal_line"></div>
            <div class="content_left">
              <p>2021年5月6日</p>
              <p>
                公司趁劳动节之余举行全公司大扫除活动并进行抽奖，不
                仅锻炼员工的身体素质，也提高了员工的积极性
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile">
        <a-timeline>
          <a-timeline-item color="red" v-for="item of list" :key="item.id">
            <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px" />
            <div class="item">
              <p>{{ item.time }}</p>
              <p>
                {{ item.content }}
              </p>
            </div>
          </a-timeline-item>
        </a-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "development",
  data() {
    return {
      list: [
        {
          id: 1,
          time: "2021年5月6日",
          content:
            "公司趁劳动节之余举行全公司大扫除活动并进行抽奖，不仅锻炼员工的身体素质，也提高了员工的积极性",
        },
        {
          id: 2,
          time: "2021年6月28日",
          content:
            "公司召开第八次股东大会，总结2021年上 半年工作内容，确定2021年下半年规划， 确定今后公司的三个指导思想",
        },
        {
          id: 3,
          time: "2021年6月7日",
          content:
            "端午节前召开端午动员会，总结个人上半年工作总结， 规划下半工作计划并有效进行实施",
        },
        {
          id: 4,
          time: "2021年5月6日",
          content:
            "公司趁劳动节之余举行全公司大扫除活动并进行抽奖，不 仅锻炼员工的身体素质，也提高了员工的积极性",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@media screen and(min-width:995px) {
  .development {
    .content {
      > .mobile {
        display: none;
      }
    }
  }
}
@media screen and(max-width:995px) {
  .development {
    .content {
      > .pc {
        display: none;
      }
      > .mobile {
        display: block;
      }
    }
  }
}
@media screen and(max-width:657px) {
  .development {
    .content {
      width: 95% !important;
      > .pc {
        display: none;
      }
      > .mobile {
        display: block;
        > .item {
          height: 400px !important;
        }
      }
    }
  }
}
.development {
  width: 100%;
  .content {
    width: 68%;
    padding: 50px 0;
    margin: auto;
    .pc {
      min-width: 1033px;
      width: 100%;
      > .item {
        width: 100%;
        position: relative;
        height: 128px;
        > .left {
          width: 60%;
          display: flex;
          position: absolute;
          left: 0;
          > .content_left {
            .text_content();
            text-align: right;
            padding: 15px 15px 15px 70px;
            height: 100px;
          }
          > .horizontal_line {
            .item_line();
            width: 40px;
            margin: 12px 30px;
          }
          > .time_line {
            > .time {
              width: 98px;
              height: 28px;
              background: #d20505;
              border-radius: 14px;
              line-height: 28px;
              text-align: center;
              font-size: 14px;
              font-family: Microsoft YaHei, Microsoft YaHei-Regular;
              color: #ffffff;
            }
            .line {
              .vertical();
              height: 60px;
              margin: 20px 0px 20px 48px;
            }
          }
        }
        > .right {
          width: 59.5%;
          display: flex;
          position: absolute;
          right: 0;
          > .content_left {
            .text_content();
            text-align: left;
            padding: 15px 80px 15px 15px;
            height: 130px;
          }
          > .horizontal_line {
            .item_line();
            width: 70px;
            margin: 10px 30px;
          }
          > .time_line {
            > .time {
              width: 98px;
              height: 28px;
              background: #d20505;
              border-radius: 14px;
              line-height: 28px;
              text-align: center;
              font-size: 14px;
              font-family: Microsoft YaHei, Microsoft YaHei-Regular;
              color: #ffffff;
            }
            .line {
              .vertical();
              height: 60px;
              margin: 20px 0px 20px 48px;
            }
          }
        }
      }
    }
    .mobile {
      margin: auto;
      width: 100%;
      .item {
        .text_content();
        text-align: left;
        padding: 15px 80px 15px 15px;
        width: auto !important;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        >p{
          margin: 0;
        }
        > :last-child {
        }
      }
    }
  }
  .text_content {
    background: rgba(210, 5, 5, 0.05);
    border-radius: 4px;
    width: 320px;
    > p {
      margin: 0;
      height: 30px;
    }
    > :first-child {
      font-weight: bold;
      font-size: 14px;
      font-family: Microsoft YaHei, Microsoft YaHei-Bold;
      color: #333333;
    }
    > :last-child {
      font-weight: bold;
      font-size: 12px;
      font-family: Microsoft YaHei, Microsoft YaHei-Bold;
      color: #999999;
    }
  }
  .item_line {
    height: 2px;
    background-color: #d20505;
  }
  .vertical {
    width: 2px;
    background-color: #d20505;
  }
}
</style>
