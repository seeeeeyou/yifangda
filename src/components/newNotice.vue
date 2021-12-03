<template>
  <div class="newNotice">
    <div class="content">
      <div v-for="item of data.rows" :key="item.noticeId" class="item">
        <div class="img">
          <img :src="item.noticePicture" alt="" />
        </div>
        <div class="itemContent">
          <div>
            <p class="title">{{ item.noticeTitle }}</p>
            <p class="time">{{ item.createTime }}</p>
          </div>
          <p class="text" v-html="item.noticeContent"></p>
        </div>
      </div>
    </div>
    <div class="pager">
      <div class="current">当前{{ pageNum }}/{{ total }}页</div>
      <a-pagination
        :default-current="1"
        :total="total * 10"
        @change="pageChange"
      />
      <div class="end">尾页</div>
    </div>
  </div>
</template>

<script>
import { getData } from "@/api/api.js";
export default {
  name: "my-notice",
  props: {
    id: {
      type: Number,
      default: () => {
        return 1;
      },
    },
  },
  data() {
    return {
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
          noticeType: this.id,
          pageNum: val,
          pageSize: 3,
        }).then((res) => {
          this.data = res.data;
        });
      },
      immediate: true,
    },
  },
  computed: {
    total() {
      return Math.ceil(this.data.total / 3);
    },
  },
};
</script>
<style lang="less" scoped>
@media screen and(min-width: 1200px) {
  .newNotice {
    width: 68%;
  }
}
@media screen and(max-width: 1200px) {
  .newNotice {
    width: 90%;
  }
}
@media screen and(max-width: 810px) {
  .newNotice {
    .content {
      > .item {
        flex-wrap: wrap;
        > div {
          width: 100% !important;
        }
        > .itemContent {
          > div {
            flex-wrap: wrap;
            > .time {
              width: 100%;
              text-align: right;
            }
          }
        }
      }
    }
  }
}
.newNotice {
  // width: 100%;
  padding: 50px 0;
  margin: auto;
  > .content {
    margin: auto;
    > .item {
      display: flex;
      border-bottom: 1px solid rgb(190, 187, 187);
      padding: 20px 0;
      > .img {
        width: 240px;
        > img {
          width: 100%;
        }
      }
      > .itemContent {
        width: 80%;
        padding: 15px;
        > div {
          display: flex;
          justify-content: space-between;
          .title {
            font-size: 14px;
            color: #d20505;
            font-weight: bold;
          }
          .time {
            font-size: 1.2rem;
            color: #333333;
          }
        }
      }
    }
  }
  > .pager {
    margin-top: 30px;
    display: flex;
    justify-content: right;
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
</style>

<style lang="less">
.text {
  * {
    color: black !important;
    font-size: 1.3rem;
  }
}
</style>