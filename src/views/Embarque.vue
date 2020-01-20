<template>
  <div class="my-2" align="center">
    <v-btn @click="action" class="my-12" color="#041e42" fab x-large dark>
      <div v-if="status">
        <v-icon>pause</v-icon>
      </div>
      <div v-else>
        <v-icon>play_arrow</v-icon>
      </div>
    </v-btn>
    <div class="display-1">
      {{ embarcando }}
    </div>
    <div v-if="status">
      <v-progress-linear indeterminate color="#041e42"></v-progress-linear>
    </div>
    <button-outlined class="mt-12" :title="'Cancelar'" :icon="'clear'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ws from "../plugins/websocket";
import ButtonOutlined from "../components/ButtonOutlined.vue";

export default Vue.extend({
  components: { ButtonOutlined },
  data() {
    return {
      status: false
    };
  },
  computed: {
    embarcando() {
      if (this.status) {
        return "Iniciado";
      }
      return "Pausado";
    }
  },
  methods: {
    action() {
      if (this.status) {
        ws.send(JSON.stringify({ type: "end_embarque" }));
      } else {
        ws.send(JSON.stringify({ type: "start_embarque" }));
      }
      this.status = !this.status;
    }
  },
  mounted() {
    ws.send(JSON.stringify({ type: "status" }));

    ws.onmessage = event => {
      const data = JSON.parse(event.data);
      if (data.type === "status") {
        const status = data.data;
        console.log(status);
        if (status === "boarding") {
          this.status = true;
        } else {
          this.status = false;
        }
      }
    };
  }
});
</script>
