<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <template v-if="!eventsLoading">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :date="event.date"
          :description="event.description"
          @register="console.log('Registered!')"
      /></template>
      <template v-else><LoadingEventCard v-for="i in 4" :key="i" /></template>
    </section>

    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="flex flex-col gap-6">
      <BookingCard v-for="i in 3" :key="i">This is the first card</BookingCard>
    </section>
  </main>
</template>

<script lang="ts">
import EventCard from "./components/EventCard.vue";
import BookingCard from "./components/BookingItem.vue";
import LoadingEventCard from "./components/LoadingEventCard.vue";
import { ref } from "vue";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

export default {
  data() {
    return {
      events: ref<Event[]>([]),
      eventsLoading: ref(false),
    };
  },

  components: {
    EventCard,
    BookingCard,
    LoadingEventCard,
  },

  methods: {
    async fetchEvents() {
      try {
        this.eventsLoading = true;
        const response = await fetch("http://localhost:3001/events");
        this.events = await response.json();
      } catch (error) {
        console.log("Failed to fetch events;", error);
      } finally {
        this.eventsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchEvents();
  },
};
</script>
