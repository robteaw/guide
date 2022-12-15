import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "HTML",
    component: Home,
  },
  {
    path: "/css",
    name: "CSS",
    component: CSS,
  },
  {
    path: "/javascript",
    name: "JavaScript",
    component: JavaScript,
  },
  {
    path: "/other",
    name: "Other",
    component: Other,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
