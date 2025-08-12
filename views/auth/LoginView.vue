<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar color="grey-lighten-1" class="px-3">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto pt-10">
              <v-card class="mx-auto" prepend-icon="mdi-login" subtitle="Login" elevation="24">
                <template v-slot:title>
                  <span class="font-weight-black">Shirlix Meatshop</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field
                      label="Email"
                      type="email"
                      variant="outlined"
                      prepend-inner-icon="mdi-email"
                    ></v-text-field>

                    <v-text-field
                      label="Password"
                      type="password"
                      variant="outlined"
                      prepend-inner-icon="mdi-lock"
                    ></v-text-field>

                    <v-btn color="primary" class="mt-2" type="submit" block>Login</v-btn>
                    <v-divider class="my-5"></v-divider>
                    <h4 class="text-center">
                      Don't have account?
                      <RouterLink class="text-primary" to="/register"
                        >Click here to Register</RouterLink
                      >
                    </h4>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-footer color="grey-lighten-1" border app>2025 - Shirlix Meatshop</v-footer>
    </v-app>
  </v-responsive>
</template>
