<template>
    <div class="font-sans text-sm mx-auto my-4 pb-4 rounded-md border border-blue w-3/4" style="">
        <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
            <p class="text-sm text-blue" >Search for Flights</p>
            <img src="close.svg" alt="">
        </div>
            <form class="form mx-4" action="#">
                <fieldset class="form__header">
                    <legend>Search Parameters</legend>
                        <div class="select-section">
                            <div>
                                <label for="city-select">From</label>
                                <select name="cities" id="city-select">
                                <option value="">Choose an option</option>
                                <option value="cal">CAL</option>
                                </select>
                            </div>
                            <div>
                                <label for="city-select">To</label>
                                <select name="cities" id="city-select">
                                <option value="">Choose an option</option>
                                <option value="cal">AUH</option>
                                </select>
                            </div>
                            <div>
                                <label for="city-select">Cabin type</label>
                                <select name="cities" id="city-select">
                                <option value="">Choose an option</option>
                                <option value="cal">Economy</option>
                                </select>
                            </div>
                        </div>
                        <div class="button-section">
                            <label><input class="" type="radio" name="direction" value="return">Return</label>
                            <label><input class="" type="radio" name="direction" value="return">One way</label>
                            <label>Outbound<input type="date"></label>
                            <label>Return<input type="date"></label>
                            <el-button class="border-orange" style="" >Apply</el-button>
                        </div>
                </fieldset>
                <fieldset>
                    <legend class="px-2">Outbound Flight Details</legend>
                    <label><input class="input-tr" type="checkbox">Display three before and after</label>
                    <table class="mx-auto w-11/12 border border-gray-600 text-sm h-40">
                        <tr>
                            <th class="border-collapse border  border-gray-500 p-2">From</th>
                            <th class="border-collapse border  border-gray-500 p-2">To</th>
                            <th class="border-collapse border  border-gray-500 p-2">Date</th>
                            <th class="border-collapse border  border-gray-500 p-2">Time</th>
                            <th class="border-collapse border  border-gray-500 p-2">Flight Number(s)</th>
                            <th class="border-collapse border  border-gray-500 p-2">Cabin Price</th>
                            <th class="border-collapse border  border-gray-500 p-2">Number of Stops</th>
                        </tr>
                        <tr>
                            <td class="border-collapse border  border-gray-500 p-2">AUH</td>
                            <td class="border-collapse border  border-gray-500 p-2">CAL</td>
                            <td class="border-collapse border  border-gray-500 p-2">11/10/2016</td>
                            <td class="border-collapse border  border-gray-500 p-2">8:15</td>
                            <td class="border-collapse border  border-gray-500 p-2">[xxx]</td>
                            <td class="border-collapse border  border-gray-500 p-2">405$</td>
                            <td class="border-collapse border  border-gray-500 p-2">0</td>
                        </tr>
                    </table>
                </fieldset>
                <fieldset>
                    <legend>Outbound Flight Details</legend>
                    <label><input class="input-tr" type="checkbox">Display three before and after</label>
                    <table class="mx-auto w-11/12  border-gray-600 text-sm h-40 border-collapse border  border-gray-500 p-2" border="1">
                        <tr>
                            <th class="border-collapse border  border-gray-500 p-2">From</th>
                            <th class="border-collapse border  border-gray-500 p-2">To</th>
                            <th class="border-collapse border  border-gray-500 p-2">Date</th>
                            <th class="border-collapse border  border-gray-500 p-2">Time</th>
                            <th class="border-collapse border  border-gray-500 p-2">Flight Number(s)</th>
                            <th class="border-collapse border  border-gray-500 p-2">Cabin Price</th>
                            <th class="border-collapse border  border-gray-500 p-2">Number of Stops</th>
                        </tr>
                        <tr>
                            <td class="border-collapse border  border-gray-500 p-2">AUH</td>
                            <td class="border-collapse border  border-gray-500 p-2">CAL</td>
                            <td class="border-collapse border  border-gray-500 p-2">11/10/2016</td>
                            <td class="border-collapse border  border-gray-500 p-2">8:15</td>
                            <td class="border-collapse border  border-gray-500 p-2">[xxx]</td>
                            <td class="border-collapse border  border-gray-500 p-2">405$</td>
                            <td class="border-collapse border  border-gray-500 p-2">0</td>
                        </tr>
                    </table>
                </fieldset>
                <fieldset class="form__footer w-2/4 mx-auto justify-between">
                    <legend>Confirm booking for</legend>
                    <label><input type="number">Passengers</label>
                    <el-button class="border-orange" style="" >Book Flight</el-button>
                </fieldset>
            </form>
    </div>
</template>

<style >


.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form__footer {
    display: flex;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    gap: 10px;
}

.select-section {
    display: flex;
    justify-content: space-between;
}

.form__header {

    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;


    display: flex;
    gap: 5px;
    flex-direction: column;
}

.tvbv {
    width: 100%;
    margin-top: 10px;
}

.button-section {
    display: flex;
    justify-content: space-between;
}
</style>