<template>
  <v-container grid-list-xl>
    <v-row align="center" class="d-block d-md-flex">
      <v-col>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tincidunt pulvinar mollis. Duis suscipit interdum mauris, eu mollis
          metus consectetur quis. Phasellus euismod, lacus ac tincidunt
          pharetra, arcu lacus pharetra tellus, in finibus orci elit nec nisi.
          Integer eu volutpat nisl. Vestibulum sagittis cursus leo quis mollis.
          Fusce lobortis finibus odio, ac dictum mauris. Praesent tortor orci,
          ultrices eu cursus at, rutrum at tortor.
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
