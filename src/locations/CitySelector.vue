<template>
  <v-container>
    <v-row class="voeg-toe-form" dark>
      <v-text-field v-model="nieuweStad" label="Stadsnaam"></v-text-field>
      <v-btn dark bottom @click="CheckArray(nieuweStad)">Toevoegen</v-btn>
    </v-row>
    <v-row align="center" class="d-md-flex">
      <v-list width="500px">
        <template v-for="(stad, index) in steden">
          <v-list-item class="steden-lijst-item" :key="index">
            <v-list-item-content>{{ stad }}</v-list-item-content>
            <v-btn x-small class="red" @click="DeleteItem(index)">X</v-btn>
          </v-list-item>
        </template>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
import { locatieCol } from "../firebase/db";

export default {
  name: "CitySelector",
  data() {
    return {
      nieuweStad: "",
      steden: []
    };
  },
  /* eslint-disable no-console */
  computed: {

  },
  firestore: {
    steden: locatieCol
  },
  methods: {
    AddCity(stad) {
      // stad krijgt hoofdletter en voegt het daarna to aan de steden lijst
      if (stad == "") {
        alert("Vul een stadsnaam in!");
      } else {
        this.$store.commit("AddNewCity", stad);
        return (this.nieuweStad = "");
      }
    },
    CheckArray(checkStad) {
      var stad = checkStad.charAt(0).toUpperCase() + checkStad.slice(1);
      const stedenLijst = this.$store.state.steden;
      if (stedenLijst.includes(stad)) {
        alert(stad + " zit al in deze lijst!");
      } else {
        this.AddCity(stad);
      }
    },
    DeleteItem(index) {
      this.$store.commit("DeleteItem", index);
    }
    /* eslint-enable no-console */
  }
};
</script>

<style scoped>
.v-btn {
  margin-top: 5px;
}
</style>
