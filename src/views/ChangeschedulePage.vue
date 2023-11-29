<template>
  <div class="font-sans  mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl">
    <div class="flex justify-between border-blue border-b p-2" style="border-color #f79420;">
      <p class="text-sm font-bold text-blue">Apply Schedule Changes</p>
      <img src="close.svg" alt="">
    </div>
    <div class="mt-4 mx-6">
      <p class="text-sm my-3">Please select a text file with the changes</p>
      <input type="file" @change="onFileChanged($event)" accept="csv/*" capture />
      <el-button @click="submit">Import</el-button>
      <p class="text-sm ms-3">Results</p>
      <ul class="text-sm border p-4">
        <li class="flex justify-between gap-4 mb-2">
          <p>Successful Changes Applied</p>
          <p>{{ successful }}</p>
        </li>
        <li class="flex justify-between gap-4 mb-2">
          <p>Duplicate Records Discarded</p>
          <p>{{ duplicate }}</p>
        </li>
        <li class="flex justify-between gap-4 mb-2">
          <p>Records With Missing Fields Discarded</p>
          <p>{{ errors }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import axiosInstance from '@/http'

const file = ref();
const form = ref();
export default {
  data() {
    return {
      file: '',
      successful: 0,
      duplicate: 0,
      errors: 0
    }
  },
  methods: {
    async submit() {
      console.log(this.file)
      let formData = new FormData();
      formData.append('file', this.file);
      await axiosInstance
        .post('schedules/import_schedule/', 
              formData,
              {
                withCredentials: true,
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Content-Disposition': 'attachment',                  
                  'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
                },
              }
        )
        .then(res => {
          this.successful = res.data.successful
          this.duplicate = res.data.duplicate
          this.errors = res.data.errors
        })
        .catch(err => console.log(err))
    },
    onFileChanged($event) {
      const target = $event.target;
      if (target && target.files) {
        file.value = target.files[0];
      }
      this.file = file.value
    },
    async saveImage() {
      if (file.value) {
        try {
        } catch (error) {
          console.error(error);
          form.value?.reset();
          file.value = null;
        } finally {
        }
      }
    }
  }
}
</script>
