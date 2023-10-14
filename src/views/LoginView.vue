<script setup>
import axios from 'axios'
</script>

<template>
  <main>
    <form @submit="submit">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="text" v-model="password" placeholder="Пароль" />
      <input type="submit" value="Отправить">
    </form>
    <form @submit="getUsers">
      <input type="submit" value="Получить">
    </form>
    <div v-if="users.length > 0">
      {{ users }}
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      users: [],
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();
      axios
        .post('http://127.0.0.1:8000/api/token/', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          window.localStorage.setItem('access_token', res.data.access)
          window.localStorage.setItem('refresh_token', res.data.refresh)
        })
    },
    getUsers(e) {
      e.preventDefault();
      axios
        .get('http://127.0.0.1:8000/api/users/', {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + window.localStorage.getItem('access_token')
          }
        })
        .then(res => {
          console.log(res)
          this.users = res.data
        })
    }
  }
}</script>