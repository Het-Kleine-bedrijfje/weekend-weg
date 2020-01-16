import Vue from "vue";
import Vuex from "vuex";
//import { db } from "../firebase/db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    steden: []
  },
  mutations: {
    AddNewCity(state, nieuweStad) {
      state.steden.push(nieuweStad);
    },
    DeleteItem(state, index) {
      state.steden.splice(index, 1);
    }
  },
  actions: {},
  modules: {},
});
