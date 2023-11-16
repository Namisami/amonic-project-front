<template>
<div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl" style="">
    <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
      <p class="text-sm text-blue" >Edit Role</p>
      <img src="close.svg" alt="">
    </div>
    <van-form class="p-2" @submit="submit">
      <van-cell-group inset class="w-xl">
        <van-field style=""
          v-model="email"
          type="email"
          name="email"
          label="Email Address"
          placeholder="email address" 
        />
        <van-field style=""
          v-model="first_name"
          name="firstname"
          label="First Name"
          placeholder="first name"
        />
        <van-field style=""
          v-model="lastname"
          name="lastname"
          label="Last Name"
          placeholder="last name"
        />
        <div class="text-sm flex justify-start gap-2 m-4 border-b">
            <p>Office</p>
            <select class="w-11/12 h-8 " v-model="selected">
              <option v-if="offices" v-for="office in offices">
                {{ office.title }}
              </option>
                <!-- <option disabled>s</option>
                <option >ggg</option> -->
            </select>
        </div> 
        <div class="text-sm flex justify-start gap-8 px-4 py-4" >
          <p>Role</p>
           <van-radio-group  v-model="checked">
              <van-radio class="pb-4" name="administrator">Administrator</van-radio>
              <van-radio name="user">User</van-radio>
          </van-radio-group>
        </div>           
      </van-cell-group>
        <div class="flex justify-center gap-5 m-6" >
          <el-button @click="submit" style="width: 200px" >Apply</el-button>
          <el-button style="width: 200px;background-color:#F56C6C" type="danger" >Cancel</el-button>
        </div>
  </van-form>
</div>       
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { store } from '@/store'
import axiosInstance, { API_URL } from '@/http'

const offices = computed(() => store.state.offices)

export default {
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
        })}
    )
    return { checked };
  },
  data() {
    return {
      step: 1,
      first_name: '',
      selected: '',
      offices: offices,
    }
  },
  props: {
    source: String
  },
  // onMounted() {
    
  //   },
  methods: {
    submit() {
      console.log(this.selected)
      // console.log(this.offices)
      offices.value.map(office => console.log(office))
      axiosInstance
        .patch('users/19/', {
          first_name: this.first_name
        })
        .then((res) => {
          console.log(res)
        })
        .catch(() => {
          console.log('12312312312')
          showNotify({ type: 'danger', message: 'Ошибка' })
        })
        .finally(() => {
            loadingToast.close()
        }
      )
    }
      

  }
}
</script>
