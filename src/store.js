import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    previousIssueCount: 12,
  },
  mutations: {
    changePreviousIssueCount(state, count) {
      state.previousIssueCount = count
    }
  },
  getters: {
    previousIssueCount: state => state.previousIssueCount
  }
})