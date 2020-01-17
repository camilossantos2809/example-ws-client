<template>
  <v-app>
    <v-app-bar app color="#041e42" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="d-flex shrink mr-2 align-center"
          contain
          src="https://www.voeazul.com.br/en/img/1466430298038-azul-logo-color.svg"
          transition="scale-transition"
          width="80"
        />
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  })
});
</script>
