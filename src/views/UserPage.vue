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
                            v-for="item in desserts"
                            :key="item.name"
                        >
                            <td class="border-collapse border p-2 h-4 " >{{ item.date }}</td>
                            <td class="border-collapse border p-2 h-4 " >{{ item.logint }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.logoutt }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.ts }}</td>
                            <td class="border-collapse border p-2 h-4">{{ item.ul }}</td>
                        </tr>
                <tr class=""> <!-- Цикл по строкам -->
                    <td class="border-collapse border p-2 "></td> <!-- Номер строки -->
                    <td class="border-collapse border  p-2"> </td> 
                    <td class="border-collapse border  p-2"></td> 
                    <td class="border-collapse border  p-2"></td> 
                    <td class="border-collapse border  p-2"></td>
                </tr>
            </tbody>
        </table>   
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      step: 1,
        desserts: [
          {
            date: '03/13/2017',
            logint: '17:15',
            logoutt: '18:45',
            ts: '1:30',
            ul: ' ',
          },
          {
            date: '02/13/2017',
            logint: '8:25',
            logoutt: '--',
            ts: '--',
            ul: 'Power outage',
          },
          {
            date: '02/12/2017',
            logint: '8:35',
            logoutt: '18:45',
            ts: '10:10',
            ul: ' ',
          },
          {
            date: '02/11/2017',
            logint: '8:45',
            logoutt: '18:30',
            ts: '9:45',
            ul: ' ',
          },
        ],
    }),
    props: {
      source: String
    }
  };
  </script>
