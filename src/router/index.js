import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  //首页
  {
    path: "/",
    name: "首页",
    component: Home,
  },
  // 关于我们
  {
    path: "/about",
    name: "关于我们",
    component: (resolve) => require(["@/views/About"], resolve),
    redirect: "/about/introduction",
    children: [
      {
        path: "introduction",
        name: "公司介绍",
        component: (resolve) =>
          require(["@/views/About/introduction"], resolve),
      },
      {
        path: "corporateCulture",
        name: "企业文化",
        component: (resolve) =>
          require(["@/views/About/corporateCulture"], resolve),
      },
      {
        path: "development",
        name: "发展历程",
        component: (resolve) => require(["@/views/About/development"], resolve),
      },
      {
        path: "staffStyle",
        name: "员工风采",
        component: (resolve) => require(["@/views/About/staffStyle"], resolve),
      },
      {
        path: "qualifications",
        name: "企业资质",
        component: (resolve) =>
          require(["@/views/About/qualifications"], resolve),
      },
    ],
  },
  // 服务项目
  {
    path: "/project",
    name: "服务项目",
    component: (resolve) => require(["@/views/Project"], resolve),
  },
  // 服务体系
  {
    path: "/system",
    name: "服务体系",
    component: (resolve) => require(["@/views/System"], resolve),
    redirect: "/System/property",
    children: [
      {
        path: "property",
        name: "物业服务",
        component: (resolve) => require(["@/views/System/property"], resolve),
      },
      {
        path: "provide",
        name: "供热供水",
        component: (resolve) =>
          require(["@/views/System/provide"], resolve),
      },
      {
        path: "preferred",
        name: "宜民优选",
        component: (resolve) =>
          require(["@/views/System/preferred"], resolve),
      },
      {
        path: "convenience",
        name: "便民服务",
        component: (resolve) => require(["@/views/System/convenience"], resolve),
      },
      {
        path: "build",
        name: "工程建设",
        component: (resolve) =>
          require(["@/views/System/build"], resolve),
      },
    ],
  },
  // 新闻动态
  {
    path: "/journalism",
    name: "新闻动态",
    component: (resolve) => require(["@/views/System"], resolve),
    redirect: "/Journalism/industry",
    children: [
      {
        path: "industry",
        name: "行业新闻",
        component: (resolve) => require(["@/views/Journalism/industry"], resolve),
      },
      {
        path: "company",
        name: "公司动态",
        component: (resolve) =>
          require(["@/views/Journalism/company"], resolve),
      },
      {
        path: "community",
        name: "小区动态",
        component: (resolve) =>
          require(["@/views/Journalism/community"], resolve),
      }
    ],
  },
  // 企业人才需要
  {
    path: "/recruit",
    name: "企业人才需要",
    component: (resolve) => require(["@/views/Recruit"], resolve),
  },
  // 党建工作
  {
    path: "/party",
    name: "党建工作",
    component: (resolve) => require(["@/views/Party"], resolve),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
