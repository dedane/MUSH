<template>
    <v-app>
        <v-content>
            <v-card
        max-width="600"
        class="mx-auto">
        <v-card-actions class="justify-center">
            <v-btn class="mx-auto success" >
            <v-icon  large>mdi-plus-circle</v-icon>
            <h1> Upload your Picture</h1>
        </v-btn> 
        </v-card-actions>
        <v-card-title class="justify-center font-weight-bold display-2">
            Type of Mushroom Grown
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
        <v-btn x-large dark text-center color="success">NEXT</v-btn>
            </v-card>
        </v-content>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            Numbers: [1,2,3,4,5,6,7,8,9,10]
        }
    },
}
</script>