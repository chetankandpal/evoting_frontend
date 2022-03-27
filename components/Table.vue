<template>
  <v-card>
      <v-card-title>
        Election List  
      <v-spacer></v-spacer>
       </v-card-title>
       
    <v-data-table
    :headers="headers"
    :items="users">
  </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        headers: [

          { text: 'Election Name', value: 'election_name' },
          { text: 'Start Time', value: 'stime' },
          { text: 'End Time', value: 'etime' },
          { text: 'Voters Count', value: 'voters_count' },
        ],
      }
    },
    computed:{
        users(){
            return this.$store.state.users.data;
        }
    },
    async fetch(){

        this.$store.commit(
            "users/storeData",
            (await this.$axios.get("http://localhost:8083/election")).data
        )
    }
  }
</script>

<style>

</style>