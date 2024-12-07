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
          @register="handleRegistration(event)"
      /></template>
      <template v-else>
        <LoadingEventCard v-for="i in 4" :key="i" />
      </template>
    </section>

    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="flex flex-col gap-6">
      <template v-if="!eventsLoading">
        <BookingCard v-for="book in bookings" :key="book.id">{{
          book.eventTitle
        }}</BookingCard>
      </template>
      <template v-else>
        <loadingEventBook v-for="i in 2" :key="i" />
      </template>
    </section>
  </main>
</template>

<script lang="ts">
import EventCard from "./components/EventCard.vue";
import BookingCard from "./components/BookingItem.vue";
import LoadingEventCard from "./components/LoadingEventCard.vue";
import LoadingEventBook from "./components/LoadingEventBook.vue";
import { ref } from "vue";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

type Bookings = {
  id: string;
  userId: number;
  eventId: string;
  eventTitle: string;
};

export default {
  data() {
    return {
      events: ref<Event[]>([]),
      eventsLoading: ref(false),
      bookings: ref<Bookings[]>([]),
    };
  },

  components: {
    EventCard,
    BookingCard,
    LoadingEventCard,
    LoadingEventBook,
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

    async handleRegistration(event: Event) {
      const newBooking: {
        id: string;
        userId: number;
        eventId: string;
        eventTitle: string;
      } = {
        id: Date.now().toString(),
        userId: 1,
        eventId: event.id,
        eventTitle: event.title,
      };
      try {
        await fetch("http://localhost:3001/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...newBooking }),
        });
        console.log("sending done");
      } catch (error) {
        console.log(error);
      }
    },

    async fetchBookings() {
      try {
        this.eventsLoading = true;
        const response = await fetch("http://localhost:3001/bookings");
        this.bookings = await response.json();
      } catch (error) {
        console.log(error);
      } finally {
        this.eventsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchEvents();
    this.fetchBookings();
  },
};
</script>
