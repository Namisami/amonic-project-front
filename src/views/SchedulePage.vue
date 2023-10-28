<template>
    <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue w-3/4">
        <div class="flex justify-between border-blue border-b p-2">
            <p class=" text-sm text-blue" >Schedule Edit</p>
            <img src="close.svg" alt="">
        </div>
    <v-card-title class="text-sm font-weight-regular justify-space-between txt">
                        Filter route
                    </v-card-title>
                    <v-card class="ml-16" width="800" justify="center">
                        <v-container>
                            <v-row class="ml-5 mt-4 mb-4">
                                <v-row class="ml-2 mt-2"> 
                                    <p>From:</p> 
                                    <span class="font-weight-bold ml-3">AUH</span>
                                </v-row>
                                <v-row class="ml-1 mt-2"> 
                                    <p>To:</p> 
                                    <span class="font-weight-bold ml-3">ADE</span>
                                </v-row>
                                <v-row class="ml-1 mt-2"> 
                                    <p>Aircraft:</p> 
                                    <span class="font-weight-bold ml-3">Boeng 739</span>
                                </v-row>
                            </v-row>
                        </v-container>
                    </v-card>
                    <v-form class="text-sm" v-model="valid">
                        <v-container class="w-10/12">
                          <v-row class="ml-4 mt-4 mb-4">
                            <v-col cols="12"
                              md="4">
                              <v-text-field
                                class="text-sm"
                                v-model="lastname"
                                label="Date [dd/mm/yyyy]"
                                variant="outlined"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <v-text-field
                                v-model="lastname"
                                label="Time [11:18]"
                                variant="outlined"
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12"
                              md="4">
                              <v-text-field
                                v-model="lastname"
                                label="Economy price $[530]"
                                variant="outlined"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                    </v-form>
                    <div class="flex justify-end gap-5 mx-6" >
                        <el-button class="border-orange" style="width: 200px" >Update</el-button>
                        <el-button type="danger" class="border-orange" style="width: 200px">Cancel</el-button>
                    </div> 
  
  </div>

</template>
  
  <script>
  export default {
    data: () => ({
      step: 1,
        desserts: [
          {
            date: '11/10/2017',
            time: '08:45',
            from: 'IKA',
            to: 'AUH',
            flight: '1908',
            aircraft: '320',
            ep: '$370',
            bp: '$499',
            fp: '$573',
          },
          {
            date: '11/10/2017',
            time: '08:55',
            from: 'AUH',
            to: 'TXL',
            flight: '1121',
            aircraft: '310',
            ep: '$530',
            bp: '$715',
            fp: '$821',
          },
          {
            date: '11/10/2017',
            time: '11:15',
            from: 'ABZ',
            to: 'AUH',
            flight: '936',
            aircraft: '330',
            ep: '$600',
            bp: '$499',
            fp: '$573',
          },
        ],
    }),
    props: {
      source: String
    }
  };
  </script>
<style>
.txt{
    margin-top: 20px;
    margin-left: 58px;
}
.txt-1{
    margin-left: 450px;
    margin-top: 10px;
}
.txt2{
    margin-left: 40px;
}
.table{
    margin-left: 58px;
    margin-right: 40px;
}
.btn1{
  margin-left: 600px;
}
.btn2{
  margin-left: 30px;
}
</style>
