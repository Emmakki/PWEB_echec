<template>
  <div class="Jouer">


  <template>
    <v-col order-lg >
    <h1 align="center">Choisir un mode de partie</h1>
    </v-col>
  <v-row justify="space-around" align-lg>
      <v-img alt="interro logo" max-height="82" max-width="92" src="../assets/balle.png"></v-img>
      <v-img alt="interro logo" max-height="82" max-width="92" src="../assets/eclair.png"></v-img>
      <v-img alt="interro logo" max-height="82" max-width="92" src="../assets/eclair.png"></v-img>
      <v-img alt="interro logo" max-height="82" max-width="92" src="../assets/chrono.png"></v-img>
      <v-img alt="interro logo" max-height="82" max-width="92" src="../assets/chrono.png"></v-img>
      <v-img alt="interro logo" max-height="82" max-width="92" src="../assets/soleil.png"></v-img>
      </v-row>
    <v-col order-lg>
    <v-radio-group
        v-model="row"
        row
        justify="space-around"
      >
    <v-row justify="space-around" align-lg>
    
        <v-radio
          label="Bullet (1 min)"
          value="radio-1"
        ></v-radio>
        <v-radio
          label="Blitz (3 min)"
          value="radio-2"
        ></v-radio>
        <v-radio
          label="Blitz (5 min)"
          value="radio-3"
        ></v-radio>
        <v-radio
          label="Rapide (10 min)"
          value="radio-4"
        ></v-radio>
        <v-radio
          label="Longue (30 min)"
          value="radio-5"
        ></v-radio>
        <v-radio
          label="Jour ( 1 jour)"
          value="radio-6"
        ></v-radio>
      
    </v-row>
    </v-radio-group>
    </v-col>
      <v-col lg>
    <v-row justify="space-around" align-xl>
    
    <h1>Adversaire</h1>
    
  
    
    </v-row>
    </v-col>
    <v-col lg>
    <v-row justify="space-around">  
    <v-img alt="ami logo" max-height="82" max-width="92" src="../assets/friends.png"></v-img>
    <v-img alt="interro logo" max-height="82" max-width="92" src="../assets/Interro.png"></v-img>
    </v-row>
  
    <v-row justify="space-around" align-xl>
          <v-btn color="primary"  dark v-bind="attrs"  v-on="on" >Jouer contre un ami</v-btn>
          <v-btn color="primary"  dark v-bind="attrs"  v-on="on" >Aleatoire</v-btn>
            </v-row >
            <v-row justify="space-around">
              <h1>Couleur</h1> 
              </v-row>
              <v-row justify="space-around">  
    <v-img alt="noirblanc logo" max-height="82" max-width="92" src="../assets/noirblanc.png"></v-img>
    <v-img alt="interro logo" max-height="82" max-width="92" src="../assets/Interro.png"></v-img>
    </v-row>
          <v-row justify="space-around" align-xl>
          <v-switch
        v-model="blanc"
        inset
        :label="`Blanc ou Noir`"
        color="black"
      ></v-switch>
  <v-checkbox label="Aleatoire" v-model="value" value="value"></v-checkbox>

    </v-row >
  </v-col>
  <v-btn to="/game" class = "red white--text" block>Jouer</v-btn>
  </template>
</div>

</template>

<script>
export default {
   data () {
      return {
        switch1: true,
        switch2: false,
      }
    },
}
 
</script>