<template>
  <div class="recruit">
    <my-banner :banner="banner" />
    <div class="content">
      <h1>招聘启事</h1>
      <div class="collapse">
        <a-collapse accordion expandIconPosition="right" v-model="activeKey">
          <a-collapse-panel
            v-for="item of collapseList"
            :key="item.id"
            :header="item.title"
          >
            <div v-html="item.content" style="padding-left: 25px"></div>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recruit",
  data() {
    return {
      banner: require("@/assets/img/journalism/banner@2x.png"),
      activeKey: '1',
      collapseList: [
        {
          id: '1',
          title: "一、小区保洁18人",
          content: `<p>1、要求：男女不限，年龄：55岁以内，身体健康，吃苦耐劳，举止文明，无违法犯罪记录。</p>
      <p>2、工资：1800-2100元/月。</p>
      <p>3、班制：白班，周六、周日下午休息。</p>
      <p>4、用工形式：劳务派遣制。派遣人员进行属地化管理，统一配发劳保用品。</p>
      <p>5、工作地点：金昌市宜方达物业管理有限责任公司管辖小区（金川公司、八冶公司住宅小区）</p>
      <p>6、联系电话：8816169。</p>`,
        },
        {
          id: '2',
          title: "二、冬季运行工42人",
          content: `<p>1、要求：男女不限，男性年龄：56岁以内，女性年龄：48初中以上文化程度，身体健康，无违法犯罪记录，工作时间5个月。</p>
      <p>2、工资：1800-2300元/月。</p>
      <p>3、联系电话：一供热：8816419。二供热：8826536。（退休勿扰！）</p>`,
        },
        {
          id: '3',
          title: "三、拉运工1人",
          content: `<p>
        1、要求：男性，年龄：58岁以内，初中以上文化程度，身体健s康，无违法犯罪记录，具体事宜面议。
      </p>
      <p>2、联系电话：13884522532。</p>`,
        },
        {
          id: '4',
          title: "四、物业管理员3人",
          content: `<p>
        1、要求：男女不限，年龄：40岁以内，大专以上文化程度，有一定的管理、协调能力，能熟练操作电脑，具有较强的组织、策划、沟通、分析、统计能力，身体健康，无违法犯罪记录。
      </p>
      <p>2、工资：1800-2100元/月。</p>
      <p>3、班制：正常班，联系电话：8816169。</p>
      <p>4、用工形式：劳务派遣制，派遣人员进行属地化管理，统一配发劳保用品。</p>`,
        },
        {
          id: '5',
          title: "五、小区门卫100人",
          content: `<p style="text-indent: 1cm">
        根据宜方达物业公司小区门禁系统岗位需求，我公司预招收小区门卫100人，符合以下应聘条件者优先登记，公司将予以储备，待小区门禁系统正式启用，将根据应聘者居住地址就近安排工作岗位。
      </p>
      <p>
       1、要求：男性，年龄60岁以内，身体健康，吃苦耐劳，举止文明，无违法犯罪记录。
      </p>
      <p>2、工资：1650元/月。</p>
      <p>3、班制：八至八（三班两倒）。</p>
      <p>4、用工形式：劳务派遣制。派遣人员进行属地化管理，统一配发劳保用品。</p>
      <p>5、工作地点：金昌市宜方达物业管理有限责任公司管辖小区（金川公司住宅小区）</p>
      <p>6、联系电话：8816169。</p>`,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@media screen and(min-width: 1200px) {
  .recruit {
    .content {
      width: 68%;
    }
  }
}
@media screen and(max-width: 1200px) {
  .recruit {
    .content {
      width: 90%;
    }
  }
}
.recruit {
  width: 100%;
  .content {
    margin: auto;
    padding: 40px 20px;
    h1 {
      color: #d20505;
      font-weight: bold;
      text-align: center;
    }
    >.collapse{
      height: 600px;
    }
  }
}
</style>

