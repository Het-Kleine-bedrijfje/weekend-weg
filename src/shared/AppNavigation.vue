<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="red" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index" :to="item.path">
            <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn class="hidden-sm-and-down" :to="{ name:'CitySelector' }">Cities</v-btn>
      <v-btn class="hidden-sm-and-down" :to="{ name:'CitiesPictures' }">Pictures</v-btn>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Weekend weg",
      drawer: false,
      items: [{ title: "Cities", path: "/locations" }, { title: "CitiesPictures", path: "/pictures" }]
    };
  }
};
</script>

<style scoped>
.v-application a {
  color: white;
  text-decoration: none;
}
.v-btn {
  margin: 3px
}
</style>
