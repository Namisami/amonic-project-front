<template>
  <form class="flex flex-col border mx-auto my-4 p-4 w-fit gap-3">
    <div class="flex items-center gap-3">
      <label
        >Booking reference:
        <input v-model="bookingReference" type="text" class="border" />
      </label>
      <el-button @click="bookingSearch">OK</el-button>
    </div>
    <fieldset class="border p-3">
      <legend>Flight list</legend>

      <div class="flex items-center gap-3">
        <label
          >Choose your flights:
          <select class="border">
            <option v-if="Object.keys(booking).length <= 2" value="">Choose your flight</option>
            <option v-if="Object.keys(booking).length > 2" value="1" selected>{{ booking.schedule?.flight_number }}, {{ booking.schedule?.route.departure_airport.iata_code }}-{{ booking.schedule?.route.arrival_airport.iata_code }}, {{ booking.schedule?.date }}, {{ booking.schedule?.time }}</option>
          </select>
        </label>
        <el-button>Show Amenities</el-button>
      </div>
    </fieldset>

    <div class="flex items-center gap-3">
      <label>
        Full name:
        <input type="text" class="border" :value="booking.first_name + ' ' + booking.last_name" />
      </label>
      <label>
        Passport number:
        <input type="text" class="border" :value="booking.passport_number" />
      </label>
    </div>

    <div class="flex items-center gap-3">
      <label
        >Your cabin is:
        <input type="text" class="border" :value="booking.cabin_type?.name" />
      </label>
    </div>

    <fieldset class="border flex gap-[100px] p-3">
      <legend>AMONIC Airlines Amenities</legend>

      <div class="flex flex-col gap-2 pl-[20px]">
        <label>
          <input type="checkbox" checked disabled />
          Soft drinks (Free)
        </label>
        <label>
          <input type="checkbox" checked disabled />
          Wi-Fi 50 MB (Free)
        </label>
        <label v-for="amentity in amentities">
          <input @change="selectAmentity(amentity)" type="checkbox" />
            {{ amentity.service }} (${{ amentity.price }})
        </label>
      </div>
    </fieldset>

    <div class="flex justify-between items-center w-full">
      <div class="flex flex-col w-[180px]">
        <div class="flex justify-between">
          <p class="grow">Items selected:</p>
          <p>${{ totalPrice }}</p>
        </div>
        <div class="flex justify-between">
          <p class="grow">Duties and taxes:</p>
          <p>$0</p>
        </div>
        <div class="flex justify-between">
          <p class="grow">Total payable:</p>
          <p>${{ totalPrice }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-2 w-[200px]">
        <el-button @click="buyAmentities" class="w-full">Save and Confirm</el-button>
        <el-button class="w-full ml-0">Exit</el-button>
      </div>
    </div>
  </form>
</template>
<script>
import axiosInstance from '@/http'

export default {
  data() {
    return {
      booking: {
        first_name: '',
        last_name: ''
      },
      bookingReference: '',
      amentities: [],
      selected: {},
      totalPrice: 0
    }
  },
  async created() {
    await axiosInstance
      .get('amentities/')
      .then(res => this.amentities = res.data)
      .catch(err => console.log(err))
  },
  methods: {
    async bookingSearch() {
      await axiosInstance
        .get('tickets/')
        .then(res => {
          this.booking = res.data.find(ticket => ticket.booking_reference = this.bookingReference)
        })
    },
    selectAmentity(amentity) {
      this.selected[amentity.id] = {
        'name': amentity.service,
        'price': amentity.price,
        'url': amentity.url,
        'checked': this.selected[amentity.id] ? !this.selected[amentity.id].checked : true
      }
      let total = 0
      for (let amentity in this.selected) {
        console.log(this.selected[amentity])
        if (this.selected[amentity].checked) {
          total += this.selected[amentity].price
        }
      }
      this.totalPrice = total
    },
    async buyAmentities() {
      const arraySelected = Object.entries(this.selected)
      let selectedAmentites = arraySelected.filter(([key, value]) => value.checked === true)
      const selectedAmentitiesObj = Object.fromEntries(selectedAmentites)
      console.log(selectedAmentitiesObj)
      for (let amentity in selectedAmentitiesObj) {
        console.log(amentity)
        await axiosInstance
          .post('amentity-tickets/', {
            'amentity': selectedAmentitiesObj[amentity].url,
            'ticket': this.booking.url,
            'price': selectedAmentitiesObj[amentity].price
          })
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
      }
    }
  },
}
</script>
