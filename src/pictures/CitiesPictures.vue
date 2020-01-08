<template>
  <v-container fluid>
    <location-carousel></location-carousel>
  </v-container>
</template>

<script>
import LocationCarousel from "./LocationCarousel";
export default {
  name: "locations",
  components: {
    LocationCarousel
  }
};
</script>
<style scoped></style>
