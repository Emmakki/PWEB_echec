<template>
  <nav>
    <v-toolbar flat app>
      
      <v-toolbar-title class="text-uppercase grey--text">
        <v-btn :rippkle="false" text to="/" class="font-weight-light" id="transparant">
          <div id="img">
            <v-img alt="tour" max-height="50" max-width="50" src="../assets/tourNoir.png"></v-img>
          </div>
          <h1>TChess</h1>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row justify="end">
          <v-form>
            <v-col>
            <v-btn class="mr-4" color="primary" v-bind="attrs" v-on="on" depressed>Inscription</v-btn>
            <v-dialog transition="dialog-top-transition" max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" v-bind="attrs" v-on="on" depressed >Connexion</v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="primary" dark>Connexion</v-toolbar>
                  <v-card-text>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field v-model="pass" label="Nom ou Email" required ></v-text-field>
                      <v-text-field v-model="password" label="Mot de passe" :type="'password'" counter required></v-text-field>
                      <v-checkbox v-model="checkbox"   label="remember me"></v-checkbox>
                      <v-btn :disabled="valid" color="success" class="mr-4" @click="validate"> Connexion </v-btn>
                    </v-form>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            </v-col>
         </v-form>
      </v-row>
      <!-- <v-btn flat color="grey">
        <span>Sign Up</span>
      </v-btn>
      <v-btn flat>
        <span>Log In</span>
      </v-btn> -->
    </v-toolbar>


    

  </nav>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
#transparant::before {
   background-color: transparent !important;
}
</style>