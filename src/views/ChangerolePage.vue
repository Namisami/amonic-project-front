<template>
<div @focus='ff' class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl" style="">
    <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
      <p class="text-sm text-blue" >Edit Role</p>
      <router-link to="/system"><img src="close.svg" alt=""></router-link>
    </div> 
    <van-form  class="p-2" @submit="submit">
      <van-cell-group inset class="w-xl">
        <van-field style=""
          v-model="email"
          type="email"
          name="email"
          label="Email Address" 
          readonly />
        <van-field style=""
          v-model="first_name"
          name="firstname"
          label="First Name"
        />
        <van-field style=""
          v-model="last_name"
          name="lastname"
          label="Last Name"
          
          readonly
        />
        <van-field style=""
          v-model="office"
          name="lastname"
          label="Office"
          
      />
        <div class="text-sm flex justify-start gap-8 px-4 py-4" >
          <p>Role</p>
           <van-radio-group  v-model="checked">
              <van-radio class="pb-4" name="administrator">{{user.role}}</van-radio>
              <van-radio name="user">{{user.role}}</van-radio>
          </van-radio-group>
        </div>           
      </van-cell-group>
        <div class="flex justify-center gap-5 m-6" >
          <el-button @click="submit(user.id)" style="width: 200px" >Apply</el-button>
          <el-button style="width: 200px" type="danger" ><router-link to="/system">Cancel</router-link></el-button>
        </div>
  </van-form>
</div>       
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { store } from '@/store'
import axiosInstance, { API_URL } from '@/http'

const user = computed(() => store.state.user )
// console.log('SSSDSSDA', user.value.first_name)

export default {
  // setup() {
  //   onMounted(() => {
  //     console.log('SETUP')
  //     console.log(this.user)
  //     axiosInstance
  //       .get(`users/${user.id}/`, {
         
  //       })
  //       .then((res) => {
  //         console.log(res.data)
  //       })
  //       .catch(() => {
  //         console.log('12312312312')
  //         showNotify({ type: 'danger', message: 'Ошибка' })
  //       })
  //       .finally(() => {
  //           loadingToast.close()
  //       }
  //     )
  //   })
// },
data: () => ({
    user: user.value,
    first_name: user.value.first_name,
    last_name:'',
    selected:'',
    checked:'',
    office:'',
    email: '',
    selectedUser:'',
  }),
  props: {
    source: String
  },
  methods:{
    submit(userId){
      this.selectedUser = userId 
     
      console.log(this.selectedUser)
      console.log(this.checked)
      axiosInstance
        .patch(`users/${this.selectedUser}/`, {
          first_name: this.first_name
        })
        .then((res) => {
          console.log(res.data)
          // this.user = res.data
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
    }
  }
  
  
</script>
