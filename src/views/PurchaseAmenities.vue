<template>
  <form class="flex flex-col border mx-auto my-4 p-4 w-fit gap-3">
    <div class="flex items-center gap-3">
      <label
        >Booking reference:
        <input type="text" class="border" value="[ XXXXXX ]" />
      </label>
      <el-button>OK</el-button>
    </div>

    <fieldset class="border p-3">
      <legend>Flight list</legend>

      <div class="flex items-center gap-3">
        <label
          >Choose your flights:
          <select class="border">
            <option value="1" selected>1107, AUH-DOH, 11/11/2017, 17:20</option>
          </select>
        </label>
        <el-button>Show Amenities</el-button>
      </div>
    </fieldset>

    <div class="flex items-center gap-3">
      <label
        >Full name:
        <input type="text" class="border" value="[ XXXX XXXXXXX ]" />
      </label>
      <label
        >Passport number:
        <input type="text" class="border" value="[ XXXX XXXXXXX ]" />
      </label>
    </div>

    <div class="flex items-center gap-3">
      <label
        >Your cabin is:
        <input type="text" class="border" value="[ XXXXXXXX ]" />
      </label>
    </div>

    <fieldset class="border flex gap-[100px] p-3">
      <legend>AMONIC Airlines Amenities</legend>

      <div class="flex flex-col gap-2 pl-[20px]">
        <label>
          <input type="checkbox" checked disabled />
          Soft drinks (Free)
        </label>
        <label>
          <input type="checkbox" checked disabled />
          Wi-Fi 50 MB (Free)
        </label>
        <label>
          <input type="checkbox" />
          Next Seat Free ($30)
        </label>
        <label>
          <input type="checkbox" checked />
          Wi-Fi 250 MB ($50)
        </label>
      </div>

      <div class="flex flex-col gap-2">
        <label>
          <input type="checkbox" />
          Extra Bag ($15)
        </label>
        <label>
          <input type="checkbox" />
          Laptop Rental ($15)
        </label>
      </div>
    </fieldset>

    <div class="flex justify-between items-center w-full">
      <div class="flex flex-col w-[180px]">
        <div class="flex justify-between">
          <p class="grow">Items selected:</p>
          <p>[$XX]</p>
        </div>
        <div class="flex justify-between">
          <p class="grow">Duties and taxes:</p>
          <p>[$XX]</p>
        </div>
        <div class="flex justify-between">
          <p class="grow">Total payable:</p>
          <p>[$XX]</p>
        </div>
      </div>

      <div class="flex flex-col gap-2 w-[200px]">
        <el-button class="w-full">Save and Confirm</el-button>
        <el-button class="w-full ml-0">Exit</el-button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      mockData: {
        columns: [
          {
            title: 'Gender',
            subColumns: [
              { title: 'Male', value: 839 },
              { title: 'Female', value: 888 }
            ]
          },
          {
            title: 'Age',
            subColumns: [
              { title: '18-24', value: 209 },
              { title: '25-39', value: 440 },
              { title: '60+', value: 487 }
            ]
          },
          {
            title: 'Cabin type',
            subColumns: [
              { title: 'Economy', value: 984 },
              { title: 'Business', value: 372 },
              { title: 'First', value: 300 }
            ]
          },
          {
            title: 'Destination Airport',
            subColumns: [
              { title: 'AUH', value: 221 },
              { title: 'BAH', value: 561 },
              { title: 'DOH', value: 370 },
              { title: 'RYU', value: 425 },
              { title: 'CAI', value: 150 }
            ]
          }
        ]
      }
    }
  }
}
</script>
