<template>
      <v-form>
      <br/>
      <h2>Add Voter</h2>
      <br/>
      <v-text-field v-model="Id"  label="Voter Id"></v-text-field>
      <v-text-field v-model="name"  label="Name"></v-text-field>
      <v-text-field v-model="address"  label="Address"></v-text-field>
      <v-text-field v-model="email"  label="Email"></v-text-field>
     <v-btn @click="submit({Id,name,address,email})">Submit</v-btn>
  </v-form>
</template>

<script>
export default {

}
</script>

<style>

</style>