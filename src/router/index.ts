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
    path: "/pioneers/200",
    name: "200",
    component: () => import("@/views/pioneers/200.vue")
  },
  {
    path: "/pioneers/200",
    name: "200",
    component: () => import("@/views/pioneers/200.vue")
  },
  {
    path: "/pioneers/200",
    name: "200",
    component: () => import("@/views/pioneers/200.vue")
  },
  {
    path: "/pioneers/200",
    name: "200",
    component: () => import("@/views/pioneers/200.vue")
  },
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