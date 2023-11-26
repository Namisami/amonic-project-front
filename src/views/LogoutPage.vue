<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl">
        <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
            <p class="text-sm text-blue" >No logout detected</p>
            <img src="close.svg" alt="">
        </div> 
        <p class="block p-2 max-w-lg mx-auto">No logout detected for your last login</p>
        <van-form class="p-2 max-w-lg mx-auto" @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                    v-model="description"
                    rows="5"
                    autosize
                    label="Reason:"
                    type="textarea"
                    maxlength="300"
                    placeholder="Message"
                    show-word-limit
                />
            </van-cell-group>
            <div class="flex justify-center gap-5 m-6">
                <van-radio-group class="flex justify-start gap-2" v-model="reason">
                    <van-radio name="SOFT">Software Crаsh</van-radio>
                    <van-radio name="SYST">Server Crash</van-radio>
                </van-radio-group>
                <el-button @click="onSubmit" type="primary" style="background-color: none;" >Confirm</el-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import { allowMultipleToast, closeToast, showLoadingToast, showNotify } from 'vant'
import axiosInstance from '@/http'

export default {
  data() {
    return {
      description: '',
      reason: '',
    }
  },
  methods: {
    async onSubmit() {
      allowMultipleToast()
      closeToast(true)
      const loadingToast = showLoadingToast({
        forbidClick: true,
        duration: 0,
        message: 'Загрузка...'
      })
      await axiosInstance
        .get(`visits?user=${window.localStorage.getItem('userId')}`)
        .then(async res => {
          let last_visit = res.data.pop()
          console.log(last_visit) 
          let user = last_visit.user
          await axiosInstance
            .post('errors/', {
              user: `${user.url}`,
              description: this.description,
              reason: this.reason,
            })
            .then(async res => {
              console.log(res.data.id)
              await axiosInstance
                .patch(`${last_visit.url}`, {
                  error: res.data.id,
                })
                .then(res => {
                  window.localStorage.removeItem('error')
                  if (user.role.title === 'Administrator') {
                    window.location.href = 'system'
                  } else {
                    window.location.href = 'user'
                  }
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
        .finally(() => loadingToast.close())
    }
  }
}
</script>
