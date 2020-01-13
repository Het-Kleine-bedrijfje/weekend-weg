import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../home/Home.vue";
import Pictures from "../pictures/CitiesPictures.vue";
import City from "../locations/CitySelector.vue"
import TipsPage from "../tips/TipsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/fotos",
    name: "CitiesPictures",
    component: Pictures,
  },
  {
    path: "/locaties",
    name: "CitySelector",
    component: City,
  },
  {
    path: "/tips",
    name: "Tips",
    component: TipsPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
