<template>
  <div class="home">
  <v-row justify="space-around">
<v-btn class = "red white--text">Jouer</v-btn>

    <v-btn right class = "blue white--text">Mon compte</v-btn>

    <v-btn right class = "green white--text">Classement</v-btn>
    </v-row>
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
