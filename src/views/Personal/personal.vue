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
    <v-container grid-list-xs12 md6 >
    <v-layout row wrap mt-4>
    <v-spacer></v-spacer>
    <v-btn icon>
    <v-icon large> mdi-account-box-outline</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
    <v-icon large> mdi-home-assistant</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
    <v-icon large> mdi-chart-pie</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
      
    </v-layout>

    <v-layout row wrap>
     <v-btn icon>
       <v-icon="mdi-plus-circle">
     </v-btn>
     <v-btn-title> EnterYourPicture</v-btn-title>
    </v-layout>
      
    </v-container>
    </div>
</template>
<script>
export default {
    
}
</script>