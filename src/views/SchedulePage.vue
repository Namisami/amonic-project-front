<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-blue border-b p-2">
            <p class=" text-sm text-blue" >Schedule Edit</p>
            <img src="close.svg" alt="">
        </div>
    <v-card-title class="text-sm font-weight-regular justify-space-between txt">
                        Filter route
                    </v-card-title>
                    <v-card class="ml-16" width="800" justify="center">
                        <v-container>
                            <v-row class="ml-5 mt-4 mb-4">
                                <v-row class="ml-2 mt-2"> 
                                    <p>From:</p> 
                                    <span class="font-weight-bold ml-3">{{ schedule.route }}</span>
                                </v-row>
                                <v-row class="ml-1 mt-2"> 
                                    <p>To:</p> 
                                    <span class="font-weight-bold ml-3">{{ schedule.route }}</span>
                                </v-row>
                                <v-row class="ml-1 mt-2"> 
                                    <p>Aircraft:</p> 
                                    <span class="font-weight-bold ml-3">{{ schedule.aircraft }}</span>
                                </v-row>
                            </v-row>
                        </v-container>
                    </v-card>
                    <v-form class="text-sm" @submit="submit">
                        <v-container class="w-10/12">
                          <v-row class="ml-4 mt-4 mb-4">
                            <v-col cols="12"
                              md="4">                 
                              <p>Date:</p>
                              <el-date-picker 
                                class="border-blue"
                                v-model="date"
                                type="date"
                                placeholder="Pick a Date"
                                format="YYYY/MM/DD"
                                value-format="YYYY-MM-DD"
                              />


                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <p>Time:</p>
                              <v-text-field
                                v-model="time"
                                variant="outlined"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <p>Economy Price:</p>
                              <v-text-field
                                v-model="economy_price"
                                variant="outlined"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                    </v-form>
                    <div class="flex justify-end gap-5 mx-6" >
                        <el-button @click="submit(schedule.id)" class="border-orange" style="width: 200px" >Update</el-button>
                        <el-button type="danger" class="border-orange" style="width: 200px">Cancel</el-button>
                    </div> 
  
  </div>

</template>
  
  <script>
  import { ref, onMounted, computed } from 'vue';
import { store } from '@/store'
import axiosInstance, { API_URL } from '@/http'

const schedule = computed(() => store.state.schedule )
// console.log('SSSDSSDA', user.value.first_name)

export default {
  // setup() {
  //   onMounted(() => {
  //     console.log('SETUP')
  //     console.log(this.user)
  //     axiosInstance
  //       .get(`users/${user.id}/`, {
         
  //       })
  //       .then((res) => {
  //         console.log(res.data)
  //       })
  //       .catch(() => {
  //         console.log('12312312312')
  //         showNotify({ type: 'danger', message: 'Ошибка' })
  //       })
  //       .finally(() => {
  //           loadingToast.close()
  //       }
  //     )
  //   })
// },
data: () => ({
    schedule: schedule.value,
    date: schedule.value.date,
    time: schedule.value.time,
    economy_price: schedule.value.economy_price,
    selectedSchedule:'',
  }),
  props: {
    source: String
  },
  methods:{
    submit(scheduleId){
      this.selectedSchedule = scheduleId 
     
      console.log(this.selectedSchedule)
      console.log(this.checked)
      axiosInstance
        .patch(`schedules/${this.selectedSchedule}/`, {
          date: this.date,
          time: this.time,
          economy_price: this.economy_price
        })
        .then((res) => {
          console.log(res.data)
          // this.user = res.data
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
    }
  }
  
  </script>