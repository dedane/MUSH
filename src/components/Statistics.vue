<template id="app">
    <v-app>
        <v-content>
        <v-card max-width="600"
        class="mx-auto" >
           <v-card-title class="justify-center font-weight-bold display-2" >
            Production Capacity
        </v-card-title>
        <v-card v-for="stats in Numbers" :key="stats.name">
           <v-card-actions>
            <v-card-title>{{stats.name}}</v-card-title>
        </v-card-actions>
        <v-card-actions>
            <v-btn color="success" fab dark large v-on:click='digits -= 1'>
                <v-icon>mdi-minus</v-icon>
            </v-btn>
                <v-text-field outlined rounded :label="digits" > </v-text-field>
            <v-btn color="success" fab dark large v-on:click='digits += 1'>
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-card-actions> 
        </v-card>
        <v-card>
           <v-card-actions class="justify-center">
            <v-btn x-large dark text-center color="success" rounded>SUBMIT</v-btn>
        </v-card-actions> 
        </v-card>
        </v-card>
        
        </v-content>
    </v-app>
</template>
<script>
export default {
    el: 'app',
    data() {
        
        return {
            Numbers: [
                {name:'WEEKS',digits: 0},
                {name:'MONTHS',digits: 0},
            ],
            digits : 0
            
        }
    },
    methods: {
            digitsup(){
                this.digits = this.digits++
            },
            digitsdown(){
                this.digits = this.digits--
            }

    }
}
</script>