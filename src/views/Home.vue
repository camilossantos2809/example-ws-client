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
import ws from "../plugins/websocket";
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
  mounted() {
    ws.onopen = event => ws.send(JSON.stringify({ type: "status" }));

    ws.onmessage = event => {
      this.initEmbarque(event);
      this.validaStatus(event);
    };

    ws.onerror = event => console.error(event);

    // ws.send(JSON.stringify({ type: "status" }));
  },
  methods: {
    buscaVoo() {
      this.overlay = true;
      ws.send(JSON.stringify({ type: "init_embarque" }));
    },
    initEmbarque(event: Event) {
      const data = JSON.parse(event.data);
      if (data.type === "init_embarque") {
        this.$router.push("/embarque");
      }
    },
    validaStatus(event: Event) {
      const data = JSON.parse(event.data);
      if (data.type === "status") {
        const status = data.data;
        if (status === "processing") {
          this.overlay = true;
        } else if (
          status === "initiated" ||
          status === "boarding" ||
          status === "not_boarding"
        ) {
          this.$router.push("/embarque");
        }
      }
    }
  }
});
</script>

<style scoped>
.hello {
  color: #041e42;
}
</style>
