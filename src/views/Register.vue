<template>
<v-app>
    <v-stepper alt-labels v-model="el">
    <v-stepper-header >
      <v-stepper-step :complete="el > 1" step='1' icon="mdi-account-box-outline">Personal Details</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete=" el > 2" step='2' icon="mdi-home-assistant">FarmHouse</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step='3' icon="mdi-chart-pie">Statistics</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items >
      <v-stepper-content step='1'>
        <v-card flat="">
         <v-card
         flat
        max-width="600"
        class="mx-auto">
        <v-card-title class="justify-center font-weight-bold display-2">
          Personal Details
        </v-card-title>
        <v-card-actions class="justify-center">
            <v-btn class="mx-auto success" >
            <v-icon  large>mdi-plus-circle</v-icon>
            <h1> Upload your Picture</h1>
        </v-btn> 
        </v-card-actions>
          
            <v-card flat>
              <v-text-field
                name="name"
                label="Name"
                id="name"
                outlined
            ></v-text-field>   
            </v-card>
             <v-card flat>
               <v-text-field
                name="mobile"
                label="Mobile"
                id="mobile"
                outlined
            ></v-text-field>  
             </v-card>
            <v-card flat>
                  <v-text-field
                name="Email"
                label="email"
                id="email"
                outlined
            ></v-text-field>  
            </v-card>
            <v-card flat>
              <v-text-field
                name="D.O.B"
                label="D.O.B"
                id="D.O.B"
                outlined
            ></v-text-field>  
            </v-card>
            <v-card flat>
               <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye': 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password' "
                name="input-10-1"
                counter
                @click:append="show1 = !show1"
                outlined
            ></v-text-field> 
            </v-card>
            
             
        </v-card>
        <v-layout justify-center >
          <v-card flat width="200px">
            <v-card-actions >
              <v-btn x-large block  dark text-center  color="success" @click="el = 2" > NEXT</v-btn>
            </v-card-actions>
                  
            </v-card>
        </v-layout>
        
        </v-card>
          
      </v-stepper-content>
    
      <v-stepper-content step='2'>
        <v-card flat>
         
            <v-card
        max-width="600"
        class="mx-auto" flat>
       
        <v-card-title class="justify-center font-weight-bold display-2">
            Type of Mushroom
        </v-card-title>
        <v-card-actions class="justify-center">
            <v-layout column>
        <v-row>
            <v-switch label="Oyster" v-model="Oyster"></v-switch>
             
        </v-row>   
            <v-switch label="Button" v-model="Button"></v-switch>
            
            <v-switch label="Reishi" v-model="Reishi"></v-switch>
            
            <v-switch label="Shitake" v-model="Shitake"></v-switch>
            
        </v-layout>  
        </v-card-actions>
        
        <v-spacer></v-spacer>
        <v-card-title class="justify-center font-weight-bold display-2">
            Number Of Grow Houses
        </v-card-title>\
        <v-card-actions>
            <v-select v-model="number" :items="Numbers">
            </v-select>
        </v-card-actions>
        <v-spacer></v-spacer>
        <v-card-title class="justify-center font-weight-bold display-2">
            Number Of Grow Times
        </v-card-title>\
        <v-card-actions>
            <v-select v-model="number" :items="Numbers">
            </v-select>
        </v-card-actions>
        <v-layout justify-center >
          <v-card flat width="200px">
            <v-card-actions >
              <v-btn x-large block  dark text-center  color="success" @click="el = 3" > NEXT</v-btn>
            </v-card-actions>
                  
            </v-card>
        </v-layout>
            </v-card>
        
        </v-card>  
      </v-stepper-content>
    
      <v-stepper-content step='3'>
        <v-card flat>
          <v-card max-width="600"
        class="mx-auto" >
           <v-card-title class="justify-center font-weight-bold display-2" >
            Production Capacity
        </v-card-title>
          <v-col cols="12">
        <v-slider
          v-model="slider"
          thumb-label="always"
        ></v-slider>
      </v-col>
         <v-layout justify-center >
          <v-card flat width="200px">
            <v-card-actions >
              <v-btn x-large block  dark text-center  color="success" @click="el = 1" > Submit</v-btn>
            </v-card-actions>
                  
            </v-card>
        </v-layout>
        </v-card>
        </v-card> 
      </v-stepper-content>
    </v-stepper-items>

</v-stepper>

</v-app>


 <!--   <personal /> 
   <router-view></router-view>
   <v-card>
            <v-card-actions class="justify-center">
              <v-btn x-large dark text-center  color="success" > <router-link to="/Personal">NEXT</router-link></v-btn>
            </v-card-actions>
                  
            </v-card>
   <v-content>
          
      <router-view></router-view> 
        
      </v-content>
    -->

</template>
<script>
/* import regheader from '../components/regheader';*/
import personal from '../components/Personal';
import Statistics from '../components/Statistics';
import Farmhouse from '../components/Farmhouse.vue';
 


export default {
  components: { 
     /* regheader, */
    personal,
    Farmhouse,
    Statistics 
     },
  data(){
        return {
            show1: false,
            password: 'Password',
            rules: {
                required: value => !!value || 'Required.',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },
            el: 0,
            Numbers: [1,2,3,4,5,6,7,8,9,10],
            slider: 0,
            /* demoSteps:[
              {
                icon: 'mdi-account-box-outline',
                name: 'Personal Details',
                title: 'Personal Details',
                component: personal
              },
              {
                icon: 'mdi-home-assistant',
                name: 'FarmHouse',
                title: 'FarmHouse',
                component: Farmhouse
              },
              {
                icon: 'mdi-chart-pie',
                name: 'Statistics',
                title: 'Statistics',
                component: Statistics
              }
            ]
        },
        methods{
          completeStep(payload) {
            this.demoSteps.foreach
          }
        } */
      }
    }
  }
</script>