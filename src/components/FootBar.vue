<template>
  <v-footer absolute
    :value="value"
    color="white"
    grow
  >
    <v-btn>
      <span>Règles du jeu</span>

      <v-icon>mdi-file-outline</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn>
      <span>Mentions légales</span>

      <v-icon>mdi-terms</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn>
      <span>Contact</span>

      <v-icon>mdi-card-account-mail</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn>
      <span>Télécharger le code</span>
      <v-icon>mdi-download</v-icon>
    </v-btn>
  </v-footer>
</template>



<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>

<style>
    #footer{
    position:fixed;
    bottom:0;
    }
</style>