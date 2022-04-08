<template>
  <div class="Jouer">


  <template>
  <v-col order-lg >
  <h1>Choisir un mode de partie</h1>
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
  <v-row justify="space-around" align-lg>
  
    <v-switch
      v-model="switch1"
      inset
      :label="`Bullet (1 min)`"
    ></v-switch>
    
    <v-switch
      v-model="switch2"
      inset
      :label="`blitz (3 min) `"
    ></v-switch>
     
     <v-switch
      v-model="switch3"
      inset
      :label="`Blitz (5 min)`"
    ></v-switch>
    
    <v-switch
      v-model="switch4"
      inset
      :label="`Rapide (10 min)`"
    ></v-switch>
     
     <v-switch
      v-model="switch5"
      inset
      :label="`Longue (30 min)`"
    ></v-switch>
    
    <v-switch
      v-model="switch6"
      inset
      :label="`Jour ( 1 jour)`"
    ></v-switch>
     
  </v-row>
  </v-col>
    <v-col lg>
   <v-row justify="space-around" align-xl>
   
  <h1>Adersaire</h1>
  
 
  
  </v-row>
  </v-col>
  <v-col lg>
   <v-row justify="space-around">  
  <v-img alt="ami logo" max-height="82" max-width="92" src="../assets/friends.png"></v-img>
  <v-img alt="interro logo" max-height="82" max-width="92" src="../assets/Interro.png"></v-img>
  </v-row>
 
  <v-row justify="space-around" align-xl>
        <v-btn color="primary"  dark v-bind="attrs"  v-on="on" >Jouer contre un ami</v-btn>
        <v-btn color="primary"  dark v-bind="attrs"  v-on="on" >aleatoire</v-btn>
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
      :label="`blanc ou noir`"
      color="black"
    ></v-switch>
 <v-checkbox label="aleatoire" v-model="value" value="value"></v-checkbox>

  </v-row >
 </v-col>
</template>
  <v-btn class = "red white--text" block>Jouer</v-btn>
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
