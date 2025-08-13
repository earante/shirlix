<script setup>
import { ref } from 'vue'
const showPassword = ref(false)
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field
      label="Email"
      type="email"
      variant="outlined"
      prepend-inner-icon="mdi-email"
    ></v-text-field>

    <v-text-field
      label="Password"
      variant="outlined"
      prepend-inner-icon="mdi-lock"
      :type="showPassword ? 'text' : 'password'"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="showPassword = !showPassword"
    ></v-text-field>

    <v-btn color="orange-darken-2" class="mt-2" type="submit" block prepend-icon="mdi-login"
      >Login</v-btn
    >
    <v-divider class="my-5"></v-divider>
    <h4 class="text-center">
      Don't have account?
      <RouterLink class="text-primary" to="/register">Click here to Register.</RouterLink>
    </h4>
  </v-form>
</template>
