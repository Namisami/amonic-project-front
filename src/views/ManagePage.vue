<template>
   <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-blue border-b p-2">
            <p class=" text-sm text-blue" >AMONIC Airlines Automotion System</p>
            <img src="close.svg" alt="">
        </div>
                    <v-card-title class="text-sm font-weight-regular justify-space-between txt">
                        Filter by
                    </v-card-title>
                    <v-card class="ml-16 text-sm" width="800" justify="center">
                      <v-form v-model="valid">
                        <v-container>
                          <v-row>
                            <v-col cols="12"
                              md="4">
                              <v-select
                                label="From [Airport list]"
                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas']"
                                variant="outlined"
                              ></v-select>
                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <v-select text-sm
                                label="To [Airport list]"
                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas']"
                                variant="outlined"
                              ></v-select>
                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <v-select
                                label="Sort by [Date time]"
                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas']"
                                variant="outlined"
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                      <v-form v-model="valid">
                        <v-container>
                          <v-row>
                            <v-col cols="12"
                              md="4">
                              <v-text-field
                                v-model="lastname"
                                label="Outbound [dd/mm/yyyy]"
                                variant="outlined"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <v-text-field
                                v-model="lastname"
                                label="Flight number [xxxx]"
                                variant="outlined"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="20"
                              md="4">
                              <el-button class="border-orange" style="width: 200px" >Apply</el-button>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                    </v-card>
                     <table class=" mx-auto h-60 mt-5 w-11/12 border border-gray-600 ">
                        <thead> <!-- Заголовок таблицы -->
                        <tr class="text-xs"> 
                            <th class=" border  border-gray-500 p-2 w-2/12">Name</th>
                            <th class="border-collapse border  border-gray-500 p-2 ">Last Name</th>
                            <th class="border-collapse border  border-gray-500 p-2 ">Age</th>
                            <th class="border-collapse border  border-gray-500 p-2  ">User Role</th>
                            <th class="border-collapse border  border-gray-500 p-2 ">Email</th>
                            <th class="border-collapse border  border-gray-500 p-4 ">Office</th>
                            <th class="border-collapse border  border-gray-500 p-2  ">User Role</th>
                            <th class="border-collapse border  border-gray-500 p-2 ">Email</th>
                            <th class="border-collapse border  border-gray-500 p-4 ">Office</th>
                        </tr>
                        </thead>
                        <tbody class="text-xs"> <!-- Заполнение таблицы -->
                            <tr
                            v-for="item in desserts"
                            :key="item.name"
                        >
                            <td class="border-collapse border p-2 h-4 " >{{ item.date }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.time }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.from }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.to }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.flight }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.aircraft }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.ep }}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.bp}}</td>
                            <td class="border-collapse border p-2 h-4 ">{{ item.fp }}</td>
                        </tr>
                            <tr class=""> <!-- Цикл по строкам -->
                                <td class="border-collapse border p-2 "></td> <!-- Номер строки -->
                                <td class="border-collapse border  p-2"> </td> 
                                <td class="border-collapse border  p-2"></td> 
                                <td class="border-collapse border  p-2"></td> 
                                <td class="border-collapse border  p-2"></td>
                                <td class="border-collapse border  p-2"></td> 
                                <td class="border-collapse border  p-2"></td> 
                                <td class="border-collapse border  p-2"></td>
                                <td class="border-collapse border  p-2"></td> 
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex justify-between gap-5 mx-10 my-4">
                      <div class="flex justify-start gap-5" >
                        <el-button class="border-orange" style="width: 200px" >Cancel Flight</el-button>
                        <el-button class="border-orange" style="width: 200px">Edit Flight</el-button>
                      </div>
                      <el-button class="border-orange" style="width: 200px" >Import Chandes</el-button>
                    </div>
                     

                  
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      step: 1,
        desserts: [
          {
            date: '11/10/2017',
            time: '08:45',
            from: 'IKA',
            to: 'AUH',
            flight: '1908',
            aircraft: '320',
            ep: '$370',
            bp: '$499',
            fp: '$573',
          },
          {
            date: '11/10/2017',
            time: '08:55',
            from: 'AUH',
            to: 'TXL',
            flight: '1121',
            aircraft: '310',
            ep: '$530',
            bp: '$715',
            fp: '$821',
          },
          {
            date: '11/10/2017',
            time: '11:15',
            from: 'ABZ',
            to: 'AUH',
            flight: '936',
            aircraft: '330',
            ep: '$600',
            bp: '$499',
            fp: '$573',
          },
        ],
    }),
    props: {
      source: String
    }
  };
  </script>
