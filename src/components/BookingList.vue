<template>
  <template v-if="bookingsErrors">
    <ErrorCard :fetch="fetchBookings">bookings</ErrorCard>
  </template>
  <template v-else>
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
</template>

<script>
import useBooking from "../composables/useBookings";
import BookingCard from "./BookingItem.vue";
import loadingEventBook from "./LoadingEventBook.vue";
import ErrorCard from "./ErrorCard.vue";
import sectionCard from "./sectionCard.vue";
import NewButton from "./NewButton.vue";

const { bookings, Loading, bookingsErrors, cancelBooking, fetchBookings } =
  useBooking();
export default {
  name: "BookingList",
  data() {
    return {
      Loading,
      bookings,
      cancelBooking,
      fetchBookings,
      bookingsErrors,
    };
  },
  components: {
    BookingCard,
    loadingEventBook,
    sectionCard,
    NewButton,
    ErrorCard,
  },

  mounted() {
    this.fetchBookings();
  },
};
</script>
