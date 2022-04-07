<template>
  <v-app class= "grey lighten-4">
    <NavBar />
    <FootBar />
    <chessboard />
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FootBar from '@/components/FootBar.vue'
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'

export default {
  name: 'App',
  components: { NavBar, FootBar, chessboard },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
main {
  background-image: url('./assets/wood_background.jpg');
  background-size: cover;
}
</style>
