<template>
    <v-container justify="space-around">
    <v-row>
      <v-col class="mr-2" cols="3">
        <h1 class="pseudo" align="center">{{user}}</h1>
        <h1 class="timer" align="center">{{timer1}}</h1>
        <v-divider></v-divider>
        <h1 class="timer" align="center">{{timer2}}</h1>
        <h1 class="pseudo" align="center">{{opponent}}</h1>
        
      </v-col>
      
      <v-col id="chess" cols="4">
         <chessboard/>
      </v-col>
      <v-col class="ml-14" cols="4">
        <v-card id="panneau" elevation="2" class="pa-2" outlined height="400px" >
            <v-container>
                <v-row class="mb-5">
                    <v-col cols="6">
                        <v-btn>
                            <v-img alt="reculer" max-height="50" max-width="50" src="../assets/reculer.png"></v-img>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn>
                            <v-img alt="avancer" max-height="50" max-width="50" src="../assets/avancer.png"></v-img>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-divider class="mb-5"></v-divider>
                <v-row class="mb-16">
                    <p  class="ml-5">e4, e5, d4 <br></p>
                </v-row>
                <v-row class="mb-8"></v-row>
                <v-divider class="mt-16"></v-divider>
                <v-row>
                    <v-col>
                        <v-btn class="mt-6" text to="/">
                            50/50
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn class="mt-6" text to="/">
                            <v-img alt="drapeau" max-height="70" max-width="70" src="../assets/whiteflag.png"></v-img>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'


export default {
  name: 'App',
  components: {chessboard},
  data () {
    return {
        user: "Michel34",
        opponent: "Guillaume12",
        timer1: "2:56",
        timer2: "3:00",
    }
  }
}
</script>

<style>
  #panneau {
      border-width:10px;
  }
  #chess {
      background-color: transparent;
  }
  .timer {
      font-size: 100px;
  }
  .pseudo {
      color:dimgrey;
  }
</style>