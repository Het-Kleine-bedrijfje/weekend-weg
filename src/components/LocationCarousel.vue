<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(city, i) in locations"
      :key="i"
      :src="city.src"
      :year="city.year"
    >
      <v-row justify="center">
        <div class="display-3">{{ city.name }}</div>
      </v-row>
      <v-row justify="center" align="center">
        <div class="display-3">{{ city.year }}</div>
      </v-row>
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

<style scoped>
</style>