<template>
  <v-content>
    <v-container>
      <v-form class="px-8">
        <v-row align="center" justify="center">
          <div class="hello display-1">Olá!</div>
        </v-row>
        <v-row align="center" justify="center">
          <date-picker />
        </v-row>
        <v-row align="center" justify="center">
          <select-outlined :items="selectItems" :label="'Aeroporto Curitiba'" />
        </v-row>
        <v-row align="center" justify="center">
          <text-field :label="'Nº do Voo'" />
        </v-row>
        <v-row align="center" justify="center">
          <button-raised
            :title="'Buscar Voo'"
            :icon="'search'"
            :handleClick="buscaVoo"
          />
        </v-row>
        <v-row align="center" justify="center">
          <button-raised :title="'Ativar Desembarque'" :icon="'clear'" />
        </v-row>
      </v-form>
      <v-overlay :value="overlay" justify="center" align="center">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
        <div class="headline">Aguarde a projeção iniciar</div>
      </v-overlay>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import DatePicker from "../components/DatePicker.vue";
import SelectOutlined from "../components/Select.vue";
import TextField from "../components/TextField.vue";
import ButtonRaised from "../components/ButtonRaised.vue";

export default Vue.extend({
  name: "Home",
  components: {
    DatePicker,
    SelectOutlined,
    TextField,
    ButtonRaised
  },
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      selectItems: ["Aeroporto Curitiba", "Aeroporto Campinas"],
      overlay: false
    };
  },
  methods: {
    buscaVoo() {
      this.overlay = true;
    }
  }
});
</script>

<style scoped>
.hello {
  color: #041e42;
}
</style>
