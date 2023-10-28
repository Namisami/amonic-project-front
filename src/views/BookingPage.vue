<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4" style="">
        <div class="flex justify-between border-b border-blue p-2" style="border-color #f79420;">
            <p class="text-sm text-blue" >Booking Confirmation</p>
            <img src="close.svg" alt="">
        </div>
        <form class="form mx-6" method="#">
            <fieldset class="form__fieldset text-sm flex justify-between gap-2">
                <legend class="form__legend">Outbound Flight Details</legend>
                <p>From: Destination 1</p>
                <p>To: Destination 2</p>
                <p>Cabin type: Economy</p>
                <p>Date: 2023-10-28</p>
                <p>Flight Number: FLT123</p>
            </fieldset>
            
            <fieldset class="form__fieldset text-sm flex justify-between gap-2">
                <legend class="form__legend">Return Flight Details</legend>
                <p class="form__text">From: Destination 2</p>
                <p class="form__text">To: Destination 1</p>
                <p class="form__text">Cabin type: Business</p>
                <p class="form__text">Date: 2023-11-05</p>
                <p class="form__text">Flight Number: FLT456</p>
            </fieldset>
            
            <fieldset class="form__fieldset text-sm mx-auto">
                <legend class="form__legend">Passenger Details</legend>
                <label class="form__label" for="firstname">First Name:</label>
                <input class="form__input" type="text" id="firstname" name="firstname"><br><br>
                <label class="form__label" for="lastname">Last Name:</label>
                <input class="form__input" type="text" id="lastname" name="lastname"><br><br>
                <label class="form__label" for="birthdate">Birthdate:</label>
                <input class="form__input" type="date" id="birthdate" name="birthdate"><br><br>
                <label class="form__label" for="passport">Passport Number:</label>
                <input class="form__input" type="text" id="passport" name="passport"><br><br>
                <label class="form__label" for="passport-country">Passport Country:</label>
                <input class="form__input" type="text" id="passport-country" name="passport-country"><br><br>
                <label class="form__label" for="phone">Phone:</label>
                <input class="form__input" type="tel" id="phone" name="phone"><br><br>
                <button class="form__button" type="submit" id="add-passenger">Add Passenger</button>
            </fieldset>
        </form>
        <div class="form__footer passenger-list mx-6 py-4">
            <h2 class="form__heading text-sm py-2">Passenger List</h2>
            <table class="form__table mx-auto w-11/12 border border-gray-600 text-sm h-40">
                <thead>
                    <tr>
                        <th class="border-collapse border  border-gray-500 p-2" >First Name</th>
                        <th class="border-collapse border  border-gray-500 p-2 ">Last Name</th>
                        <th class="border-collapse border  border-gray-500 p-2 ">Birthdate</th>
                        <th class="border-collapse border  border-gray-500 p-2">Passport Number</th>
                        <th class="border-collapse border  border-gray-500 p-2 w-2/12">Passport Country</th>
                        <th class="border-collapse border  border-gray-500 p-2 w-2/12">Phone</th>
                    </tr>
                </thead>
                <tbody id="form__body-table">
                    <tr>
                        <td class="h-4">John</td>
                        <td>Doe</td>
                        <td>1990-05-15</td>
                        <td>AB123456</td>
                        <td>USA</td>
                        <td>123-456-7890</td>
                    </tr>
                    <tr>
                        <td class="border-collapse border p-2 "></td> <!-- Номер строки -->
                        <td class="border-collapse border  p-2"> </td> 
                        <td class="border-collapse border  p-2"></td> 
                        <td class="border-collapse border  p-2"></td> 
                        <td class="border-collapse border  p-2"></td>
                        <td class="border-collapse border  p-2"></td> 
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end gap-5 mx-10 my-4 p-2" >
            <el-button  class="border-orange" style="width: 200px" >Remove passender</el-button>
        </div>
        <div class="flex justify-center gap-5 mx-10 my-4" >
            <el-button type="info" class="border-orange" style="width: 200px" >Back to Search for Flights</el-button>
            <el-button type="primary" style="width: 200px">Confirm Booking</el-button>
        </div>
    </div>
</template>

<style>
.form__fieldset {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
}

.form__legend {
    font-size: 14px;
}

.form__label {
    font-size: 14px;
}

.form__input {
    max-width: 50%;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
}

.form__button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}


.form__heading {
    font-size: 1.2em;
}

.form__table {
    border-collapse: collapse;
    width: 100%;
}

.form__table th, .form__table td {
    border: 1px solid #ccc;
    text-align: center;
}

.button-back {
    background-color: #ccc;
}

.form__button-container {
    display: flex;
    justify-content: space-between;
}
</style>
