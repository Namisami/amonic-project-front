<template>
   <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-blue border-b p-2">
            <p class=" text-sm text-blue" >AMONIC Airlines Automotion System</p>
            <img src="close.svg" alt="">
        </div>
                    <v-card-title class="text-sm font-weight-regular justify-space-between txt">
                        Filter by
                    </v-card-title>
                    <v-card class="ml-16 text-sm" width="800" justify="center">
                      <v-form>
                        <v-container>
                          <v-row>
                            <v-col cols="12" md="4">
                              <label for="city-select">From</label>
                              <select v-model="departureAirport" class="ml-2 w-32 border-collapse border-solid border-2 border-black" name="cities" id="city-select">
                                <option value="">Choose an option</option>
                                <option v-for="airport in airports" :key="airport.id" :value="airport.iata_code">{{ airport.iata_code }}</option>
                              </select>
                            </v-col>
                            <v-col cols="12" md="4">
                              <label for="city-select">To</label>
                              <select v-model="arrivalAirport" class="ml-2 w-32 border-collapse border-solid border-2 border-black" name="cities" id="city-select">
                                <option value="">Choose an option</option>
                                <option v-for="airport in airports" :key="airport.id" :value="airport.iata_code">{{ airport.iata_code }}</option>
                              </select>
                            </v-col>
                            <v-col cols="12" md="4">
                              <label for="city-select">Sort by</label>
                              <select v-model="departureAirport" class="ml-2 w-32 border-collapse border-solid border-2 border-black" name="cities" id="city-select">
                                <option value="">Choose an option</option>
                                <option v-for="airport in airports" :key="airport.id" :value="airport.iata_code">{{ airport.iata_code }}</option>
                              </select>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" md="4">
                              <label>Outbound
                                <input 
                                  v-model="outbound" 
                                  class="ml-2 border-collapse border-solid border-2 border-black" 
                                  type="date" 
                                />
                              </label>
                            </v-col>
                            <v-col cols="12" md="4">
                              <label>Flight Number
                                <input 
                                  v-model="flightNumber" 
                                  class="ml-2 border-collapse border-solid border-2 border-black" 
                                  type="text" 
                                />
                              </label>
                            </v-col>
                            <v-col cols="12" md="4">
                              <el-button class="border-orange" style="width: 200px" >Apply</el-button>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                    </v-card>
                    <table class=" mx-auto h-60 mt-5 w-11/12 border border-gray-600 ">
                      <thead> <!-- Заголовок таблицы -->
                      <tr class="text-xs"> 
                          <th class=" border  border-gray-500 p-2 w-2/12">Date</th>
                          <th class="border-collapse border  border-gray-500 p-2 ">Time</th>
                          <th class="border-collapse border  border-gray-500 p-2 ">From</th>
                          <th class="border-collapse border  border-gray-500 p-2  ">To</th>
                          <th class="border-collapse border  border-gray-500 p-2 ">Flight Number</th>
                          <th class="border-collapse border  border-gray-500 p-4 ">Aircraft</th>
                          <th class="border-collapse border  border-gray-500 p-2  ">Economy Price</th>
                          <th class="border-collapse border  border-gray-500 p-2 ">Business Price</th>
                          <th class="border-collapse border  border-gray-500 p-4 ">First class Price</th>
                      </tr>
                      </thead>
                      <tbody class="text-xs"> <!-- Заполнение таблицы -->
                          <tr @click="choose(schedule.id)" v-for="schedule in schedules" :style="getStyle(schedule)" :key="schedule.id">
                          <td class="border-collapse border p-2 h-4 " >{{ schedule.date }}</td>
                          <td class="border-collapse border p-2 h-4 ">{{ schedule.time }}</td>
                          <td class="border-collapse border p-2 h-4 ">{{ schedule.route.departure_airport.iata_code }}</td>
                          <td class="border-collapse border p-2 h-4 ">{{ schedule.route.arrival_airport.iata_code }}</td>
                          <td class="border-collapse border p-2 h-4 ">{{ schedule.flight_number }}</td>
                          <td class="border-collapse border p-2 h-4 ">{{ schedule.aircraft.name }}</td>
                          <td class="border-collapse border p-2 h-4 ">${{ schedule.economy_price }}</td>
                          <td class="border-collapse border p-2 h-4 ">${{ schedule.business_price}}</td>
                          <td class="border-collapse border p-2 h-4 ">${{ schedule.first_class_price }}</td>
                      </tr>
                          <tr class=""> <!-- Цикл по строкам -->
                              <td class="border-collapse border p-2 "></td> <!-- Номер строки -->
                              <td class="border-collapse border  p-2"> </td> 
                              <td class="border-collapse border  p-2"></td> 
                              <td class="border-collapse border  p-2"></td> 
                              <td class="border-collapse border  p-2"></td>
                              <td class="border-collapse border  p-2"></td> 
                              <td class="border-collapse border  p-2"></td> 
                              <td class="border-collapse border  p-2"></td>
                              <td class="border-collapse border  p-2"></td> 
                          </tr>
                      </tbody>
                    </table>
                    <div class="flex justify-between gap-5 mx-10 my-4">
                      <div class="flex justify-start gap-5" >
                        <el-button @click="cancel" class="border-orange" style="width: 200px" >Cancel Flight</el-button>
                        <router-link to="/schedule"><el-button class="border-orange" style="width: 200px">Edit Flight</el-button></router-link>
                      </div>
                      <router-link to="/changeschedule">
                        <el-button class="border-orange" style="width: 200px" >Import Chandes</el-button>
                      </router-link>
                    </div>
                     

                  
    </div>
  </template>
  
