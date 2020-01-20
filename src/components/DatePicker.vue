<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        label="Data Movimento"
        prepend-icon="event"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable locale="pt-BR">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">Cancelar</v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DatePicker",
  data() {
    return {
      modal: false,
      date: new Date().toISOString().substr(0, 10)
    };
  }
});
</script>
