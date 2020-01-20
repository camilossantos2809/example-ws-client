<template>
  <v-select :items="items" :label="label" outlined></v-select>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SelectOutlined",
  props: {
    label: String,
    items: Array
  }
});
</script>
