<template>
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
</template>

<script>
import useBooking from "../composables/useBookings";
import BookingCard from "./BookingItem.vue";
const { bookings, Loading, cancelBooking } = useBooking();
export default {
  name: "BookingList",
  data() {
    return {
      Loading,
      bookings,
      cancelBooking,
    };
  },
  components: {
    BookingCard,
  },
  mounted() {
    this.fetchBookings();
  },
};
</script>
