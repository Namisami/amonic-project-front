<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-b-blue border-b p-2">
            <p class=" text-sm text-blue" >AMONIC Airlines Short Summary</p>
            <router-link to="/login"><img src="close.svg" alt=""></router-link>
        </div>
        <div class="" >
            <img class="block mx-auto p-5" src="logoa.png" alt="">
        </div>
        <p class="mx-6">In the last 30 days...</p>
        <div class="grid grid-cols-2 gap-4 mx-auto my-4 p-4 rounded-md border border-gray w-11/12">
            <div>
                <p>Flights</p>
                <ul class="rounded-md border border-gray m-4">
                    <li class="flex gap-8 justify-start p-2">
                        <p>Number confirmed:</p>
                        <p>[hjj]</p>
                    </li>
                   <li  class="flex gap-8 justify-start p-2">
                        <p>Number cancelled:</p>
                        <p>[hjj]</p>
                    </li>
                    <li  class="flex gap-8 justify-start p-2">
                        <p>Average daily flight time:</p>
                        <p></p>
                    </li>
                </ul>
            </div>
            <div>
                <p>Top customers(Number of purchases)</p>
                <ul class="rounded-md border border-gray m-4">
                    <li class="p-2">
                        <p>1. John Doe (5 tickets)</p>
                    </li>
                   <li class="p-2">
                        <p>2. John Doe (5 tickets)</p>
                    </li>
                    <li class="p-2">
                        <p>3. John Doe (5 tickets)</p>
                    </li>
                </ul>
            </div>
            <div>
                <p>Number of passengers flying</p>
                <ul class="rounded-md border border-gray m-4">
                    <li class="flex gap-8 justify-start p-2" >
                        <p>Busiest Day:</p>
                        <p>kckkdkdkd</p>
                    </li>
                   <li class="flex gap-8 justify-start p-2">
                        <p>Most quiet day:</p>
                        <p> gfffff</p>
                    </li>
                </ul>
            </div>
            <div>
                <p>Top AMONIC Airlines Offices(Revenue)</p>
                <ul class="rounded-md border border-gray m-4">
                    <li class="p-2">
                        <p>1. Abu Dhabi</p>
                    </li>
                   <li class="p-2">
                        <p>1. Abu Dhabi</p>
                    </li>
                    <li class="p-2">
                        <p>1. Abu Dhabi</p>
                    </li>
                </ul>
            </div>

        </div>
        <p class="mx-6">Revenue from tickets sales</p>
        <div class="rounded-md border border-gray mx-auto flex justify-between gap-4 w-11/12 p-4 my-4">
            <p>Yesterday: $[x]</p>
            <p>Two days ago: $[x]</p>
            <p>Three days ago: $[x]</p>
        </div>
        <p class="mx-6">Weekly report of percantage of empty seats</p>
        <div class="rounded-md border border-gray mx-auto flex justify-between gap-4 w-11/12 p-4 my-4">
            <p>This week: $[x]</p>
            <p>Last week: $[x]</p>
            <p>Two weeks ago: $[x]</p>
        </div>
        <div class="mx-auto flex justify-between gap-4 w-11/12 my-4">
            <p>Report generated in [x] seconds</p>
            <el-button style="width: 200px" type="danger" >Close</el-button>
        </div>
    </div>
</template>
<script>

</script>
