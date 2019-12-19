<template>
  <v-sheet height="250" width="350">
    <v-calendar
      type="month"
      now="2020-08-05"
      value="2020-08-05"
      :events="events"
    ></v-calendar>
  </v-sheet>
</template>

<script>
export default {
  name: "AppCalendar",
  data: () => ({
    events: [

      ]
  })
};
</script>

<style scoped></style>
