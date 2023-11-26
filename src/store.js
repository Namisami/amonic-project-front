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
      returnSchedules: [],
      offices: [],
      tickets: [],
      schedule: [],
      airports: [],
      roles: [],

      bookOut: {},
      bookReturn: {},
    }
  },
  getters: {
    getSchedules(state) {
      return state.schedules
    }
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    setUsers(state, usersList) {
      state.users = usersList
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
    setSchedules(state, schedulesList) {
      state.schedules = schedulesList
    },
    setSchedule(state, schedule) {
      state.schedule = schedule
    },
    setTickets(state, tickets){
      state.tickets = tickets
    },
    setReturnSchedules(state, returnSchedules){
      state.returnSchedules = returnSchedules
    },
    setRoles(state, roles){
      state.roles = roles
    },
    setBookOut(state, bookOutObj){
      state.bookOut = bookOutObj
      console.log(bookOutObj)
    },
    setBookReturn(state, bookReturnObj){
      state.bookReturn = bookReturnObj
    },
  }
})
