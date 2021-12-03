<template>
  <div class="project">
    <my-banner :banner="banner" />
    <div class="content">
      <div class="list">
        <div v-for="item of data.rows" :key="item.noticeId" class="item">
          <div class="img">
            <img :src="item.noticePicture" alt="" />
          </div>
          <p class="title">{{ item.noticeTitle }}</p>
          <p>宜方达花园</p>
          <hr />
          <p class="text" v-html="item.noticeContent"></p>
        </div>
      </div>
      <div class="pager">
        <div class="current">当前{{ pageNum }}/{{ total }}页</div>
        <a-pagination :default-current="1" :total="total*10" @change="pageChange" />
        <div class="end">尾页</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "@/api/api.js";
export default {
  name: "project",
  data() {
    return {
      banner: require("@/assets/img/journalism/banner@2x.png"),
      pageNum: 1,
      data: [],
    };
  },
  methods: {
    pageChange(page) {
      this.pageNum = page;
    },
  },
  watch: {
    pageNum: {
      handler(val) {
        getData({
          noticeType: 5,
          pageNum: val,
          pageSize: 6,
        }).then((res) => {
          console.log(res.data);
          this.data = res.data;
        });
      },
      immediate: true,
    },
  },
  computed: {
    total() {
      return Math.ceil(this.data.total / 6);
    },
  },
};
</script>

<style lang="less" scoped>
@media screen and(min-width: 1200px) {
  .project {
    .content,
    .pager {
      width: 68%;
    }
  }
}
@media screen and(max-width: 1200px) {
  .project {
    .content,
    .pager {
      width: 90%;
    }
  }
}
@media screen and(max-width: 830px) {
  .project {
    .content{
      width: 95%;
    }
    .list {
      grid-template-columns: repeat(2, 50%) !important;
      grid-template-rows: repeat(3, 33.3%) !important;
    }
  }
}
.project {
  width: 100%;
  > .content {
    padding: 50px 0;
    margin: auto;
    > .list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 33.3%);
      grid-template-rows: repeat(2, 50%);
      > .item {
        padding: 10px;
        > .img {
          margin-bottom: 15px;
          > img {
            width: 100%;
          }
        }
        > .title {
          font-size: 13px;
          font-family: Microsoft YaHei, Microsoft YaHei-Regular;
          color: #333333;
        }
        > :nth-child(3) {
          .title();
          color: #999999;
        }
      }
    }
    > .pager {
      margin-top: 30px;
      display: flex;
      justify-content: right;
      width: 100%;
      > * {
        margin-left: 10px;
      }
      > .current {
        height: 32px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        line-height: 32px;
        padding: 0 10px;
      }
      > .end {
        height: 32px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        line-height: 32px;
        padding: 0 10px;
      }
      .current:hover,
      .end:hover {
        color: #1890ff;
        border: 1px solid #1890ff;
      }
    }
  }
}
</style>

<style lang="less">
.text {
  * {
    color: #999999 !important;
    font-size: 12px;
  }
}
</style>