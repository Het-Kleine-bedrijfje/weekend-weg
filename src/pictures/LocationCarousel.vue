<template>
  <v-carousel align="center" max-height="500" height="auto" width="auto" hide-delimiters>
    <v-carousel-item
      v-for="(city, i) in locations"
      :key="i"
      transition="fade-transition"
    >
      <v-row class=" mb-2 display-3 hidden-sm-and-down" justify="center">{{ city.year }} - {{ city.name }}</v-row>
      <img class="hidden-sm-and-down" :src="city.src" />
      <v-row class=" mb-2 display-1 hidden-sm-and-up" justify="center">{{ city.year }} - {{ city.name }}</v-row>
      <img class="hidden-sm-and-up" :src="city.src" style="height:400px;width:400px" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "LocationCarousel",
  data() {
    return {
      locations: [
        {
          name: "Flevoland",
          year: "2016",
          src: "http://source.unsplash.com/NCvWBn_Uoyk"
        },
        {
          name: "Boedapest",
          year: "2017",
          src: "http://source.unsplash.com/VPETME4zVWM"
        },
        {
          name: "Edinbrough",
          year: "2018",
          src: "http://source.unsplash.com/U4fAZiF_S2A"
        },
        {
          name: "Belgrado",
          year: "2019",
          src: "http://source.unsplash.com/QsAAKQcPfsc"
        },
        {
          name: "?????",
          year: "2020",
          src: "http://source.unsplash.com/i--IN3cvEjg"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
