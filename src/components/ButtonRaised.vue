<template>
  <div class="my-2">
    <v-btn color="#041e42" dark @click="handleClick">
      <v-icon left>{{ icon }}</v-icon>
      {{ title }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ButtonRaised",
  props: {
    title: String,
    icon: String,
    handleClick: Function
  }
});
</script>
