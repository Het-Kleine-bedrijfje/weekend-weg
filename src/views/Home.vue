<template>
  <v-container grid-list-xl>
    <v-layout row mt-5 justify-center align-center text-md-center>
      <v-flex xs6>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tincidunt pulvinar mollis. Duis suscipit interdum mauris, eu mollis
          metus consectetur quis. Phasellus euismod, lacus ac tincidunt
          pharetra, arcu lacus pharetra tellus, in finibus orci elit nec nisi.
          Integer eu volutpat nisl. Vestibulum sagittis cursus leo quis mollis.
          Fusce lobortis finibus odio, ac dictum mauris. Praesent tortor orci,
          ultrices eu cursus at, rutrum at tortor.
        </P>
      </v-flex>
      <v-flex ml-5 xs6>
        <app-calendar />
      </v-flex>
      <v-flex xs12>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          tincidunt pulvinar mollis. Duis suscipit interdum mauris, eu mollis
          metus consectetur quis. Phasellus euismod, lacus ac tincidunt
          pharetra, arcu lacus pharetra tellus, in finibus orci elit nec nisi.
          Integer eu volutpat nisl. Vestibulum sagittis cursus leo quis mollis.
          Fusce lobortis finibus odio, ac dictum mauris. Praesent tortor orci,
          ultrices eu cursus at, rutrum at tortor.
        </P>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import AppCalendar from "@/components/AppCalendar";

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
