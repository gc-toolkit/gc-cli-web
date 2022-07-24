<template>
  <v-card flat height="100%">
    <v-card-text>
      <div v-html="readme"></div>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
import { marked } from "marked";

export default {
  data() {
    return {
      readme: "",
    };
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/gc-toolkit/GPM-Index/main/README.md"
      )
      .then((res) => {
        this.readme = marked.parse(res.data);
        console.log(res.data);
      });
  },
};
</script>
