<script setup>
import { ref } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
const showPassword = ref(false)
const showConfirmPassword = ref(false)

import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
</script>

<template>
  <AppLayout>
    <template #content>
      <v-row>
        <v-col cols="12" md="6" class="mx-auto pt-10">
          <v-card class="mx-auto" elevation="24" color="orange-darken-2">
            <v-card-title class="text-center">
              <v-img
                class="mx-auto"
                src="/images/logo-favicon.png"
                :width="mobile ? '75%' : '25%'"
              ></v-img>
              <h3 class="font-weight-black">Shirlix Meatshop</h3>
              <p>Registration Form</p>
            </v-card-title>

            <v-card-text class="bg-surface-light pt-4">
              <v-divider class="my-5"></v-divider>
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

                <v-btn
                  color="orange-darken-2"
                  class="mt-2"
                  type="submit"
                  block
                  prepend-icon="mdi-account-plus"
                  >Register</v-btn
                >
                <v-divider class="my-5"></v-divider>
                <h4 class="text-center">
                  Already have account?
                  <RouterLink class="text-primary" to="/">Click here to Login.</RouterLink>
                </h4>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </AppLayout>
</template>
