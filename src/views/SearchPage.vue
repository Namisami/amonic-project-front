<template>
    <div class="font-sans text-sm mx-auto my-4 pb-4 rounded-md border border-blue w-3/4" style="">
        <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
            <p class="text-sm text-blue" >Search for Flights</p>
            <img src="close.svg" alt="">
        </div>
            <form class="form mx-4" action="#">
                <fieldset class="form__header">
                    <legend>Search Parameters</legend>
                        <div class="select-section">
                            <div>
                                <label for="city-select">From</label>
                                <select v-model="departureAirport" class="ml-2 w-32 border-collapse border-solid border-2 border-black" name="cities" id="city-select">
                                  <option value="">Choose an option</option>
                                  <option v-for="airport in airports" :key="airport.id" :value="airport.iata_code">{{ airport.iata_code }}</option>
                                </select>
                            </div>
                            <div class="">
                                <label for="city-select">To</label>
                                <select v-model="arrivalAirport" class="ml-2 w-32 border-collapse border-solid border-2 border-black" name="cities" id="city-select">
                                  <option value="">Choose an option</option>
                                  <option v-for="airport in airports" :key="airport.id" :value="airport.iata_code">{{ airport.iata_code }}</option>
                                </select>
                            </div>
                            <div class="">
                                <label for="city-select">Cabin type</label>
                                <select v-model="cabinType" class="ml-2 w-32 border-collapse border-solid border-2 border-black" name="cities" id="city-select">
                                  <option v-for="cabinType in cabinTypes" :key="cabinType.id" :value="cabinType.name.toLowerCase()">{{ cabinType.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="button-section">
                            <label><input @click="setIsReturn('return')" class="" type="radio" name="direction" value="return">Return</label>
                            <label><input @click="setIsReturn('')" class="" type="radio" name="direction" checked value="one-way">One way</label>
                            <label>Outbound<input v-model="outbound" class="ml-2 border-collapse border-solid border-2 border-black" type="date"></label>
                            <label>Return<input :disabled="!isReturn" v-model="returnDate" class="ml-2 border-collapse border-solid border-2 border-black" type="date"></label>
                            <el-button @click="search" class="border-orange" style="" >Apply</el-button>
                        </div>
                </fieldset>
                <fieldset>
                    <div class="d-flex justify-between mb-2">
                      <legend class="px-2">Outbound Flight Details</legend>
                      <label><input v-model="outboundRange" @click="search" class="input-tr" type="checkbox" />Display three before and after</label>
                    </div>
                    <table class="mx-auto w-11/12 border border-gray-600 text-sm h-40">
                        <tr>
                            <th class="border-collapse border border-gray-500 p-2">From</th>
                            <th class="border-collapse border border-gray-500 p-2">To</th>
                            <th class="border-collapse border border-gray-500 p-2">Date</th>
                            <th class="border-collapse border border-gray-500 p-2">Time</th>
                            <th class="border-collapse border border-gray-500 p-2">Flight Number(s)</th>
                            <th class="border-collapse border border-gray-500 p-2">Cabin Price</th>
                            <th class="border-collapse border border-gray-500 p-2">Number of Stops</th>
                        </tr>
                        <tr v-for="schedule in schedules" @click="choose(schedule.id)" :style="getStyle(schedule)">
                            <td class="border-collapse border  border-gray-500 p-2">{{ schedule.route.departure_airport.iata_code }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ schedule.route.arrival_airport.iata_code }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ getFullDate(schedule.date) }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ getTimeFromTimestamp(schedule.time) }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ schedule.flight_number }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ schedule.economy_price }}$</td>
                            <td class="border-collapse border  border-gray-500 p-2">0</td>
                        </tr>
                    </table>
                </fieldset>
                <fieldset v-if="isReturn">
                    <div class="d-flex justify-between mb-2">
                      <legend>Return Flight Details</legend>
                      <label><input v-model="returnDateRange" @click="search" class="input-tr" type="checkbox" />Display three before and after</label>
                    </div>
                    <table class="mx-auto w-11/12  border-gray-600 text-sm h-40 border-collapse border  border-gray-500 p-2" border="1">
                        <tr>
                            <th class="border-collapse border  border-gray-500 p-2">From</th>
                            <th class="border-collapse border  border-gray-500 p-2">To</th>
                            <th class="border-collapse border  border-gray-500 p-2">Date</th>
                            <th class="border-collapse border  border-gray-500 p-2">Time</th>
                            <th class="border-collapse border  border-gray-500 p-2">Flight Number(s)</th>
                            <th class="border-collapse border  border-gray-500 p-2">Cabin Price</th>
                            <th class="border-collapse border  border-gray-500 p-2">Number of Stops</th>
                        </tr>
                        <tr v-for="schedule in returnSchedules" @click="chooseReturn(schedule.id)" :style="getStyle(schedule, true)">
                            <td class="border-collapse border  border-gray-500 p-2">{{ schedule.route.departure_airport.iata_code }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ schedule.route.arrival_airport.iata_code }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ getFullDate(schedule.date) }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ getTimeFromTimestamp(schedule.time) }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ schedule.flight_number }}</td>
                            <td class="border-collapse border  border-gray-500 p-2">{{ schedule.economy_price }}$</td>
                            <td class="border-collapse border  border-gray-500 p-2">0</td>
                        </tr>
                    </table>
                </fieldset>
                <fieldset class="form__footer w-2/4 mx-auto justify-between">
                    <legend>Confirm booking for</legend>
                    <label><input type="number">Passengers</label>
                    <router-link to="/booking">
                      <el-button @click="book" class="border-orange" style="" >Book Flight</el-button>
                    </router-link>
                </fieldset>
            </form>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { store } from '@/store'
