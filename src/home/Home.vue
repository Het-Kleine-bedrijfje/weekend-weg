<template>
  <v-container grid-list-xl>
    <v-row align="center" class="d-block d-md-flex">
      <v-col>
        <P>
          Het is weer zover ons jaarlijks weekend weg met elkaar. 
          Ieder jaar proberen we elkaar weer te verrassen met unieke tripjes 
          naar plekken waar niemand van ons is geweest. 
          Waar we dit jaar naartoe gaan is nog een verassing, maar verscheidene
          tips zullen volgen op deze site. Daarnaast kan je ook aangeven waar je
          niet naar toe wil, zodat de organisatie daar rekening mee kan houden.
        </P>
      </v-col>
      <v-col>
        <app-calendar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import AppCalendar from "./AppCalendar";

export default {
  name: "home",
  components: {
    AppCalendar
  }
};
</script>

<style scoped>
.row {
  display: flex;
}
</style>
