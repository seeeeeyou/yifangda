<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 19:57:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-03 03:31:17
 * @FilePath: \yifangda\src\views\About\development.vue
-->
<template>
  <div class="development">
    <a-timeline mode="alternate">
      <a-timeline-item>
        <span slot="dot"></span>
      </a-timeline-item>
      <a-timeline-item>
        <span slot="dot" class="time">2021年7月</span>
        <div class="card">
          <div class="left">
            <span>2021年7月1日</span>
            <p>公司庆祝建党100周年汇演活动圆满完成</p>
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item color="White">
        <div class="card">
          <div class="right">
            <span>2021年6月28日</span>
            <p>
              公司召开第八次股东大会，总结2021年上
              半年工作内容，确定2021年下半年规划， 确定今后公司的三个指导思想
            </p>
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <span slot="dot" class="time">2021年6月</span>
        <div class="card">
          <div class="left">
            <span> 2021年6月7日</span>
            <p>
              端午节前召开端午动员会，总结个人上半年工作总结，
              规划下半工作计划并有效进行实施
            </p>
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item>
        <span slot="dot" class="time">2021年5月</span>
        <div class="card">
          <div class="right">
            <span>2021年5月6日</span>
            <p>
              公司趁劳动节之余举行全公司大扫除活动并进行抽奖，不
              仅锻炼员工的身体素质，也提高了员工的积极性
            </p>
          </div>
        </div>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
export default {
  name: "development",
  metaInfo: {
    title: "宜方达-发展历程",
  },
};
</script>

<style lang="less" scoped>
.development {
  min-height: 50vh;
  padding-bottom: 150px;
}
.card-template () {
  position: absolute;
  background: rgb(253, 242, 242);
  width: 400px;
  height: 120px;
  border-radius: 10px;
  span {
    font-size: 18px;
    color: #333;
    padding: 20px;
    margin-left: 10px;
    font-weight: bold;
  }
  p {
    color: grey;
    padding: 10px;
  }
}
.time {
  color: #fff;
  background: #ff4d4f;
  border-radius: 10px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  margin-right: 10px;
  margin-top: -10px;
  padding: 10px;
}
.card {
  margin: 50px;
  position: relative;

  .left::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -50px;
    bottom: 0;
    background: red;
    height: 2px;
    width: 30px;
  }
  .right::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -50px;
    bottom: 0;
    background: red;
    height: 2px;
    width: 30px;
  }
  .left {
    .card-template();
    right: 50px;
  }
  .right {
    .card-template();
    left: 50px;
  }
}
</style>