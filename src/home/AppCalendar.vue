<template>
  <v-col>
    <v-sheet height="64">
      <v-toolbar flat color="white">
        <v-btn fab text small @click="prev">
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab text small @click="next">
          <v-icon small>mdi-chevron-right</v-icon>
        </v-btn>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
    </v-sheet>
    <v-sheet height="350">
      <v-calendar
        ref="calendar"
        v-model="focus"
        :type="type"
        :now="today"
        color="primary"
        :event-color="getEventColor"
        :events="events"
        @change="updateRange"
      ></v-calendar>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    today: null,
    focus: null,
    type: "month",
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [
      {
        name: "Weekend van Plezier",
        start: "2019-12-01",
        end: "2019-12-15",
        color: "blue"
      }
    ]
  }),
  computed: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const startMonth = this.monthFormatter(start);
      const startYear = start.year;
      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    }
  },
  methods: {
    getEventColor(event) {
      return event.color;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    updateRange({ start, end }) {
      // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    }
  }
};
</script>

<style scoped></style>
