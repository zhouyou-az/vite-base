import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./route";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from) => {
  console.log(to, from);
  return true;
});
export default router;
