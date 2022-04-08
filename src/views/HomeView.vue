<template>
  <div class="home">
      <chessboard />
    <v-btn class = "red white--text">Jouer</v-btn>
    <v-spacer></v-spacer>
    <v-btn right class = "blue white--text">Mon compte</v-btn>
    <v-spacer></v-spacer>
    <v-btn right class = "green white--text">Classement</v-btn>
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
