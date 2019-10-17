<template>
    <v-app>
      <v-content>
          
        <v-card
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
           
        
        
            <v-card>
              <v-text-field
                name="name"
                label="Name"
                id="name"
                outlined
            ></v-text-field>   
            </v-card>
             <v-card>
               <v-text-field
                name="mobile"
                label="Mobile"
                id="mobile"
                outlined
            ></v-text-field>  
             </v-card>
            <v-card>
                  <v-text-field
                name="Email"
                label="email"
                id="email"
                outlined
            ></v-text-field>  
            </v-card>
            <v-card>
              <v-text-field
                name="D.O.B"
                label="D.O.B"
                id="D.O.B"
                outlined
            ></v-text-field>  
            </v-card>
            <v-card>
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
        
      </v-content>
    </v-app>
</template>
<script>
//import Farmhouse from '../components/Farmhouse'


export default {
  
    data(){
        return {
            show1: false,
            password: 'Password',
            rules: {
                required: value => !!value || 'Required.',
                emailMatch: () => ('The email and password you entered don\'t match')
            }
        }
        
        
    }
    
}
</script>