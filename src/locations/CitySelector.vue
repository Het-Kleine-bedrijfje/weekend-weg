<template>
  <v-container>
    <v-row class="voeg-toe-form" dark>
      <v-text-field v-model="nieuweStad" label="Stadsnaam"></v-text-field>
      <v-btn dark bottom @click="AddCity(nieuweStad)">Toevoegen</v-btn>
    </v-row>
    <v-row align="center" class="d-md-flex">
      <v-list width="500px">
        <template v-for="(stad, index) in steden">
          <v-list-item class="steden-lijst-item" :key="index">
            <v-list-item-content>{{ stad.id }}</v-list-item-content>
            <v-btn x-small class="red" @click="DeleteItem(stad)">X</v-btn>
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
  computed: {},
  firestore: {
    steden: locatieCol.orderBy("stadsnaam")
  },
  methods: {
    AddCity(stad) {
      // stad krijgt hoofdletter en voegt het daarna to aan de steden lijst
      var nieuweStad = stad.charAt(0).toUpperCase() + stad.slice(1);
      if (nieuweStad == "") {
        alert("Vul een stadsnaam in!");
      } else {
        // voeg locatie toe aan firestore
        locatieCol
          .doc(nieuweStad)
          .set({
            stadsnaam: nieuweStad
          })
          .then(function() {
            console.log("Document created");
          })
          .catch(function(error) {
            console.log("Error when creating document: " + error);
          });
        return (this.nieuweStad = "");
      }
    },
    DeleteItem(stad) {
      // delete locatie uit firestor     
      locatieCol
        .doc(stad.id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
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
