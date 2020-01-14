import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    steden: ["Boedapest", "Edinbrough", "Oosterhout Camping", "Belgrado"],
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
  modules: {}
});
