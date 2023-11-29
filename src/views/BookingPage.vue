<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4" style="">
        <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
            <p class="text-sm text-blue" >Booking Confirmation</p>
            <img src="close.svg" alt="">
        </div>
        <form class="form mx-6" method="#">
            <fieldset class="form__info text-sm flex justify-between gap-2">
                <legend class="form__legend">Outbound Flight Details</legend>
                <p>From: {{ bookOut?.route?.departure_airport.iata_code }}</p>
                <p>To: {{ bookOut?.route?.arrival_airport.iata_code }}</p>
                <p>Cabin type: {{ bookOut?.seat_class?.charAt(0).toUpperCase()  + bookOut?.seat_class?.slice(1) }}</p>
                <p>Date: {{ bookOut?.date }}</p>
                <p>Flight Number: {{ bookOut?.flight_number }}</p>
            </fieldset>
            
            <fieldset v-if="bookReturn" class="form__info text-sm flex justify-between gap-2">
                <legend class="form__legend">Return Flight Details</legend>
                <p>From: {{ bookReturn?.route?.departure_airport.iata_code }}</p>
                <p>To: {{ bookReturn?.route?.arrival_airport.iata_code }}</p>
                <p>Cabin type: {{ bookReturn?.seat_class?.charAt(0).toUpperCase()  + bookReturn?.seat_class?.slice(1) }}</p>
                <p>Date: {{ bookReturn?.date }}</p>
                <p>Flight Number: {{ bookReturn?.flight_number }}</p>
            </fieldset>
            
            <fieldset class="form__fieldset text-sm mx-auto">
              <legend class="form__legend">Passenger Details</legend>
              <div>
                <label class="form__label" for="firstname">First Name:</label>
                <input v-model="firstName" class="form__input" type="text" id="firstname" name="firstname"><br><br>
              </div>
              <div class="">
                <label class="form__label" for="lastname">Last Name:</label>
                <input v-model="lastName" class="form__input" type="text" id="lastname" name="lastname"><br><br>
              </div>
              <div>
                <label class="form__label" for="birthdate">Birthdate:</label>
                <input v-model="birthDate" class="form__input" type="date" id="birthdate" name="birthdate"><br><br>
              </div>
              <div>
                <label class="form__label" for="passport">Passport Number:</label>
                <input v-model="passportNum" class="form__input" type="text" id="passport" name="passport"><br><br>
              </div>
              <div>
                <label class="form__label" for="passport-country">Passport Country:</label>
                <input v-model="country" class="form__input" type="text" id="passport-country" name="passport-country"><br><br>
              </div>
              <div>
                <label class="form__label" for="phone">Phone:</label>
                <input v-model="phone" class="form__input" type="tel" id="phone" name="phone"><br><br>
              </div>
              <button @click="addTicket" class="form__button" id="add-passenger">Add Passenger</button>
            </fieldset>
        </form>
        <div class="form__footer passenger-list mx-6 py-4">
            <h2 class="form__heading text-sm py-2">Passenger List</h2>
            <table class="form__table mx-auto w-11/12 border border-gray-600 text-sm h-40">
                <thead>
                    <tr>
                        <th class="border-collapse border border-gray-500 p-2" >First Name</th>
                        <th class="border-collapse border border-gray-500 p-2 ">Last Name</th>
                        <th class="border-collapse border border-gray-500 p-2 ">Birthdate</th>
                        <th class="border-collapse border border-gray-500 p-2">Passport Number</th>
                        <th class="border-collapse border border-gray-500 p-2 w-2/12">Passport Country</th>
                        <th class="border-collapse border border-gray-500 p-2 w-2/12">Phone</th>
                    </tr>
                </thead>
                <tbody id="form__body-table">
                    <tr v-for="ticket in tickets" :key="ticket.id" @click="selected=ticket.id" :style="getStyle(ticket)"> 
                        <td class="h-4">{{ticket.first_name}}</td>
                        <td>{{ticket.last_name}}</td>
                        <td>{{ticket.birthdate}}</td>
                        <td>{{ticket.passport_number}}</td>
                        <td>{{ticket.passport_country}}</td>
                        <td>{{ticket.phone}}</td>
                    </tr>
                    <tr>
                        <td class="border-collapse border p-2 "></td> <!-- Номер строки -->
                        <td class="border-collapse border  p-2"> </td> 
                        <td class="border-collapse border  p-2"></td> 
                        <td class="border-collapse border  p-2"></td> 
                        <td class="border-collapse border  p-2"></td>
                        <td class="border-collapse border  p-2"></td> 
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end gap-5 mx-10 my-4 p-2" >
            <el-button @click="removeTicket" class="border-orange" style="width: 200px" >Remove passender</el-button>
        </div>
        <div class="flex justify-center gap-5 mx-10 my-4" >
            <el-button type="info" class="border-orange" style="width: 200px" >Back to Search for Flights</el-button>
            <router-link to="/billing">
              <el-button @click="buy" type="primary" style="width: 200px">Confirm Booking</el-button>
            </router-link>
        </div>
    </div>
