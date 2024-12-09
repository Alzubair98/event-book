<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <EventList />
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="flex flex-col gap-6">
      <template v-if="!Loading">
        <BookingCard
          v-for="book in bookings"
          :key="book.id"
          :status="book.status"
          @canceld="cancelBooking(book.id)"
          >{{ book.eventTitle }}</BookingCard
        >
      </template>
      <template v-else>
        <loadingEventBook v-for="i in 2" :key="i" />
      </template>
    </section>
  </main>
</template>

<script lang="ts">
import BookingCard from "./components/BookingItem.vue";
import LoadingEventBook from "./components/LoadingEventBook.vue";
import EventList from "./components/EventList.vue";
import useBooking from "./composables/useBookings";

const {
  bookings,
  Loading,
  fetchBookings,
  handleRegistration,
  findBookingById,
  cancelBooking,
} = useBooking();

export default {
  data() {
    return {
      bookings,
      Loading,
      fetchBookings,
      handleRegistration,
      findBookingById,
      cancelBooking,
    };
  },

  components: {
    BookingCard,
    LoadingEventBook,
    EventList,
  },

  mounted() {
    this.fetchBookings();
  },
};
</script>
