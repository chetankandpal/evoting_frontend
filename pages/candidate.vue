<template>
    <v-form>
      <br/>
      <h2>Add Candidate</h2>
      <br/>
      <v-text-field v-model="cId"  label="Candidate Id"></v-text-field>
      <v-text-field v-model="name"  label="Candidate Name"></v-text-field>
     <v-btn @click="submit({cId,name,votes})">Submit</v-btn>
  </v-form>
</template>

<script>
export default {

}
</script>

<style>

</style>