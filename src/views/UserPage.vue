<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-blue border-b p-2">
            <p class=" text-sm text-blue" >AMONIC Airlines Automotion System</p>
            <img src="close.svg" alt="">
        </div>
        <div class="flex justify-start gap-2  p-2">
            <a class="block  text-sm text-cyan-700" >Exit</a>
        </div> 
        <p class="text-sm py-4 px-8">Hi Name, Welcome to AMONIC Airlines</p>
        <div class="flex justify-end gap-6 px-12 pt-4 pb-9">
            <p class="text-sm">Time spent on system:<span> 00:19:03</span></p>
            <p class="text-sm">Number of crashes<span> n</span></p>
        </div>
        <table class=" mx-auto h-96 w-11/12 border border-gray-600 ">
            <thead> <!-- Заголовок таблицы -->
            <tr class="text-xs"> 
                <th class="border-collapse border border-gray-500 p-2 w-2/12">Date</th>
                <th class="border-collapse border  border-gray-500 p-2 w-2/12">Login time</th>
                <th class="border-collapse border  border-gray-500 p-2 w-2/12">Logout time</th>
                <th class="border-collapse border  border-gray-500 p-2  w-3/12">Time spent on system</th>
                <th class="border-collapse border  border-gray-500 p-2 w-3/12">Unsuccessful logout reason</th>
            </tr>
            </thead>
            <tbody class="text-xs"> <!-- Заполнение таблицы -->
                <tr
                  v-for="visit in this.visits"
                  :key="visit.id"
                >
                  <td class="border-collapse border p-2 h-4 " >{{ getFullDate(visit.login_time) }}</td>
                  <td class="border-collapse border p-2 h-4 " >{{ getTimeFromTimestamp(visit.login_time) }}</td>
                  <td class="border-collapse border p-2 h-4 ">{{ getTimeFromTimestamp(visit.logout_time) }}</td>
                  <td class="border-collapse border p-2 h-4 ">{{ getOnline(new Date(visit.logout_time) - new Date(visit.login_time)) }}</td>
                  <td class="border-collapse border p-2 h-4">{{ visit.error ? visit.error.description : '' }}</td>
                </tr>
                <tr class=""> <!-- Цикл по строкам -->
                  <td class="border-collapse border p-2 "></td> <!-- Номер строки -->
                  <td class="border-collapse border p-2"> </td> 
                  <td class="border-collapse border p-2"></td> 
                  <td class="border-collapse border p-2"></td> 
                  <td class="border-collapse border p-2"></td>
                </tr>
            </tbody>
        </table>   
    </div>
  </template>
  
  <script>
  import { onMounted, computed } from 'vue';
  import { store } from '@/store'
  import { allowMultipleToast, closeToast, showLoadingToast, showNotify } from 'vant'
  import axiosInstance from '@/http'

  const visits = computed(() => store.state.visits)

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
      .get(`visits/`)
      .then((res) => {
        res.data.forEach(visit => {
          console.log(visit.user.url.split('/').at(-2), window.localStorage.getItem('userId'))
        })
        store.commit('setVisits', res.data.filter(visit => visit.user.url.split('/').at(-2) == window.localStorage.getItem('userId')))
        console.log(res.data.filter(visit => visit.user.url.split('/').at(-2) == window.localStorage.getItem('userId')))
      })
      .catch((err) => {
        console.log(err)
        showNotify({ type: 'danger', message: 'Ошибка' })
      })
      .finally(() => {
        loadingToast.close()
      })
  })
    },
    data() {
      return {
        visits: visits,
        step: 1,
      }
    },
    props: {
      source: String
    },
    methods: {
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
      getTimeFromTimestamp(date) {
        let time = new Date(date)
        let hours = time.getHours()
        if (hours < 10) {
          hours = '0' + hours;
        }
        let minutes = time.getMinutes()
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        return `${hours}:${minutes}`
      },
      getOnline(time) {
        let hours = Math.floor(time / (1000 * 60 * 60))
        if (hours < 10) {
          hours = '0' + hours;
        }  
        let minutes = Math.floor(time / (1000 * 60)) 
        console.log(hours)
        if (minutes > 60) {
          minutes = minutes % 60 
        }
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        return `${hours}:${minutes}`
      },
    }
  };
  </script>
