import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      isAuthenticated: Boolean(window.localStorage.getItem('refresh_token')),
      users: [],
      offices: [],
      user:[],
      tickets: [],
      schedules: [],
      schedule: [],
      airports: []
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
    setSchedules(state, schedules) {
      state.schedules = schedules
    },
    setAirports(state, airports) {
      state.airports = airports
    },
    setUser(state, user){
      state.user = user
    },
    setTickets(state, tickets){
      state.tickets = tickets
    },
    setSchedule(state, schedule) {
      state.schedule = schedule
    },


  }
})
