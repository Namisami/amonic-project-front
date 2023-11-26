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
          readonly=""
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
          readonly
      />
        <div class="text-sm flex justify-start gap-8 px-4 py-4" >
          <p>Role</p>
          <van-radio-group v-model="checked">
            <van-radio class="pb-2" v-for="role in roles" :name="role.url">{{role.title}}</van-radio>
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
import { onMounted, computed } from 'vue';
import { store } from '@/store'
import { allowMultipleToast, closeToast, showLoadingToast, showNotify } from 'vant'
import axiosInstance from '@/http'

const user = computed(() => store.state.user )
const roles = computed(() => store.state.roles )

export default {
  setup() {
    onMounted(() => {
      allowMultipleToast()
      closeToast(true)
      const loadingToast = showLoadingToast({
        forbidClick: true,
        duration: 0,
        message: 'Загрузка...'
      })
      axiosInstance
        .get(`roles/`)
        .then((res) => {
          console.log(res.data)
          store.commit('setRoles', res.data)
        })
        .catch(() => {
          console.log('12312312312')
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        })
    })
  },
data: () => ({
    user: user.value,
    first_name: user.value.first_name,
    last_name: user.value.last_name,
    selected:'',
    checked:'',
    office: user.value.office.title,
    email: user.value.email,
    selectedUser:'',
    roles: roles,
  }),
  props: {
    source: String
  },
  methods:{
    submit(userId){
      this.selectedUser = userId 
      console.log(this.selectedUser)
      console.log(this.checked)
      allowMultipleToast()
      closeToast(true)
      const loadingToast = showLoadingToast({
        forbidClick: true,
        duration: 0,
        message: 'Загрузка...'
      })
      axiosInstance
        .patch(`users/${this.selectedUser}/`, {
          role: this.checked
        })
        .then((res) => {
          console.log(res.data)
          // this.user = res.data
          store.commit('setUser', res.data)
        })
        .catch((err) => {
          console.log(err)
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
