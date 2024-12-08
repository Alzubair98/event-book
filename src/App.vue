<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <EventList @register="handleRegistration($event)" />
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="flex flex-col gap-6">
      <template v-if="!bookingLoading">
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
import { ref } from "vue";

type Bookings = {
  id: string;
  userId: number;
  eventId: string;
  eventTitle: string;
  status: string;
};
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
      bookings: ref<Bookings[]>([]),
      bookingLoading: ref(false),
    };
  },

  components: {
    BookingCard,
    LoadingEventBook,
    EventList,
  },

  methods: {
    async handleRegistration(event: Event) {
      if (
        this.bookings.some(
          (book: Bookings) => book.eventId == event.id && book.userId == 1
        )
      ) {
        alert("You are already registered for this event.");
        return;
      }

      const newBooking: Bookings = {
        id: Date.now().toString(),
        userId: 1,
        eventId: event.id,
        eventTitle: event.title,
        status: "pending",
      };

      this.bookings.push(newBooking);

      try {
        const response = await fetch("http://localhost:3001/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...newBooking, status: "confirmed" }),
        });

        if (response.ok) {
          const index: number = this.findBookingById(newBooking.id);
          this.bookings[index] = await response.json();
        } else {
          throw new Error("Failed to confrom booking");
        }
      } catch (error) {
        this.bookings = this.bookings.filter(
          (b: Bookings) => b.id != newBooking.id
        );
      }
    },
    findBookingById(id: string): number {
      return this.bookings.findIndex((b: Bookings) => b.id == id);
    },

    async fetchBookings() {
      try {
        this.bookingLoading = true;
        const response = await fetch("http://localhost:3001/bookings");
        this.bookings = await response.json();
      } catch (error) {
        console.log(error);
      } finally {
        this.bookingLoading = false;
      }
    },

    async cancelBooking(bookId: string) {
      const index: number = this.findBookingById(bookId);
      const originalBookings = this.bookings[index];
      this.bookings.splice(index, 1);
      try {
        const response = await fetch(
          `http://localhost:3001/bookings/${bookId}`,
          { method: "DELETE" }
        );

        if (!response.ok) {
          throw new Error("booking could not be cancelled");
        }
      } catch (error) {
        console.log("Failed to cancel bookings:", error);
        this.bookings.splice(index, 0, originalBookings);
      }
    },
  },
  mounted() {
    this.fetchBookings();
  },
};
</script>
