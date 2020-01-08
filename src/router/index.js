import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../home/Home.vue";
import Pictures from "../pictures/CitiesPictures.vue";
import City from "../locations/CitySelector.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/pictures",
    name: "CitiesPictures",
    component: Pictures,
  },
  {
    path: "/locations",
    name: "CitySelector",
    component: City,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
