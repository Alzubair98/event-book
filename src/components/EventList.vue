<template>
  <section class="grid grid-cols-2 gap-8">
    <template v-if="!Loading">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :date="event.date"
        :description="event.description"
        @register="$emit('register', event)"
    /></template>
    <template v-else>
      <LoadingEventCard v-for="i in 4" :key="i" />
    </template>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";
import LoadingEventCard from "./LoadingEventCard.vue";
import EventCard from "./EventCard.vue";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

export default {
  name: "EventList",

  data() {
    return {
      events: ref<Event[]>([]),
      Loading: ref(false),
    };
  },
  components: {
    EventCard,
    LoadingEventCard,
  },
  methods: {
    async fetchEvents() {
      try {
        this.Loading = true;
        const response = await fetch("http://localhost:3001/events");
        this.events = await response.json();
      } catch (error) {
        console.log("Failed to fetch events;", error);
      } finally {
        this.Loading = false;
      }
    },
  },
  mounted() {
    this.fetchEvents();
  },
  emits: ["register"],
};
</script>
