// 引入路由
import { createRouter, createWebHashHistory } from "vue-router";
import { components } from "vuetify/dist/vuetify.js";


// 路由配置
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: "/home", // 路由路径
    name: "home", // 路由名称
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/pioneers/000",
    name: "000",
    component: () => import("@/views/pioneers/000.vue")
  },
  {
    path: "/pioneers/001",
    name: "001",
    component: () => import("@/views/pioneers/001.vue")
  },
  // {
  //   path: "/pioneers/002",
  //   name: "002",
  //   component: () => import("@/views/pioneers/002.vue")
  // },

  // {
  //   path: "/pioneers/100",
  //   name: "100",
  //   component: () => import("@/views/pioneers/100.vue")
  // },
  // {
  //   path: "/pioneers/101",
  //   name: "101",
  //   component: () => import("@/views/pioneers/101.vue")
  // },
  // {
  //   path: "/pioneers/102",
  //   name: "102",
  //   component: () => import("@/views/pioneers/102.vue")
  // },
  {
    path: "/pioneers/200",
    name: "200",
    component: () => import("@/views/pioneers/200.vue")
  },
  {
    path: "/pioneers/201",
    name: "201",
    component: () => import("@/views/pioneers/201.vue")
  },
  {
    path: "/pioneers/202",
    name: "202",
    component: () => import("@/views/pioneers/202.vue")
  },
  {
    path: "/pioneers/300",
    name: "300",
    component: () => import("@/views/pioneers/300.vue")
  },
  {
    path: "/pioneers/301",
    name: "301",
    component: () => import("@/views/pioneers/301.vue")
  },
  // {
  //   path: "/pioneers/302",
  //   name: "302",
  //   component: () => import("@/views/pioneers/302.vue")
  // },
  {
    path: "/pioneers/400",
    name: "400",
    component: () => import("@/views/pioneers/400.vue")
  },
  {
    path: "/pioneers/401",
    name: "401",
    component: () => import("@/views/pioneers/401.vue")
  },
  {
    path: "/pioneers/402",
    name: "402",
    component: () => import("@/views/pioneers/402.vue")
  },
];
// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes, // 路由配置简写形式，同 routes: routes

});
// 导出 router
export default router;