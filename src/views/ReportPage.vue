<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-b-blue border-b p-2">
            <p class=" text-sm text-blue" >Amenities Report</p>
            <router-link to="/logout"><img src="close.svg" alt=""></router-link>
        </div>
        <van-form class="p-2 flex " @submit="submit">
            <van-cell-group inset class="w-xl">
                
                <van-field class="w-50" style=""
                v-model="flight_id"
                name="flight_id"
                label="FlightID:"
                placeholder=""
                
                /> 
                <div class="flex">
                    <div class="text-sm flex  gap-2 m-4 ">
                            <p>from:</p>
                            <el-date-picker 
                            class="border-blue"
                            v-model="from"
                            type="date"
                            placeholder="Pick a Date"
                            format="YYYY/MM/DD"
                            value-format="YYYY-MM-DD"
                            />

                    </div> 
                    <div class="text-sm flex  gap-2 m-4 ">
                            <p>to:</p>
                            <el-date-picker 
                            class="border-blue"
                            v-model="to"
                            type="date"
                            placeholder="Pick a Date"
                            format="YYYY/MM/DD"
                            value-format="YYYY-MM-DD"
                            />

                    </div>
                </div> 
                </van-cell-group>
                <div class="flex justify-center items-end gap-5 m-4" >
                    <el-button @click="submit" type="primary" style="width: 200px" >Make Report</el-button>
                    
                </div>

        </van-form>
        <table class=" mx-auto w-11/12 border border-gray-600 ">
            <thead> <!-- Заголовок таблицы -->
            <tr class="text-xs"> 
                <th class=" border  border-gray-500 p-2 w-2/12">Amenities</th>
                <th class="border-collapse border  border-gray-500 p-2 w-2/12">WI-FI 50 mb</th>
                <th class="border-collapse border  border-gray-500 p-2 w-2/12">Extra Blanket</th>
                <th class="border-collapse border  border-gray-500 p-2  w-2/12">Two Neighboring Seats Free</th>
                <th class="border-collapse border  border-gray-500 p-2 w-2/12">Laptop Rental</th>
            </tr>
            </thead>
            <tbody class="text-xs"> <!-- Заполнение таблицы -->
                <tr>
                    <td class=" border-collapse border p-2 "></td> <!-- Номер строки -->
                    <td class="border-collapse border  p-2"></td> 
                    <td class="border-collapse border  p-2"></td> 
                    <td class="border-collapse border  p-2"></td> 
                    <td class="border-collapse border  p-2"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>