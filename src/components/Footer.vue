<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-02 19:57:28
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-02 22:37:27
 * @FilePath: \yifangda\src\components\Footer.vue
-->
<template>
  <div id="footer">
    <!-- 联系方式 -->
    <div class="footer-top">
      <div class="footer-top-item">
        <img src="../assets/img/Home/座机.png" alt="" />
        <span>400-666-8888</span>
      </div>

      <div class="footer-top-item">
        <img src="../assets/img/Home/vip.png" alt="" />
        <span>一对一vip专属服务</span>
      </div>

      <div class="footer-top-item">
        <img src="../assets/img/Home/zhongbiao.png" alt="" />
        <span>周一到周五（8:30-17:30）</span>
      </div>
    </div>
    <!-- 分割下划线 -->
    <div class="footer-line"></div>

    <!-- 底部导航 -->
    <div class="footer-content">
      <div class="footer-content-item">
        <div class="title">关于我们</div>
        <div class="content">
          <router-link to="/about">公司介绍</router-link>
          <router-link to="/about">企业文化</router-link>
          <router-link to="/about">发展历程</router-link>
          <router-link to="/about">员工风采</router-link>
          <router-link to="/about">企业资质</router-link>
        </div>
      </div>
      <div class="footer-content-item">
        <div class="title">服务项目</div>
        <div class="content">
          <router-link to="/about">项目列表</router-link>
        </div>
      </div>
      <div class="footer-content-item">
        <div class="title">服务体系</div>
        <div class="content">
          <router-link to="/about">物业服务</router-link>
          <router-link to="/about">供热供水</router-link>
          <router-link to="/about">宜民优选</router-link>
          <router-link to="/about">便民服务</router-link>
          <router-link to="/about">工程建设</router-link>
        </div>
      </div>
      <div class="footer-content-item">
        <div class="title">新闻动态</div>
        <div class="content">
          <router-link to="/about">行业新闻</router-link>
          <router-link to="/about">公司动态</router-link>
          <router-link to="/about">小区动态</router-link>
        </div>
      </div>
      <div class="footer-content-item">
        <div class="title">企业人才需求</div>
        <div class="content">
          <router-link to="/about">岗位详情</router-link>
        </div>
      </div>
      <div class="footer-content-item">
        <div class="title">党建工作</div>
        <div class="content">
          <router-link to="/about">文件列表</router-link>
        </div>
      </div>
      <div class="footer-content-item">
        <div class="title">移动端</div>
        <div class="content">
          <img src="../assets/img/Home/组 7.png" alt="" />
        </div>
        <span>（移动端二维码）</span>
      </div>
      <div class="footer-content-item">
        <div class="title">小程序</div>
        <div class="content">
          <img src="../assets/img/Home/组 8.png" alt="" />
        </div>
        <span>（小程序二维码）</span>
      </div>
    </div>

    <!-- 分割下划线 -->
    <div class="footer-line"></div>

    <!-- 底部版权 -->
    <div class="bottom-copyright">
      <div class="bottom-copyright-item">
        <span> 400-666-8888 一对一VIP专属服务 周一到周五（8：30-17：30） </span>
      </div>
      <div class="bottom-copyright-item">
        <span> 公司名称：金昌市宜方达物业管理有限责任公司 </span>
      </div>
      <div class="bottom-copyright-item">
        <span> 公司地址：金昌市金昌区金昌路与红星路交叉口 </span>
      </div>
      <div class="bottom-copyright-item">
        <span> 软件企业证书编号： </span>
      </div>
      <div class="bottom-copyright-item">
        <span> 传真： </span>
      </div>
      <div class="bottom-copyright-item">
        <span> 邮箱： </span>
      </div>
      <div class="bottom-copyright-item">
        <span> 邮编： </span>
      </div>
      <div class="bottom-copyright-item">
        <span> © 2007-2021 Inc.All rights reserved. </span>
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
    return {};
  },
};
</script>

<style scoped lang="less">
@color-grey: grey;

@media screen and (min-width: 768px) {
  #footer {
    min-height: 65vh;
  }
  .footer-top {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 2vh;
    .footer-top-item {
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

@media screen and (max-width: 767px) {
  #footer {
    height: 60vh;

    justify-content: center;
    align-items: center;

    .footer-top {
      width: 100%;
      text-align: left;
      display: flex;
      flex-direction: column;
    }
  }
}

#footer {
  width: 100%;
  left: 0;
  background-color: rgba(37, 36, 56, 0.9);
  position: relative;
  bottom: 0;
  z-index: 999;
}
// #footer::before {
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-image: url("../assets/img/Home/banner.png");
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   filter: blur(5px);
//   z-index: -1;
// }
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
    }
    span {
      color: @color-grey;
    }
  }
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