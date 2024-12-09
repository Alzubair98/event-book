<template>
  <template v-if="eventsErrors">
    <ErrorCard :fetch="fetchEvents">events</ErrorCard>
  </template>
  <template v-else>
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <template v-if="!eventLoading">
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
import LoadingEventCard from "./LoadingEventCard.vue";
import EventCard from "./EventCard.vue";
import sectionCard from "./sectionCard.vue";
import NewButton from "./NewButton.vue";
import ErrorCard from "./ErrorCard.vue";
import useBooking from "../composables/useBookings";

const { fetchEvents, handleRegistration, eventsErrors, eventLoading, events } =
  useBooking();

export default {
  name: "EventList",

  data() {
    return {
      handleRegistration,
      fetchEvents,
      eventsErrors,
      eventLoading,
      events,
    };
  },
  components: {
    EventCard,
    LoadingEventCard,
    sectionCard,
    NewButton,
    ErrorCard,
  },

  mounted() {
    this.fetchEvents();
  },
};
</script>
