import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import about from "@/views/AboutView.vue";
import SearchRuslt from "@/views/SearchRuslt.vue";
import AboutViewTV from "@/views/AboutViewTV.vue";
import AboutAll from "@/views/AboutAll.vue";
import AboutAlltv from "@/views/AboutAlltv.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      titel: "Home",
    },
  },
  {
    path: "/about/:filmid",
    name: "about",
    component: about,
    meta: {
      titel: "About",
    },
  },
  {
    path: "/SEARCH",
    name: "search",
    component: SearchRuslt,
    meta: {
      titel: "result",
    },
  },
  {
    path: "/AboutTV/:filmid",
    name: "AboutTV",
    component: AboutViewTV,
    meta: {
      titel: "AboutTV",
    },
  },
  {
    path: "/AboutAll/:filmid",
    name: "AboutAll",
    component: AboutAll,
    meta: {
      titel: "AboutAll",
    },
  },
  {
    path: "/AboutAlltv/:filmid",
    name: "AboutAlltv",
    component: AboutAlltv,
    meta: {
      titel: "AboutAlltv",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
