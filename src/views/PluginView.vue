<template>
  <v-container>

    <v-progress-linear :active="loading" :indeterminate="loading" absolute top color="deep-purple accent-4">
    </v-progress-linear>
    <v-dialog v-model="drawer" scrollable max-width="80vw">
      <template v-slot:activator="{ on, attrs }">
        <v-container>

          <v-btn color="primary" plain dark v-bind="attrs" v-on="on">
            <v-icon dark>
              mdi-format-list-bulleted-square
            </v-icon>
            查看所有
          </v-btn>
        </v-container>
      </template>
      <v-card>
        <v-card-title>索引</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 80vh;">
          <v-list dense>
            <v-list-item @click="show(item)" v-for="item in metadata" :key="item.name" link>
              <v-list-item-icon>
                <v-icon>mdi-puzzle</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <!-- <v-divider></v-divider>
        <v-card-actions>
          <v-btn text>
            <v-icon>mdi-close</v-icon>
            关闭
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>

    <v-card height="100%" flat>

      <v-card flat height="100%" v-if="selectedItem">
        <v-card-text>
          <v-card-title class="text-h4">
            {{ selectedItem.name }}
          </v-card-title>
          <v-card-subtitle>
            <v-chip outlined color="primary" small v-for="t in selectedItem.tags" :key="t">
              {{ t }}
            </v-chip>
          </v-card-subtitle>
          <v-card-text>
            <h3>下载:</h3>
            <v-card outlined>
              <v-card-text>
                <v-icon>mdi-github</v-icon>
                <a :href="toGitHub(selectedItem.github)" target="_blank">{{
                    selectedItem.github
                }}</a>
              </v-card-text>
            </v-card>
            <h3>CLI:</h3>

            <v-card outlined>
              <v-card-text>
                <v-btn icon @click="copy(toCommand(selectedItem.name))">
                  <v-icon>mdi-clipboard-text-outline</v-icon>
                </v-btn>
                {{ toCommand(selectedItem.name) }}
              </v-card-text>
            </v-card>

            <h3>README:</h3>

            <v-card outlined>
              <v-card-text>
                <div v-html="readme" />
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import { marked } from "marked";
export default {
  data: () => ({
    metadata: null,
    selectedItem: null,
    readme: "",
    drawer: false,
    loading: true,
  }),
  mounted() {
    axios.get("metadata/zh/gc-plugin/index.json").then((res) => {
      this.loading = false;
      this.metadata = res.data;
      console.log(res.data);
      this.show(res.data[0]);
      this.drawer = true;
    });

  },
  methods: {
    show(d) {
      this.selectedItem = d;
      this.drawer = false;

      this.readme = "Loading";
      //https://raw.githubusercontent.com/gc-mojoconsole/gc-mojoconsole-backend/main/README.md

      axios
        .get(
          `https://raw.githubusercontent.com/${this.selectedItem.github}/${this.selectedItem.branch}/README.md`
        )
        .then((res) => {
          console.log(res.data);

          this.readme = marked.parse(res.data);
        });


    },
    toGitHub(g) {
      return `https://github.com/${g}`;
    },
    toCommand(n) {
      return `gc-cli addplu ${n}`;
    },
    copy(t) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(t);
      }
    },
  },
};
</script>

<style>
.v-tab {
  justify-content: flex-start !important;
}
</style>