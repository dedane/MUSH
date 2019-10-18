<template>
<div class="Home">
  <v-container class="my-5" align-center justify-center>
    <v-layout row-wrap justify-center>
      <v-flex xs12 md6>
          <v-text class="text-center ">
          <h1 class="display-2"> Are You A Mushroom Farmer? </h1>
          </v-text>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center align-center justify-space-around >
      <v-flex xs7 md5 justify-space-around mb-4>
      <v-btn  rounded block color="success" large router-link to="/Register">SIGN UP</v-btn>
      </v-flex>
      <v-flex xs7 md5 justify-space-around>
      <v-btn  rounded block color="success" router-link to="/Login" large>SIGN IN</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  
</div>
</template>
<style lang="scss">

.Home{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height:650px;
   background-image: url('https://ik.imagekit.io/ugyodiq15/mushrooms-chestnut-rex_eG88jugML.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>

<script>

export default {
  name: 'Home',
  components: {
    },
};
  </script>
