<template>
 <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-b-blue border-b p-2">
            <p class=" text-sm text-blue" >Flight Satisfaction Survey Reports</p>
            <router-link to="/logout"><img src="close.svg" alt=""></router-link>
        </div>
        <div class="flex justify-start gap-2  p-2">
            <router-link to="/summary-report" class="block  text-sm text-cyan-700">View Results Summary</router-link>
            <router-link to="/flight-satisfaction-survey-report" class="block  text-sm text-cyan-700" >View Detailed Results</router-link>
            <router-link to="/" class="block  text-sm text-cyan-700" >Exit</router-link>
        </div> 
      <div class="flex flex-col mx-auto my-4 p-4 rounded-md w-fit gap-2">
        <div class="flex flex-row justify-between font-bold">
          <p>Field work June 2017 - October 2017</p>
          <p>Sample Size: 1727 Adults</p>
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
export default {
  data() {
    return {
      mockData: {
        columns: [
          {
            title: 'Gender',
            subColumns: [
              { title: 'Male', value: 839 },
              { title: 'Female', value: 888 }
            ]
          },
          {
            title: 'Age',
            subColumns: [
              { title: '18-24', value: 209 },
              { title: '25-39', value: 440 },
              { title: '60+', value: 487 }
            ]
          },
          {
            title: 'Cabin type',
            subColumns: [
              { title: 'Economy', value: 984 },
              { title: 'Business', value: 372 },
              { title: 'First', value: 300 }
            ]
          },
          {
            title: 'Destination Airport',
            subColumns: [
              { title: 'AUH', value: 221 },
              { title: 'BAH', value: 561 },
              { title: 'DOH', value: 370 },
              { title: 'RYU', value: 425 },
              { title: 'CAI', value: 150 }
            ]
          }
        ]
      }
    }
  }
}
</script>