<script>
import { onMounted, computed } from 'vue';
import { store } from '@/store'
import axiosInstance from '@/http'
import { allowMultipleToast, closeToast, showLoadingToast, showNotify } from 'vant'

const schedules = computed(() => store.getters.getSchedules)
const airports = computed(() => store.state.airports)

export default {
  setup() {
    onMounted(async () => {
      allowMultipleToast()
      closeToast(true)
      const loadingToast = showLoadingToast({
        forbidClick: true,
        duration: 0,
        message: 'Загрузка...'
      })
      await axiosInstance
        .get('schedules/')
        .then((res) => {
          store.commit('setSchedules', res.data)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      await axiosInstance
        .get('airports/')
        .then((res) => {
          store.commit('setAirports', res.data)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
            loadingToast.close()
        })
    })
  },
  data: () => ({
    step: 1,
      schedules: schedules,
      airports: airports,
      selecte: '',
      selected: '',
      selectedSchedule:'',
      last_name: '',
      items: [airports.iata_code]
      }),
  props: {
    source: String
  },
  methods: {
    getStyle(schedule) {
      if (schedule.id === this.selectedSchedule) {
        return {'background': 'lightgrey'}
      }
      if (!schedule.confirmed) {
        return {'background': '#c96d5b'}
      }
    },
    choose(scheduleId) { 
      this.selectedSchedule = scheduleId 
      console.log(this.selectedSchedule)
      axiosInstance
        .get(`schedules/${this.selectedSchedule}`)
        .then((res) => {
          console.log(res.data)
          this.schedule = res.data
          store.commit('setSchedule', res.data)
        })
        .catch(() => {
          console.log('12312312312')
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        }
      )
    },
    async cancel() {
      allowMultipleToast()
      closeToast(true)
      const loadingToast = showLoadingToast({
        forbidClick: true,
        duration: 0,
        message: 'Загрузка...'
      })
      await axiosInstance
        .patch(`${this.schedule.url}`, {
          confirmed: false
        })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      await axiosInstance
        .get('schedules/')
        .then((res) => {
          store.commit('setSchedules', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
            loadingToast.close()
        })
    }
  }
};
</script>
