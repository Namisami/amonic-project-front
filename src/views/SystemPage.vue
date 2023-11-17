<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-b-blue border-b p-2">
            <p class=" text-sm text-blue" >AMONIC Airlines Automotion System</p>
            <router-link to="/logout"><img src="close.svg" alt=""></router-link>
        </div>
        <div class="flex justify-start gap-2  p-2">
            <router-link to="/adduser" class="block  text-sm text-cyan-700">Add user</router-link>
            <router-link to="/" class="block  text-sm text-cyan-700" >Exit</router-link>
        </div> 
        <div class="flex justify-start gap-2 px-10 py-4">
            <p>Office</p>
            <select class="w-3/12 border" v-model="selected">
                <option value="0">All Offices</option>
                <option v-for="office in offices" :key="office.id">
                {{ office.title }}
                </option>
            
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
                <tr @click="choose(user.id)" v-for="user in users" :key="user.id" class="" :style="[user.is_active ? user.role == 'administrator'?{'background': '#adf5a6'}:{'background': '#FFF'}:{'background': '#c96d5b'}]">
                    <td class=" border-collapse border p-2 h-4">{{user.first_name}}</td> <!-- Номер строки -->
                    <td class="border-collapse border  p-2">{{user.last_name}}</td> 
                    <td class="border-collapse border  p-2">{{user.date_of_birth}}</td> 
                    <td class="border-collapse border  p-2">{{user.role ? user.role.title : ''}}</td> 
                    <td class="border-collapse border  p-2">{{user.email}}</td>
                    <td class="border-collapse border  p-2">{{user.office ? user.office.title : ''}}</td>
                </tr>
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
            <router-link to="/edit"><el-button  class="border-orange" style="width: 200px" >Change Role</el-button></router-link>
            <el-button @click="top" class="border-orange" style="width: 200px">Enable/Disable Login</el-button>
        </div>

        
        
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { store } from '@/store'
import axiosInstance, { API_URL } from '@/http'

const users = computed(() => store.state.users )

const offices = computed(() => store.state.offices)

import TableItem from '@/components/TableItem.vue'

export default {
    components:{
    TableItem,
  },
setup() {
    onMounted(() => {
      console.log(13121312)
      axiosInstance
        .get('offices/')
        .then((res) => {
          store.commit('setOffices', res.data)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        })},
      
      ),
    onMounted(() => {
      axiosInstance
        .get('users/')
        .then((res) => {
          store.commit('setUsers', res.data)
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        })

    
  
  },)},
  data() {
    return {
      step: 1,
      first_name: '',
      selected: '',
      offices: offices,
      users: users,
      user:'',
      check:'',
      selectedUser:'',
    }
  },
  props: {
    source: String
  },
  methods:{
    choose(userId) { 
      this.selectedUser = userId 
     
      console.log(this.selectedUser)
      axiosInstance
        .get(`users/${this.selectedUser}/`, {
         
        })
        .then((res) => {
          console.log(res.data)
          this.user = res.data
          store.commit('setUser', res.data)
        })
        .catch(() => {
          console.log('12312312312')
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        }
      )
    },
    top(){
      if (this.user.is_active === true){
        this.check = false
      }
      else{
        this.check = true
      }
      axiosInstance
        .patch(`${this.user.url}`, {
          is_active: `${this.check}`
          

        })
        .then((res) => {
          console.log(res.data)
          
        })
        .catch(() => {
          console.log('12312312312')
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        }
      )
      axiosInstance
        .get('users/')
        .then((res) => {
          store.commit('setUsers', res.data)
          this.users = res.data
        })
        .catch((err) => {
          console.log(err)
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        })
    }
  }}
</script>