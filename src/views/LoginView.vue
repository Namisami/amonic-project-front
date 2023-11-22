<template>
  <main class="flex items-center justify-center w-full h-full">
    <div class="bg-slate-100 rounded-xl p-8 max-w-xl">
      <van-form @submit="submit">
        <van-cell-group inset>
          <van-field
            v-model="email"
            name="Email"
            required
            label="Email"
            placeholder="Email"
            :rules="[{ required: true, message: 'Email обязателен' }]"
          />
          <van-field
            v-model="password"
            required
            type="password"
            name="Пароль"
            label="Пароль"
            placeholder="Password"
            :rules="[{ required: true, message: 'Пароль обязателен' }]"
          />
        </van-cell-group>
        <div class="mt-5 mx-4">
          <van-button round block type="primary" native-type="submit">Войти</van-button>
        </div>
      </van-form>
    </div>
  </main>
</template>

<script>
import { store } from '@/store'
import { allowMultipleToast, closeToast, showLoadingToast, showNotify } from 'vant'
import axiosInstance from '@/http'

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
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
      await axiosInstance
        .get('users/')
        .then((res) => {
          let users = res.data
          let user = users.find(user => user.email === this.email)
          window.localStorage.setItem('userId', user.id)
        })
        .catch(() => {
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
          loadingToast.close()
        })
      if (window.localStorage.getItem('error')) {
        window.location.href = 'logout'
      }
    }
  }
}

</script>
