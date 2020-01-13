<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
    <timer 
         starttime="jan 7, 2020 00:00:01" 
         endtime="jan 8, 2020 10:10:00" 
         trans='{  
         "day":"Dagen",
         "hours":"Uren",
         "minutes":"Minuten",
         "seconds":"Secondes",
         "expired":"Het weekend is voorbij.",
         "running":"Tot het weekend eindigt.",
         "upcoming":"Tot het start van het weekend.",
         "status": {
            "expired":"Verlopen",
            "running":"Bezig",
            "upcoming":"Toekomst"
           }}'>
    </timer>
  </v-app>
</template>

<script>
import AppNavigation from "@/shared/AppNavigation";
import Timer from "@/shared/CountdownTimer";

export default {
  name: "App",
  components: {
    AppNavigation,
    Timer
  }
};
</script>

<style></style>
