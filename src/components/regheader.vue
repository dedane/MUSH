<template>
    <div class="Register">
    <v-toolbar
      dark
      prominent
      src="https://ik.imagekit.io/ugyodiq15/mushrooms-oyster-banner_QTCz_5S5N.jpg"
    >
     <v-btn icon>
      <v-icon large color="black">mdi-arrow-left-bold </v-icon>
     </v-btn>

      <v-toolbar-title >Register</v-toolbar-title>

      <div class="flex-grow-1"></div>

    </v-toolbar>
    <v-container class="my-5" >
    <v-layout row wrap>
    <v-flex  v-for="icons in forms" :key="icons.icon" router :to="icons.route" >
    <v-card flat class="text-center ma-12 mr-12 " width="200" column>
      <v-btn icon column router :to="icons.route" >
        <v-icon large>{{icons.icon}}</v-icon>
        </v-btn> 
        <v-card-text>
          <div class="header">{{icons.name}}</div>
        </v-card-text>
      
    </v-card>
    </v-flex>
    <!-- <v-spacer></v-spacer>
    <v-btn icon>
    <v-icon large> mdi-home-assistant</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
    <v-icon large> mdi-chart-pie</v-icon>
    </v-btn>
    <v-spacer></v-spacer> -->
      
    </v-layout>
      
    </v-container>
    </div>
</template>
<script>
export default {
  data() {
    return {
      forms: [
        { icon:'mdi-account-box-outline',name:'Personal Detail',route:  "Personal"},
        { icon:'mdi-home-assistant',name:'FarmHouse',route:  "Farmhouse"},
        { icon:'mdi-chart-pie',name:'Statistics',route:  "Statistics"}

      ]
    }
  },
    
}
</script>