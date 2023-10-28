<template>
<div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl" style="">
    <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
      <p class="text-sm text-blue" >Edit Role</p>
      <img src="close.svg" alt="">
    </div>
    <van-form class="p-2" @submit="onSubmit">
      <van-cell-group inset class="w-xl">
        <van-field style=""
          v-model="email"
          type="email"
          name="email"
          label="Email Address"
          placeholder="email address" 
        />
        <van-field style=""
          v-model="firstname"
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
                <option disabled>s</option>
                <option >ggg</option>
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
          <el-button style="width: 200px" >Apply</el-button>
          <el-button style="width: 200px;background-color:#F56C6C" type="danger" >Cancel</el-button>
        </div>
  </van-form>
</div>       
</template>

<script>
import { ref } from 'vue';
export default {
  data: () => ({
    step: 1,
    
  }),
  props: {
    source: String
  },
  setup() {
    const checked = ref('');
    return { checked };
}}
</script>
