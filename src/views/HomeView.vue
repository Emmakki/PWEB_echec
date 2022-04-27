<template>
  <div class="home">
  <v-container>
    <v-row class="mb-6" justify="space-around">
      <v-col>
        <v-btn to="/play" class = "red white--text">Jouer</v-btn>
      </v-col>
      
      <v-col>
        <v-btn to="/profile" right class = "blue white--text">Mon compte</v-btn>
      </v-col>
      
      <v-col>
        <v-btn to="/classement" right class = "green white--text">Classement</v-btn>
      </v-col>
    </v-row>

  </v-container>

    <v-spacer></v-spacer>
    <v-row justify="space-around">
      <chessboard/>
    </v-row>

  </div>
</template>

<script>
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'


export default {
  name: 'App',
  components: {chessboard},
  data () {
    return {
    }
  }
}
</script>
