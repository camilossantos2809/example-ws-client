<template>
  <v-text-field :label="label" :value="value" :hint="hint"></v-text-field>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TextField",
  props: {
    label: String,
    value: String,
    hint: String
  }
});
</script>
