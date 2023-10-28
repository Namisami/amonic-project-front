<template>
    <div class="font-sans  mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl">
        <div class="flex justify-between border-blue border-b p-2" style="border-color #f79420;">
            <p class="text-sm font-bold text-blue" >Apply Schedule Changes</p>
            <img src="close.svg" alt="">
        </div>
        <div class="mt-4 mx-6">
            <p class="text-sm my-3">Please select a text file with the changes</p>
                <el-upload
                        ref="upload"
                        class="upload-demo "
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        :limit="1"
                        :on-exceed="handleExceed"
                        :auto-upload="false"
                    >
                        <template #trigger>
                        <el-button type="primary">select file</el-button>
                        </template>
                        <el-button class="ml-3" type="success" @click="submitUpload">
                        upload to server
                        </el-button>
                        <template #tip>
                        <div class="el-upload__tip text-red">
                            limit 1 file, new file will cover the old file
                        </div>
                        </template>
                    </el-upload>
                    <p class="text-sm ms-3">Results</p>
                    <ul class="text-sm border p-4">
                        <li class="flex justify-between gap-4 mb-2">
                            <p>Successful Changes Applied</p>
                            <p>[]</p>
                        </li>
                        <li class="flex justify-between gap-4 mb-2">
                            <p>Duplicate Records Discarded</p>
                            <p>[]</p>
                        </li>
                        <li class="flex justify-between gap-4 mb-2">
                            <p>Records With Missing Fields Discarded</p>
                            <p>[]</p>
                        </li>
                    </ul>
            
            </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'

const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}
</script>
