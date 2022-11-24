<template>
  <v-card>
    <v-card-title>
      Election List
      <v-spacer></v-spacer>
    </v-card-title>

    <v-data-table :headers="headers" :items="users"> </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Election Name", value: "electionname" },
        { text: "Start Time", value: "stime" },
        { text: "End Time", value: "etime" },
        { text: "Voters Count", value: "voterscount" },
      ],
    };
  },
  computed: {
    users() {
      return this.$store.state.users.data;
    },
  },
  async fetch() {

    const resp=(await this.$axios.get("http://localhost:8083/election")).data
   // Changes for displaying dates for all elections

    var count = Object.keys(resp).length;
   
    for(var i=0;i<count;i++){
    var d=new Date(resp[i].stime).toUTCString();
     console.log(resp[i].stime+" dd");
    d=d.split(' ').slice(0,5).join(' ');
    resp[i].stime=d;
    d=new Date(resp[i].etime).toUTCString();
    d=d.split(' ').slice(0,5).join(' ');
    resp[i].etime=d;
    }
 
    this.$store.commit(
      "users/storeData",
      resp
    );
  },
};
</script>

<style>
</style>
