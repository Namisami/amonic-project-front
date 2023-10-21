import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      isAuthenticated: Boolean(window.localStorage.getItem('refresh_token')),
      users: []
    }
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    setUsers(state, users) {
      state.users = users
    }
  }
})
