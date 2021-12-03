<template>
  <div class="qualifications">
    <div class="content">
      <h1>荣誉资质</h1>
      <div>
        <div class="left">
          <img src="@/assets/img/About/qualifications/1@2x.png" alt="" />
        </div>
        <div class="listContent">
          <div v-for="(item, index) of imgList" :key="index" class="item">
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qualifications",
  data() {
    return {
      imgList: [
        require("@/assets/img/About/qualifications/2@2x.png"),
        require("@/assets/img/About/qualifications/3@2x.png"),
        require("@/assets/img/About/qualifications/4@2x.png"),
        require("@/assets/img/About/qualifications/5@2x.png"),
        require("@/assets/img/About/qualifications/6@2x.png"),
        require("@/assets/img/About/qualifications/7@2x.png"),
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@media screen and(min-width: 1200px) {
  .qualifications {
    .content {
      width: 68%;
    }
  }
}
@media screen and(max-width: 1200px) {
  .qualifications {
    .content {
      width: 90%;
    }
  }
}
.qualifications {
  width: 100%;
  padding: 40px;
  .content {
    margin: auto;
    img {
      width: 100%;
      height: auto;
    }
    h1 {
      color: #d20505;
      font-weight: bold;
      text-align: center;
    }
    > div {
      display: flex;
      > .left {
        width: 25%;
      }
      > .listContent {
        width: 75%;
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
      }
    }
  }
}
</style>
