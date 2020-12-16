import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:0,
    colorCode: "red",
  },
  mutations: {
    increaseCounter(state, payload) {
      state.counter += payload;
    },
    decreaseCounter(state, payload) {
      state.counter -= payload;
    },
    setColorCode(state, payload) {
      state.colorCode = payload;
    }
  },
  actions: {
    increaseCounter( {commit} ) {
      axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new").then( response => {
        commit("increaseCounter", response.data);
      } );
    },
    decreaseCounter( {commit} ) {
      axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new").then( response => {
        commit("decreaseCounter", response.data);
      } );
    },
    setColorCode( {commit}, payload ) {
      commit("setColorCode", payload);
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    }
  },
  modules: {
  }
})