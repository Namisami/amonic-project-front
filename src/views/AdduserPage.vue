<template>
  <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl" style="">
    <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
      <p class="text-sm text-blue" >Add user</p>
      <img src="close.svg" alt="">
    </div>
      <van-form class="p-2" @submit="onSubmit">
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
      v-model="firstname"
      name="firstname"
      label="First Name"
      placeholder=""
      :rules="[{ required: true, message: 'First Name is required' }]"
    />
    <van-field style=""
      v-model="lastname"
      name="lastname"
      label="Last Name"
      placeholder=""
      :rules="[{ required: true, message: 'Last Name is required' }]"
    />
    <div class="text-sm flex justify-start gap-2 m-4 border-b">
            <p>Office</p>
            <select class="w-11/12 h-8 " v-model="selected">
                <option disabled>s</option>
                <option >ggg</option>
            </select>
    </div> 
    <div class="text-sm flex justify-between  gap-2 m-4 ">
            <p>Birth Date</p>
            <el-date-picker 
              class="border-blue"
              v-model="value2"
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
    <el-button style="width: 200px" >Save</el-button>
    <el-button style="width: 200px;background-color:#F56C6C" type="danger" >Cancel</el-button>
  </div>

</van-form>

 </div>
</template
>

<script lang="ts" setup>

import { ref } from 'vue'

const value2 = ref('')

</script>
