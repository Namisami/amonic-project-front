<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl">
        <div class="flex justify-between border-blue border-b p-2" style="border-color #f79420;">
            <p class="text-sm text-blue" >Login</p>
            <router-link to="/exit"><img src="close.svg" alt=""></router-link>
        </div> 
        <div class="" >
            <img class="block mx-auto p-5" src="logoa.png" alt="">
        </div>
         <van-form class="p-2 max-w-lg mx-auto"  @submit="submit">
            <van-cell-group inset class="w-xl">
                <van-field style=""
                v-model="email"
                name="email"
                label="Email"
                placeholder=""
                :rules="[{ required: true, message: 'UserName is required' }]"
                />
                <van-field
                v-model="password"
                type="password"
                name="Password"
                label="Password"
                placeholder="Password"
                :rules="[{ required: true, message: 'Password is required' }]"
                />
            </van-cell-group>
            <div class="flex justify-center gap-5 m-6" >
                <el-button @click='submit' style="width: 200px" >Login</el-button>
                <router-link to="/exit"><el-button  style="width: 200px" type="danger" >Exit</el-button></router-link>
            </div>
        </van-form>
    </div>
</template>

<script>
import { store } from '@/store'
import { allowMultipleToast, closeToast, showLoadingToast, showNotify } from 'vant'
import axiosInstance, { API_URL } from '@/http'
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      users: store.state.users
    }
  },
  methods: {
    async submit() {
      allowMultipleToast()
      closeToast(true)
      const loadingToast = showLoadingToast({
        forbidClick: true,
        duration: 0,
        message: 'Загрузка...'
      })
      await axiosInstance
        .post(`token/`, {
          email: this.email,
          password: this.password
        })
        .then((res) => {
          window.localStorage.setItem('access_token', res.data.access)
          window.localStorage.setItem('refresh_token', res.data.refresh)
          store.commit('setIsAuthenticated', Boolean(res.data.access))
        })
        .catch((err) => {
          console.log(err)
        })
      await axiosInstance
        .get('users/')
        .then((res) => {
          let users = res.data
          let user = users.find(user => user.email === this.email)
          window.localStorage.setItem('userId', user.id)
          if (window.localStorage.getItem('error')) {
            window.location.href = 'logout'
            return
          }
          if (user.role.title === 'Administrator') {
            window.location.href = 'system'
            return
          } else {
            window.location.href = 'user'
            return
          }
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          loadingToast.close()
        })
    }
  },
}
</script>
