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
    <dialog-confirm
      title="Aviso!"
      text="Você tem certeza que deseja reiniciar o
    processo?"
      :show="dialog"
      :onConfirm="onConfirm"
      :onCancel="onCancel"
    />
    <button-outlined
      class="mt-12"
      :title="'Cancelar'"
      :icon="'clear'"
      :handleClick="showDialog"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ws from "../plugins/websocket";
import ButtonOutlined from "../components/ButtonOutlined.vue";
import DialogConfirm from "../components/DialogConfirm.vue";

export default Vue.extend({
  components: { ButtonOutlined, DialogConfirm },
  data() {
    return {
      status: false,
      dialog: false
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
    },
    showDialog() {
      this.dialog = true;
    },
    onCancel() {
      this.dialog = false;
    },
    onConfirm() {
      this.dialog = false;
      ws.send(JSON.stringify({ type: "cancel" }));
      this.$router.push("/");
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
      } else if (data.type === "cancel") {
        this.$router.push("/");
      }
    };
  }
});
</script>
