<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->

      <!-- <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle> -->

      <v-img src="images/grasscutters.webp" />

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>GrassCutter 资源站</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      // { title: "资讯", icon: "mdi-view-dashboard" ,to:"/"},
      { title: "GrassCutter", icon: "mdi-language-java", to: "/" },

      // { title: "GrassCutter", icon: "mdi-language-java" ,to:"/gc"},
      { title: "Resources", icon: "mdi-file", to: "/res" },
      { title: "Plugins", icon: "mdi-puzzle", to: "/plugins" },
      { title: "Packages", icon: "mdi-cube", to: "/packages" },
      { title: "一键脚本", icon: "mdi-script", to: "/script" },
      { title: "关于", icon: "mdi-help-box", to: "/about" },
    ],
    right: null,
  }),
};
</script>
<style>
body {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

img {
  max-width: 100%;
}
code {
  background-color: transparent !important;;
}

pre {
  background: rgba(0, 0, 0, .05);
  border-radius: 10px;
  overflow-x: auto !important;
  padding: 10px;
}
</style>