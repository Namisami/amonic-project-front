<template>
 <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-b-blue border-b p-2">
            <p class=" text-sm text-blue" >Flight Satisfaction Survey Reports</p>
            <router-link to="/logout"><img src="close.svg" alt=""></router-link>
        </div>
        <div class="flex justify-start gap-2  p-2">
            <router-link to="/report" class="block  text-sm text-cyan-700">View Results Summary</router-link>
            <router-link to="/surveyreport" class="block  text-sm text-cyan-700" >View Detailed Results</router-link>
            <router-link to="/" class="block  text-sm text-cyan-700" >Exit</router-link>
        </div> 
      <div class="flex flex-col mx-auto my-4 p-4 rounded-md w-fit gap-2">
        <div class="flex flex-row justify-between font-bold">
          <p>Field work June 2017 - October 2017</p>
          <p>Sample Size: {{ mockData.columns[0].subColumns[0].value + mockData.columns[0].subColumns[1].value }} Adults</p>
        </div>
        <div class="w-full border-b !border-black" />
        <div class="font-sans flex border !border-black flex-row mx-auto">
          <div
            class="flex flex-col !border-black text-center"
            v-for="(column, index) in mockData.columns"
            :class="index !== 0 ? 'border-l' : ''"
            :key="column.title"
          >
            <p class="font-bold border-b !border-black">
              {{ column.title }}
            </p>
            <div class="flex flex-row">
              <div
                v-for="(subColumn, index) in column.subColumns"
                class="flex flex-column"
                :key="subColumn.title"
              >
                <div class="px-2 !border-black font-bold" :class="index !== 0 ? 'border-l' : ''">
                  {{ subColumn.title }}
                </div>
                <div class="px-2 !border-black border-t" :class="index !== 0 ? 'border-l' : ''">
                  {{ subColumn.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import axiosInstance from '@/http'

export default {
  data() {
    return {
      mockData: {
        columns: [
          {
            title: 'Gender',
            subColumns: [
              { title: 'Male', value: 0 },
              { title: 'Female', value: 0 }
            ]
          },
          {
            title: 'Age',
            subColumns: [
              { title: '18-24', value: 0 },
              { title: '25-39', value: 0 },
              { title: '40-59', value: 0 },
              { title: '60+', value: 0 }
            ]
          },
          {
            title: 'Cabin type',
            subColumns: [
              { title: 'Economy', value: 0 },
              { title: 'Business', value: 0 },
              { title: 'First', value: 0 }
            ]
          },
          {
            title: 'Destination Airport',
            subColumns: [
              { title: 'AUH', value: 0 },
              { title: 'BAH', value: 0 },
              { title: 'DOH', value: 0 },
              { title: 'RYU', value: 0 },
              { title: 'CAI', value: 0 }
            ]
          }
        ]
      }
    }
  },
  async created() {
    await axiosInstance
      .get('surveys/stats/')
      .then(res => {
        this.mockData.columns[0].subColumns[0].value = res.data.male_count
        this.mockData.columns[0].subColumns[1].value = res.data.female_count
        this.mockData.columns[1].subColumns[0].value = res.data.age_18_24
        this.mockData.columns[1].subColumns[1].value = res.data.age_25_39
        this.mockData.columns[1].subColumns[2].value = res.data.age_40_59
        this.mockData.columns[1].subColumns[3].value = res.data.age_60
        this.mockData.columns[2].subColumns[0].value = res.data.economy
        this.mockData.columns[2].subColumns[1].value = res.data.business
        this.mockData.columns[2].subColumns[2].value = res.data.first
        this.mockData.columns[3].subColumns[0].value = res.data.auh
        this.mockData.columns[3].subColumns[1].value = res.data.bah
        this.mockData.columns[3].subColumns[2].value = res.data.doh
        this.mockData.columns[3].subColumns[3].value = res.data.ryu
        this.mockData.columns[3].subColumns[4].value = res.data.cai
      })
      .catch(err => console.log(err))
  }
}
</script>
