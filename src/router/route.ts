import { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import("@/views/test/index.vue") },
  {
    path: "/login",
    component: () => import("@/views/basic/login/index.vue"),
  },
];
export default routes;
