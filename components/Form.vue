<template>
  <v-form>
      <br/>
      <h2>Add Election</h2>
      <br/>
      <v-text-field v-model="election_name"  label="Election Name"></v-text-field>
      <v-text-field v-model="stime"  label="Start Time"></v-text-field>
      <v-text-field v-model="etime" label="End Time"></v-text-field>
      <v-text-field v-model="voters_count" label="Voters Count"></v-text-field>
     <v-btn @click="submit({election_name,stime,etime,voters_count})">Submit</v-btn>
  </v-form>
</template>

<script>  
export default {
    computed:{
        election_name:{
            get(){
                console.log(this.$store.state.user.election_name);
                return this.$store.state.user.election_name;
            },
            set(value){
                console.log(value)
                this.$store.commit("user/storeElection_Name",value)
            },
        },
        stime:{
            get(){
                console.log(this.$store.state.user.stime);
                return this.$store.state.user.stime;
            },
            set(value){
                this.$store.commit("user/storeStart_Time",value)
            },
        },
        etime:{
            get(){
                return this.$store.state.user.etime;
            },
            set(value){
                this.$store.commit("user/storeEnd_Time",value)
            },
        },

        voters_count:{
            get(){
                return this.$store.state.user.voters_count;
            },
            set(value){
                this.$store.commit("user/storeVoters_Count",value)
            },
        },
    },
    methods:{
       async submit(user){
           console.log(user);
            await this.$axios.post("http://localhost:8083/election/",user);
        
      await  this.restForm({Election_Name:"",Start_Time:"",End_Time:"",Voters_Count:0});

        this.$store.commit(
         "users/storeData",
         (await this.$axios.get("http://localhost:8083/election/")).data

     );
  
    },
    restForm(user){
        this.$store.commit("user/storeElection_Name",user.Election_Name);
        this.$store.commit("user/storeStart_Time",user.Start_Time);
        this.$store.commit("user/storeEnd_Time",user.End_Time);
        this.$store.commit("user/storeVoters_Count",user.Voters_Count);
         
    },


 },
};
</script>

<style> 

</style>