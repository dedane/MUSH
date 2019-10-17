<template>
<v-app>
   <regheader />
  <!-- <personal /> -->
   <router-view></router-view>
   <v-card>
            <v-card-actions class="justify-center">
              <v-btn x-large dark text-center  color="success" > <router-link to="/Personal">NEXT</router-link></v-btn>
            </v-card-actions>
                  
            </v-card>
   <v-content>
          
      <router-view></router-view> 
        
      </v-content>
   
</v-app>
</template>
<script>
import regheader from '../components/regheader';
import personal from '../components/Personal';



export default {
  components: { 
    regheader,
    personal
     },
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