import { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  { path: "/login", component: () => import("@/views/basic/login/index.vue") },
];
export default routes;
