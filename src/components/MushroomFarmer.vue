<template>
<v-container grid-list-md text-xs-container>
    

    <div app>
        <v-layout row align-center justify-center>
            <v-flex d-flex xs12 order-xs5 pa-6  >
                <h1 class="BOLD display-2 text-center "> Are You A Mushroom Farmer?</h1>
            </v-flex>
        </v-layout>   
    <div class="home" >
        <v-layout row wrap justify-center align-center>
            <v-flex xs12 sm6 md3 order-md2 order-sm4 >
              <v-btn class="ma-2 align-self-sm-center"  rounded color="success" Dark>SIGN UP</v-btn>
            </v-flex> 
            <v-flex xs12 sm6 md3 order-md3 order-sm1>
                 <v-btn class="ma-2 align-self-sm-center"  rounded color="success" Dark>SIGN IN</v-btn>    
            </v-flex>
        </v-layout>
            
            
    </div>

    </div>
    
    </v-container>
</template>
<style lang="scss">
h1{
    color: #1B5E20;
    display:flex;
    padding: 200px;
    justify-content: center;
    display: center;
    align-items: center;
}
.home{
   display: flex;
   justify-content: center; 
}
    
</style>
<script>
export default {
    
}
</script>