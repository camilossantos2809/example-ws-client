<template>
  <v-dialog v-model="show" max-width="290">
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="#041e42" text @click="onCancel">
          Cancelar
        </v-btn>

        <v-btn color="#041e42" text @click="onConfirm">
          Confirmar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DialogConfirm",
  props: {
    title: String,
    text: String,
    show: Boolean,
    onCancel: Function,
    onConfirm: Function
  }
});
</script>
