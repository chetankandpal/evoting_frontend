<template>
  <div>
    <v-app>
      <v-main>
        <v-app-bar>
         <v-btn to="/" id="button" nuxt>
           Home
          </v-btn>
          <v-btn to="/candidate" id="candidateButton"  nuxt>
           Candidate
          </v-btn>
          <v-btn to="/voters" id="votersButton" nuxt>
           Voter 
          </v-btn>
          <v-btn @click="notify()"  nuxt>
            Proceed to Election 
          </v-btn>
        </v-app-bar>
                  <v-container justify="center" align="center"></v-container>
          <client-only>
              <Nuxt/>
          </client-only>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {


 methods:{
   async notify(){
    
    await this.$axios.post("http://localhost:8083/notify/");
     window.location.href="http://localhost:3000/Notified"
   }
 }
};
</script>

<style>

</style>
