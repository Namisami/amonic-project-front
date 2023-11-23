import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      isAuthenticated: Boolean(window.localStorage.getItem('refresh_token')),
      users: [],
      offices: [],
      visits: [],
      user: {},
      airports: [],
      cabinTypes: [],
      schedules: [],
    }
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setOffices(state, offices) {
      state.offices = offices
    },
    setVisits(state, visits) {
      state.visits = visits
    },
    setAirports(state, airports) {
      state.airports = airports
    },
    setCabinTypes(state, cabinTypes) {
      state.cabinTypes = cabinTypes
    },
    setSchedules(state, schedules) {
      state.schedules = schedules
    },
  }
})
