<template>
  <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl" style="">
    <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
      <p class="text-sm text-blue" >Add user</p>
      <img src="close.svg" alt="">
    </div>
      <van-form class="p-2" @submit="submit">
  <van-cell-group inset class="w-xl">
    <van-field style=""
      v-model="email"
      type="email"
      name="email"
      label="Email Address"
      placeholder=""
      :rules="[{ required: true, message: 'Email is required' }]"
    />
    <van-field style=""
      v-model="first_name"
      name="firstname"
      label="First Name"
      placeholder=""
    />
    <van-field style=""
      v-model="last_name"
      name="lastname"
      label="Last Name"
      placeholder=""
      
    />
    <div class="text-sm flex justify-start gap-2 m-4 border-b">
            <p>Office</p>
            <select class="w-11/12 h-8 " v-model="selected">
                <option v-for="office in offices" :key="office.id">
                {{ office.title }}
                </option>
            </select>
    </div> 
    <div class="text-sm flex justify-between  gap-2 m-4 ">
            <p>Birth Date</p>
            <el-date-picker 
              class="border-blue"
              v-model="date"
              type="date"
              placeholder="Pick a Date"
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
            />

    </div> 
    <van-field
      v-model="password"
      type="password"
      name="Password"
      label="Password"
      :rules="[{ required: true, message: 'Password is required' }]"
    />
  </van-cell-group>
  <div class="flex justify-center gap-5 m-6" >
    <el-button @click="submit" style="width: 200px" >Save</el-button>
    <el-button style="width: 200px;background-color:#F56C6C" type="danger" >Cancel</el-button>
  </div>

</van-form>

 </div>
</template
>

<script>

import { ref, onMounted, computed } from 'vue';
import { store } from '@/store'
import axiosInstance, { API_URL } from '@/http'


const offices = computed(() => store.state.offices)

export default {
    components:{
  },
setup() {
    const checked = ref('');
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
      )
},
  data() {
    return {
      step: 1,
      email: '',
      first_name: '',
      last_name:'',
      password : '',
      selected: '',
      date: '',
      offices: offices,

    }
  },
  props: {
    source: String
  },
  methods: {
    submit() {
      console.log('SUBMIT')
     
      let officeUrl = this.offices.find(office => office.title === this.selected).url
        axiosInstance
        .post('users/', {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          office: officeUrl, 
          date_of_birth: this.date,
          password: this.password
        })
        .then(res => console.log(res))
        },
  },}
</script>
