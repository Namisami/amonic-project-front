<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl">
        <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
            <p class="text-sm text-blue" >No logout detected</p>
            <img src="close.svg" alt="">
        </div> 
        <p class="block p-2 max-w-lg mx-auto">No logout detected for your last login</p>
        <van-form class="p-2 max-w-lg mx-auto"  @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                    v-model="message"
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
                <van-radio-group class="flex justify-start gap-2" v-model="checked">
                    <van-radio name="1">Software Crаsh</van-radio>
                    <van-radio name="2">Server Crash</van-radio>
                </van-radio-group>
                <el-button type="primary" style="background-color: none;" >Confirm</el-button>
            </div>
        </van-form>
    </div>
</template>
<script>
    import { ref } from 'vue';

    export default {
     setup() {
    const checked = ref('');
    return { checked };
  },
    };
</script>
