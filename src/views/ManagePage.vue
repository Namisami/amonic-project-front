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
                      <v-form v-model="valid">
                        <v-container>
                          <v-row>
                            <v-col cols="12"
                              md="4">
                                <label for="">From </label>
                                <select class="w-10/12 border rounded-md p-2" v-model="selecte">
                                  <option  v-for="airport in airports" :key="airport.id">
                                  {{ airport.iata_code }}
                                  </option>
                                </select>
                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <label for="">To </label>
                              <select class="w-10/12 border rounded-md p-2" v-model="selected">
                                  <option  v-for="airport in airports" :key="airport.id">
                                  {{ airport.iata_code}}
                                  </option>
                                </select>
                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <label for="">Sort </label>
                              <select class="w-10/12 border rounded-md p-2" v-model="selected">
                                  <option  v-for="airport in airports" :key="airport.id">
                                  {{ airport.iata_code}}
                                  </option>
                                </select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                      <v-form >
                        <v-container>
                          <v-row>
                            <v-col cols="12"
                              md="4">
                              <v-text-field
                                v-model="last_name"
                                label="Outbound [dd/mm/yyyy]"
                                variant="outlined"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <v-text-field
                                v-model="last_name"
                                label="Flight number [xxxx]"
                                variant="outlined"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="20"
                              md="4">
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
                            <tr @click="choose(schedule.id)"  v-for="schedule in schedules" :key="schedule.id">
                            <td class="border-collapse border p-2 h-4 " >{{ schedule.date }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ schedule.time }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ schedule.route.departure_airport }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ schedule.route.arrival_airport }}</td>
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
                      <el-button class="border-orange" style="width: 200px" >Import Chandes</el-button>
                    </div>
                     

                  
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed } from 'vue';
  import { store } from '@/store'
  import axiosInstance, { API_URL } from '@/http'

  const schedules = computed(() => store.state.schedules )
  const airports = computed(() => store.state.airports )
  export default {
    setup() {
      onMounted(() => {
        console.log(13121312)
        axiosInstance
          .get('schedules/')
          .then((res) => {
            store.commit('setSchedules', res.data)
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
            showNotify({ type: 'danger', message: 'Ошибка' })
          })
          .finally(() => {
              loadingToast.close()
          })})
      onMounted(() => {
        console.log(13121312)
        axiosInstance
          .get('airports/')
          .then((res) => {
            store.commit('setAirports', res.data)
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
            showNotify({ type: 'danger', message: 'Ошибка' })
          })
          .finally(() => {
              loadingToast.close()
          })})
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
      choose(scheduleId) { 
      this.selectedSchedule = scheduleId 
     
      console.log(this.selectedSchedule)
      axiosInstance
        .get(`schedules/${this.selectedSchedule}`, {
         
        })
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
    cancel(){
      
      axiosInstance
        .patch(`${this.schedule.url}`, {
          confirmed: false
          

        })
        .then((res) => {
          console.log(res.data)
          
        })
        .catch(() => {
          console.log('12312312312')
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        }
      )
      axiosInstance
        .get('schedules/')
        .then((res) => {
          store.commit('setSchedules', res.data)
          this.schedules = res.data
        })
        .catch((err) => {
          console.log(err)
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        })
    }
    }
  };
  </script>
