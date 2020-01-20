<template>
  <v-app>
    <v-app-bar app color="#041e42" dark>
      <div justify="center" align="center">
        <v-img
          alt="Logo"
          justify="center"
          align="center"
          contain
          src="https://www.voeazul.com.br/en/img/1466430298038-azul-logo-color.svg"
          transition="scale-transition"
          width="80"
        />
      </div>
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
