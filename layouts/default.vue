<template>
  <div>
    <v-app>
      <v-main>
        <v-app-bar>
          <v-app-bar-title> Home </v-app-bar-title>
          <v-btn>
            <NuxtLink to="/candidate">Candidate page</NuxtLink>
          </v-btn>
          <v-btn>
            <NuxtLink to="/voters">Voter page</NuxtLink>
          </v-btn>
          <v-btn>
            <NuxtLink to="/start_election">Start Election</NuxtLink>
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