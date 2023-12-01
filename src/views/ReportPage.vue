<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-b-blue border-b p-2">
            <p class=" text-sm text-blue" >Amenities Report</p>
            <router-link to="/logout"><img src="close.svg" alt=""></router-link>
        </div>
        <van-form class="p-2 flex " @submit="submit">
            <van-cell-group inset class="w-xl">
                
                <van-field class="w-50" style=""
                v-model="flight_id"
                name="flight_id"
                label="FlightID:"
                placeholder=""
                
                /> 
                <div class="flex">
                    <div class="text-sm flex  gap-2 m-4 ">
                            <p>from:</p>
                            <el-date-picker 
                            class="border-blue"
                            v-model="from"
                            type="date"
                            placeholder="Pick a Date"
                            format="YYYY/MM/DD"
                            value-format="YYYY-MM-DD"
                            />

                    </div> 
                    <div class="text-sm flex  gap-2 m-4 ">
                            <p>to:</p>
                            <el-date-picker 
                            class="border-blue"
                            v-model="to"
                            type="date"
                            placeholder="Pick a Date"
                            format="YYYY/MM/DD"
                            value-format="YYYY-MM-DD"
                            />

                    </div>
                </div> 
                </van-cell-group>
                <div class="flex justify-center items-end gap-5 m-4" >
                    <el-button @click="makeReport" type="primary" style="width: 200px" >Make Report</el-button>
                </div>

        </van-form>
        <table class=" mx-auto w-11/12 border border-gray-600 ">
            <thead> <!-- Заголовок таблицы -->
            <tr class="text-xs"> 
                <th class=" border  border-gray-500 p-2 w-2/12">Amenities</th>
                <th class="border-collapse border  border-gray-500 p-2 w-2/12">Wi-Fi 250 MB</th>
                <th class="border-collapse border  border-gray-500 p-2 w-2/12">Extra Bag</th>
                <th class="border-collapse border  border-gray-500 p-2  w-2/12">ext Seat Free</th>
                <th class="border-collapse border  border-gray-500 p-2 w-2/12">Laptop Rental</th>
            </tr>
            </thead>
            <tbody class="text-xs"> <!-- Заполнение таблицы -->
                <tr v-for="cabin in cabins" :key="cabin.name">
                    <td class=" border-collapse border p-2 ">{{ cabin.name }}</td> <!-- Номер строки -->
                    <td class="border-collapse border  p-2">{{ cabin.wifi }}</td> 
                    <td class="border-collapse border  p-2">{{ cabin.bag }}</td> 
                    <td class="border-collapse border  p-2">{{ cabin.seats }}</td> 
                    <td class="border-collapse border  p-2">{{ cabin.laptop }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axiosInstance from '@/http'

export default {
  data() {
    return {
      flight_id: '',
      from: '',
      to: '',
      cabins: []
    }
  },
  async created() {
  },
  methods: {
    async makeReport() {
      this.cabins = []
      let amentityTickets = []
      await axiosInstance
        .get(`amentity-tickets/`, {
          params: {
            flight_id: this.flight_id ? this.flight_id : null,
            from_date: this.from ? this.from : null,
            to_date: this.to ? this.to : null,
          }
        })
        .then(res => amentityTickets = res.data)
        .catch(err => console.log(err))
      console.log(amentityTickets)
      let economyTickets = amentityTickets.filter(ticket => ticket.ticket.cabin_type.name === 'Economy')
      let businessTickets = amentityTickets.filter(ticket => ticket.ticket.cabin_type.name === 'Business')
      let firstTickets = amentityTickets.filter(ticket => ticket.ticket.cabin_type.name === 'First')
      this.cabins.push({
        name: 'Economy',
        wifi: economyTickets.filter(ticket => ticket.amentity.service === 'Wi-Fi 250 MB').length,
        bag: economyTickets.filter(ticket => ticket.amentity.service === 'Extra Bag').length,
        seats: economyTickets.filter(ticket => ticket.amentity.service === 'Next Seat Free').length,
        laptop: economyTickets.filter(ticket => ticket.amentity.service === 'Laptop Rental').length,
      })
      this.cabins.push({
        name: 'Business',
        wifi: businessTickets.filter(ticket => ticket.amentity.service === 'Wi-Fi 250 MB').length,
        bag: businessTickets.filter(ticket => ticket.amentity.service === 'Extra Bag').length,
        seats: businessTickets.filter(ticket => ticket.amentity.service === 'Next Seat Free').length,
        laptop: businessTickets.filter(ticket => ticket.amentity.service === 'Laptop Rental').length,
      })
      this.cabins.push({
        name: 'First',
        wifi: firstTickets.filter(ticket => ticket.amentity.service === 'Wi-Fi 250 MB').length,
        bag: firstTickets.filter(ticket => ticket.amentity.service === 'Extra Bag').length,
        seats: firstTickets.filter(ticket => ticket.amentity.service === 'Next Seat Free').length,
        laptop: firstTickets.filter(ticket => ticket.amentity.service === 'Laptop Rental').length,
      })
    }
  }
}
</script>