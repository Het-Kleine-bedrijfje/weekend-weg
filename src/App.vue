<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
    <timer 
         starttime="Dec 22, 2019 00:00:01" 
         endtime="Dec 24, 2019 10:10:00" 
         trans='{  
         "day":"Day",
         "hours":"Hours",
         "minutes":"Minutes",
         "seconds":"Seconds",
         "expired":"Event has been expired.",
         "running":"Till the end of event.",
         "upcoming":"Till start of event.",
         "status": {
            "expired":"Expired",
            "running":"Running",
            "upcoming":"Future"
           }}'>
    </timer>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import Timer from "@/components/CountdownTimer";

export default {
  name: "App",
  components: {
    AppNavigation,
    Timer
  }
};
</script>

<style></style>