</template>
<script>
import { onMounted, computed } from 'vue';
import { store } from '@/store'
import axiosInstance from '@/http'

const bookOut = computed(() => store.state.bookOut)
const bookReturn = computed(() => store.state.bookReturn)
const user = computed(() => store.state.user)

console.log(bookOut)

export default {
  setup() {
    onMounted(() => {
      axiosInstance
        .get(`users/${window.localStorage.getItem('userId')}/`)
        .then(res => store.commit('setUser', res.data))
        .catch(err => console.log(err))
      })
    },
  data() {
    return {
      selected: '',
      bookOut: bookOut,
      bookReturn: bookReturn,
      tickets: [],
      firstName: '',
      lastName: '',
      birthDate: '',
      passportNum: '',
      country: '',
      phone: '',
      cabinType: '',
      countryPost: '',
    }
  },
  methods: {
    addTicket(e) {
      e.preventDefault()
      this.tickets.push({
        id: this.tickets.length,
        first_name: this.firstName,
        last_name: this.lastName,
        birthdate: this.birthDate,
        passport_number: this.passportNum,
        passport_country: this.country,
        phone: this.phone,
      })
    },
    getStyle(ticket) {
      if (ticket.id === this.selected) {
        return {'background': 'lightgrey'}
      }
    },
    removeTicket() {
      if (this.selected !== '') {
        this.selected = ''
        this.tickets.splice(this.selected, 1)
        this.tickets.forEach((ticket, index) => {
          console.log(ticket)
          ticket.id = index
        })
      }
    },
    buy() {
      let ticketsList = []
      this.tickets.forEach(async (ticket) => {
        await axiosInstance
          .get(`cabin_types?name=${this.bookOut.seat_class}`)
          .then(res => this.cabinType = res.data[0])
          .catch(err => console.log(err))
        await axiosInstance
          .get(`countries?name=${ticket.passport_country}`)
          .then(res => this.countryPost = res.data[0])
          .catch(err => console.log(err))
        let body = {
            user: user.value.url,
            schedule: this.bookOut.url,
            cabin_type: this.cabinType.url,
            first_name: ticket.first_name,
            last_name: ticket.last_name,
            email: user.value.email,
            phone: ticket.phone,
            passport_number: ticket.passport_number,
            passport_country: this.countryPost.url,
            booking_reference: `${Date.now()}`,
            confirmed: false,
          }
        await axiosInstance
          .post('tickets/', body)
          .then(res => {
            console.log(res.data)
            ticketsList.push(res.data)
          })
          .catch(err => console.log(err))
        let bodyReturn = {
            user: user.value.url,
            schedule: this.bookReturn.url,
            cabin_type: this.cabinType.url,
            first_name: ticket.first_name,
            last_name: ticket.last_name,
            email: user.value.email,
            phone: ticket.phone,
            passport_number: ticket.passport_number,
            passport_country: this.countryPost.url,
            booking_reference: `${Date.now()}`,
            confirmed: false,
          }
        await axiosInstance
          .post('tickets/', bodyReturn)
          .then(res => {
            console.log(res.data)
            ticketsList.push(res.data)
          })
          .catch(err => console.log(err))
        })
      console.log(ticketsList)
      store.commit('setTickets', ticketsList)
    },
  }
}
</script>

<style>
.form__info {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
.form__fieldset {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form__legend {
    font-size: 14px;
}

.form__label {
    font-size: 14px;
}

.form__input {
    max-width: 50%;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
    border: 1px solid black;
    margin-left: 0.5em;
}

.form__button {
    background-color: #007BFF !important;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 2px 7px;
    cursor: pointer;
    margin: 0 auto;
}


.form__heading {
    font-size: 1.2em;
}

.form__table {
    border-collapse: collapse;
    width: 100%;
}

.form__table th, .form__table td {
    border: 1px solid #ccc;
    text-align: center;
}

.button-back {
    background-color: #ccc;
}

.form__button-container {
    display: flex;
    justify-content: space-between;
}
</style>

