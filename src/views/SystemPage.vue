<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-b-blue border-b p-2">
            <p class=" text-sm text-blue" >AMONIC Airlines Automotion System</p>
            <img src="close.svg" alt="">
        </div>
        <div class="flex justify-start gap-2  p-2">
            <a class="block  text-sm text-cyan-700">Add user</a>
            <a class="block  text-sm text-cyan-700" >Exit</a>
        </div> 
        <div class="flex justify-start gap-2 px-10 py-4">
            <p>Office</p>
            <select class="w-3/12 border" v-model="selected">
                <option value="0">All Offices</option>
                <option v-for="table in tables" :key="table" :table="table" >{{table.office}}</option>
            
            </select>
        </div>
        <table class=" h-96 mx-auto w-11/12 border border-gray-600 ">
            <thead> <!-- Заголовок таблицы -->
            <tr class="text-xs"> 
                <th class=" border  border-gray-500 p-2 w-2/12">Name</th>
                <th class="border-collapse border  border-gray-500 p-2 w-2/12">Last Name</th>
                <th class="border-collapse border  border-gray-500 p-2 w-1/12">Age</th>
                <th class="border-collapse border  border-gray-500 p-2  w-2/12">User Role</th>
                <th class="border-collapse border  border-gray-500 p-2 w-3/12">Email</th>
                <th class="border-collapse border  border-gray-500 p-4 w-2/12">Office</th>
            </tr>
            </thead>
            <tbody class="text-xs"> <!-- Заполнение таблицы -->
                <TableItem  v-for="table in tables" :key="table" :table="table" class="" :style="[table.active ? table.userrole == 'administrator'?{'background': '#adf5a6'}:{'background': '#FFF'}:{'background': '#c96d5b'}]"/>
                <tr class=""> <!-- Цикл по строкам -->
                    <td class="border-collapse border p-2 "></td> <!-- Номер строки -->
                    <td class="border-collapse border  p-2"> </td> 
                    <td class="border-collapse border  p-2"></td> 
                    <td class="border-collapse border  p-2"></td> 
                    <td class="border-collapse border  p-2"></td>
                    <td class="border-collapse border  p-2"></td> 
                </tr>
            </tbody>
        </table>
        <div class="flex justify-start gap-5 mx-10 my-4" >
            <el-button class="border-orange" style="width: 200px" >Change Role</el-button>
            <el-button class="border-orange" style="width: 200px">Enable/Disable Login</el-button>
        </div>

        
        
    </div>
</template>

<script>

import TableItem from '@/components/TableItem.vue'

export default {
    components:{
    TableItem,
  },

   data(){
    return{
        selected: '',
        tables: [
            {nae: 'ddddd', lastname:'ddddd', age: '45', userrole: 'administrator', email: 'ddddd', office: 'fffff', active: true},
            {nae: 'ddddd', lastname:'ddddd', age: '45', userrole: 'office user', email: 'ddddd', office: 'fffff', active: true},
            {nae: 'ddddd', lastname:'ddddd', age: '45', userrole: 'administrator', email: 'ddddd', office: "ff", active: false},
            {nae: 'ddddd', lastname:'ddddd', age: '45', userrole: 'administrator', email: 'ddddd', office: 'ffddsdsff', active: true},
            {nae: 'ddddd', lastname:'ddddd', age: '45', userrole: 'office user', email: 'ddddd', office: 'fffff', active: true},
            {nae: 'ddddd', lastname:'ddddd', age: '45', userrole: 'administrator', email: 'ddddd', office: "fffff", active: false},
        ]
    }
   }
}


</script>
