<template>
  <div>
    <v-app>
      <v-main>
        <v-app-bar>
         <v-btn to="/" nuxt>
           Home
          </v-btn>
          <v-btn to="/candidate" nuxt>
           Candidate
          </v-btn>
          <v-btn to="/voters" nuxt>
           Voter 
          </v-btn>
          <v-btn to="/start_election" nuxt>
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

};
</script>

<style>

</style>