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

      <van-form @submit="getUsers">
        <div class="mt-5 mx-4">
          <van-button round block type="primary" native-type="submit">Получить</van-button>
        </div>
      </van-form>

      <div v-if="users.length > 0">
        {{ users }}
      </div>
    </div>
  </main>
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
    submit() {
      const loadingToast = showLoadingToast({
        forbidClick: true,
        duration: 0,
        message: 'Загрузка...'
      })
      axios
        .post(`${API_URL}/token/`, {
          email: this.email,
          password: this.password
        })
        .then((res) => {
          window.localStorage.setItem('access_token', res.data.access)
          window.localStorage.setItem('refresh_token', res.data.refresh)
          store.commit('setIsAuthenticated', Boolean(res.data.access))
        })
        .catch(() => {
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
          loadingToast.close()
        })
    },
    getUsers() {
      allowMultipleToast()
      closeToast(true)
      const loadingToast = showLoadingToast({
        forbidClick: true,
        duration: 0,
        message: 'Загрузка...'
      })
      axiosInstance
        .get('users/')
        .then((res) => {
          store.commit('setUsers', res.data)
        })
        .catch(() => {
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
          loadingToast.close()
        })
    }
  }
}
</script>
