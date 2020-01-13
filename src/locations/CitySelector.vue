<template>
  <v-container cols="6">
    <v-row class="voeg-toe-form" dark>
      <v-text-field v-model="nieuweStad" label="Stadsnaam"></v-text-field>
      <v-btn dark bottom @click="AddNewCity(nieuweStad)">Toevoegen</v-btn>
    </v-row>

    <v-row align="center" class="d-md-flex">
      <v-list>
        <template v-for="(stad, index) in steden">
          <v-list-item class="steden-lijst-item" :key="index">
            <v-list-item-content>{{ stad }}</v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CitySelector",
  data() {
    return {
      steden: ["Boedapest", "Edinbrough", "Oosterhout Camping", "Belgrado"],
      nieuweStad: " "
    };
  },
  methods: {
    AddNewCity: nieuweStad => {
      if (nieuweStad == "") {
        alert("Vul een stadsnaam in!");
      } else {
        this.steden.push(nieuweStad);
      }
    }
  }
};
</script>

<style scoped>
.v-btn {
  margin-top: 5px;
}
</style>
