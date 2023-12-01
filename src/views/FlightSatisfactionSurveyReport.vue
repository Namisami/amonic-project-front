<template>
 <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue">
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
        <div class="flex flex-row gap-1 justify-end font-bold">
          <p>Time period:</p>
          <select class="font-normal border">
            <option value="october" selected>October 2017</option>
            <option value="december">December 2017</option>
          </select>
        </div>
        <table class="border-collapse">
          <thead>
            <tr>
              <th class="border-none" />
              <th class="border" />
              <th
                class="border"
                :key="column.title"
                v-for="column in mockData.columns"
                :colspan="column.subColumns.length"
              >
                {{ column.title }}
              </th>
            </tr>
            <tr>
              <th class="border-none" />
              <th class="border px-2">Total</th>
              <template v-for="column in mockData.columns">
                <th class="border px-2" v-for="column in column.subColumns" :key="column.title">
                  {{ column.title }}
                </th>
              </template>
            </tr>
          </thead>
          <tbody>
            <template v-for="question in mockData.questions">
              <tr class="font-bold px-2">
                <td class="px-2">{{ question.question }}</td>
                <td colspan="15" class="w-fit">
                  <div class="flex flex-row">
                    <div
                      class="h-[10px]"
                      v-for="variant in Object.keys(colorMap)"
                      :style="{
                        backgroundColor: colorMap[variant],
                        width: `${
                          (question.rows
                            .find((row) => row[0] === variant)
                            .reduce((acc, value, index) => (index === 0 ? 0 : acc + value), 0) /
                            question.rows.reduce(
                              (acc, row) =>
                                acc +
                                row.reduce((acc, value, index) => (index === 0 ? 0 : acc + value), 0),
                              0
                            )) *
                          100
                        }%`
                      }"
                    />
                  </div>
                </td>
              </tr>
              <tr v-for="row in question.rows" class="odd:bg-[#DEE5EF]">
                <td class="text-end px-2">{{ row[0] }}</td>
                <td class="text-center font-bold">
                  {{ row.reduce((acc, value, index) => (index === 0 ? 0 : acc + value), 0) }}
                </td>
                <td v-for="cell in row.slice(1)" class="text-center">{{ cell }}</td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="flex flex-row gap-2 mx-auto">
          <div
            v-for="(variant, index) in mockData.questions[0].rows.length"
            class="flex items-center flex-row gap-1"
          >
            <span
              class="w-4 h-4"
              :style="{ backgroundColor: colorMap[mockData.questions[0].rows[index][0]] }"
            />
            {{ mockData.questions[0].rows[index][0] }}
          </div>
        </div>
        <div class="flex flex-row gap-[100px] mx-auto">
          <div class="flex gap-2">
            <label>
              <input type="checkbox" name="gender" />
              Gender
            </label>
            <select class="border">
              <option value="all" selected>All genders</option>
            </select>
          </div>
          <div class="flex gap-2">
            <label>
              <input type="checkbox" name="gender" />
              Age
            </label>
            <select class="border">
              <option value="all" selected>All ages</option>
            </select>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const questions = [
  'Please rate our aircraft flown on AMONIC Airlines',
  'How would you rate our flight attendants:',
  'How would you rate our inflight entertainment',
  'Please rate the ticket price for the trip you are talikng:'
]

export default {
  data() {
    return {
      colorMap: {
        Outstanding: '#7D8E4B',
        'Very Good': '#C8D3A5',
        Good: '#DBE0C6',
        Adequate: '#DEBBBD',
        'Needs Improvement': '#e8d5d7',
        Poor: '#D1702D',
        'Dont know': '#D7D7D7'
      },
      mockData: {
        columns: [
          {
            title: 'Gender',
            subColumns: [{ title: 'Male' }, { title: 'Female' }]
          },
          {
            title: 'Age',
            subColumns: [
              { title: '18-24' },
              { title: '25-39' },
              { title: '40-59' },
              { title: '60+' }
            ]
          },
          {
            title: 'Cabin type',
            subColumns: [{ title: 'Economy' }, { title: 'Business' }, { title: 'First' }]
          },
          {
            title: 'Destination Airport',
            subColumns: [
              { title: 'AUH' },
              { title: 'BAH' },
              { title: 'DOH' },
              { title: 'RYU' },
              { title: 'CAI' }
            ]
          }
        ],
        questions: questions.map((question) => ({
          question,
          rows: [
            ['Outstanding', ...[...Array(14).fill('')].map(() => randomIntFromInterval(40, 90))],
            ['Very Good', ...[...Array(14).fill('')].map(() => randomIntFromInterval(10, 90))],
            ['Good', ...[...Array(14).fill('')].map(() => randomIntFromInterval(30, 80))],
            ['Adequate', ...[...Array(14).fill('')].map(() => randomIntFromInterval(20, 50))],
            [
              'Needs Improvement',
              ...[...Array(14).fill('')].map(() => randomIntFromInterval(40, 90))
            ],
            ['Poor', ...[...Array(14).fill('')].map(() => randomIntFromInterval(4, 15))],
            ['Dont know', ...[...Array(14).fill('')].map(() => randomIntFromInterval(0, 10))]
          ]
        }))
      }
    }
  }
}
</script>