import axiosInstance from '@/http'

const airports = computed(() => store.state.airports)
const cabinTypes = computed(() => store.state.cabinTypes)
const schedules = computed(() => store.state.schedules)
const returnSchedules = computed(() => store.state.returnSchedules)

export default {
  setup() {
    const checked = ref('');
    onMounted(() => {
      axiosInstance
        .get('airports/')
        .then((res) => {
          store.commit('setAirports', res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      axiosInstance
        .get('cabin_types/')
        .then((res) => {
          store.commit('setCabinTypes', res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
    return { checked };
  },
  data() {
    return {
      selected: '',
      selectedReturn: '',
      departureAirport: '',
      arrivalAirport: '',
      cabinType: 'economy',
      outbound: '',
      outboundRange: false,
      returnDate: '',
      returnDateRange: false,
      isReturn: false,
      airports: airports,
      cabinTypes: cabinTypes,
      schedules: schedules,
      returnSchedules: returnSchedules,
    }
  },
  methods: {
    search() {
      axiosInstance
        .get('schedules/', {
          params: {
            departure: this.departureAirport ? this.departureAirport : null,
            arrival: this.arrivalAirport ? this.arrivalAirport : null,
            date: this.outbound ? this.outbound : null,
            date_range: this.outboundRange ? this.outboundRange : null
          }
        })
        .then((res) => {
          if (this.cabinType === 'first') {
            res.data.forEach(schedule => {
              schedule.economy_price = Math.floor(schedule.economy_price * 1.35 * 1.3)
            });
          } else if (this.cabinType === 'business') {
            res.data.forEach(schedule => {
              schedule.economy_price = Math.floor(schedule.economy_price * 1.35)
            });
          }
          store.commit('setSchedules', res.data)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      if (this.isReturn) {
        axiosInstance
          .get('schedules/', {
            params: {
              arrival: this.departureAirport ? this.departureAirport : null,
              departure: this.arrivalAirport ? this.arrivalAirport : null,
              date: this.returnDate ? this.returnDate : null,
              date_range: this.returnDateRange ? this.returnDateRange : null
            }
          })
          .then((res) => {
            if (this.cabinType === 'first') {
              res.data.forEach(schedule => {
                schedule.economy_price = Math.floor(schedule.economy_price * 1.35 * 1.3)
              });
            } else if (this.cabinType === 'business') {
              res.data.forEach(schedule => {
                schedule.economy_price = Math.floor(schedule.economy_price * 1.35)
              });
            }
            store.commit('setReturnSchedules', res.data)
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
        } else {
          store.commit('setReturnSchedules', [])
        }
      this.selected = ''
      this.selectedReturn = ''
    },
    getFullDate(date) {
      date = new Date(date)
      let month = date.getMonth() + 1
      if (month < 10) {
        month = '0' + month;
      }
      let day = date.getDate()
      if (day < 10) {
        day = '0' + day;
      }
      let year = date.getFullYear()
      return `${month}/${day}/${year}`
    },
    getTimeFromTimestamp(time) {
      return `${time.slice(0, -3)}`
    },  
    setIsReturn(bool) {
      if (Boolean(bool) === false) {
        this.selectedReturn = ''
      }
      this.isReturn = Boolean(bool)
    },
    choose(id) {
      this.selected = id
    },
    chooseReturn(id) {
      this.selectedReturn = id
    },
    getStyle(schedule, isReturn=false) {
      if (isReturn) {
        if (schedule.id === this.selectedReturn) {
          return {'background': 'lightgrey'}
        }
      }
      if (schedule.id === this.selected) {
        return {'background': 'lightgrey'}
      }
    },
    async book() {
      if (this.selected) {
        await axiosInstance
          .get(`schedules/${this.selected}`)
          .then(res => {
            console.log(res.data)
            res.data.seat_class = this.cabinType
            store.commit('setBookOut', res.data)
          })
          .catch(err => console.log(err))

        if (this.selectedReturn) {
          await axiosInstance
            .get(`schedules/${this.selectedReturn}`)
            .then(res => {
              console.log(res.data)
              res.data.seat_class = this.cabinType
              store.commit('setBookReturn', res.data)
            })
            .catch(err => console.log(err))
        }

        // window.location.href = '/booking'
      }
    }
  }
}
</script>

<style >
.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form__footer {
    display: flex;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    gap: 10px;
}

.select-section {
    display: flex;
    justify-content: space-between;
}

.form__header {

    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;


    display: flex;
    gap: 5px;
    flex-direction: column;
}

.tvbv {
    width: 100%;
    margin-top: 10px;
}

.button-section {
    display: flex;
    justify-content: space-between;
}
</style>