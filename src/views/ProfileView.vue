<template>
    <v-container>
        <v-row>
            <v-col>
                <v-img alt="profile" max-height="70" max-width="70" src="../assets/profile.jpg"></v-img>
            </v-col>
            <v-col>
                <h1> {{user}}</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
        user: "Didier53",
    }
  }
}
</script>
