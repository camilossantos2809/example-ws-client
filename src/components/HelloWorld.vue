<template>
  <v-container>
    <v-card>
      <v-list two-line>
        <v-list-item-group
          v-model="selected"
          multiple
          active-class="green--text"
        >
          <template v-for="(item, index) in items">
            <v-list-item :key="item.cod">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-content>
                  <v-list-item-title v-text="item.cod"></v-list-item-title>
                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.desc"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text
                    v-text="item.action"
                  ></v-list-item-action-text>
                  <v-icon v-if="!active" color="grey lighten-1">
                    star_border
                  </v-icon>

                  <v-icon v-else color="yellow">
                    star
                  </v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "HelloWorld",

  data() {
    return {
      items: [],
      selected: [1]
    };
  },
  async mounted() {
    const voos = await axios.get("http://localhost:3000/voos");
    this.items.push(...voos.data);
  }
});
</script>
