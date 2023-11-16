import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      isAuthenticated: Boolean(window.localStorage.getItem('refresh_token')),
      users: [],
      offices: [],
      visits: [],
    }
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    setUsers(state, users) {
      state.users = users
    },
    setOffices(state, offices) {
      state.offices = offices
    },
    setVisits(state, visits) {
      state.visits = visits
    },
  }
})
