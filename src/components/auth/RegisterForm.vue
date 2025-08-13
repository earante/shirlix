<script setup>
import { ref } from 'vue'

const showPassword = ref(false)
const showConfirmPassword = ref(false)
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field label="First Name" type="text" variant="outlined"></v-text-field>

    <v-text-field label="Last Name" type="text" variant="outlined"></v-text-field>
    <v-text-field label="Email" type="email" variant="outlined"></v-text-field>
    <v-text-field
      label="Password"
      variant="outlined"
      :type="showPassword ? 'text' : 'password'"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="showPassword = !showPassword"
    ></v-text-field>
    <v-text-field
      label="Confirm Password"
      variant="outlined"
      :type="showConfirmPassword ? 'text' : 'password'"
      :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="showConfirmPassword = !showConfirmPassword"
    ></v-text-field>

    <v-btn color="orange-darken-2" class="mt-2" type="submit" block prepend-icon="mdi-account-plus"
      >Register</v-btn
    >
    <v-divider class="my-5"></v-divider>
    <h4 class="text-center">
      Already have account?
      <RouterLink class="text-primary" to="/">Click here to Login.</RouterLink>
    </h4>
  </v-form>
</template>
