<template>
  <template v-if="error">
    <ErrorCard :fetch="fetchEvents">events</ErrorCard>
  </template>
  <template v-else>
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <template v-if="!Loading">
        <template v-if="events.length">
          <EventCard
            v-for="event in events"
            :key="event.id"
            :title="event.title"
            :date="event.date"
            :description="event.description"
            @register="handleRegistration(event)"
          /> </template
        ><template v-else>
          <div class="col-span-2 text-center text-gray-500">No Events Yet</div>
        </template>
      </template>
      <template v-else>
        <LoadingEventCard v-for="i in 4" :key="i" />
      </template></section
  ></template>
</template>

<script lang="ts">
import { ref } from "vue";
import LoadingEventCard from "./LoadingEventCard.vue";
import EventCard from "./EventCard.vue";
import sectionCard from "./sectionCard.vue";
import NewButton from "./NewButton.vue";
import ErrorCard from "./ErrorCard.vue";
import useBooking from "../composables/useBookings";

const { handleRegistration } = useBooking();

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
      error: ref(null),
      handleRegistration,
    };
  },
  components: {
    EventCard,
    LoadingEventCard,
    sectionCard,
    NewButton,
    ErrorCard,
  },
  methods: {
    async fetchEvents() {
      try {
        this.Loading = true;
        this.error = null;
        const response = await fetch("http://localhost:3001/events");
        this.events = await response.json();
      } catch (error: any) {
        console.log("Failed to fetch events;", error);
        this.error = error;
      } finally {
        this.Loading = false;
      }
    },
  },
  mounted() {
    this.fetchEvents();
  },
};
</script>
