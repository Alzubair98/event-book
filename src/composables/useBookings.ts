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

const bookings = ref<Bookings[]>([]);
const Loading = ref(false);
const bookingsErrors = ref(null);

const fetchBookings = async () => {
  try {
    Loading.value = true;
    bookingsErrors.value = null;
    const response = await fetch("http://localhost:3001/bookings");
    bookings.value = await response.json();
    console.log(bookingsErrors.value);
  } catch (error: any) {
    console.log("Failed to fetch bookins", error);
    bookingsErrors.value = error;
  } finally {
    Loading.value = false;
  }
};

const findBookingById = (id: string): number => {
  return bookings.value.findIndex((b: Bookings) => b.id == id);
};

const handleRegistration = async (event: Event) => {
  if (
    bookings.value.some(
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

  bookings.value.push(newBooking);

  try {
    const response = await fetch("http://localhost:3001/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newBooking, status: "confirmed" }),
    });

    if (response.ok) {
      const index: number = findBookingById(newBooking.id);
      bookings.value[index] = await response.json();
    } else {
      throw new Error("Failed to confrom booking");
    }
  } catch (error) {
    bookings.value = bookings.value.filter(
      (b: Bookings) => b.id != newBooking.id
    );
  }
};

const cancelBooking = async (bookId: string) => {
  const index: number = findBookingById(bookId);
  const originalBookings = bookings[index];
  bookings.value.splice(index, 1);
  try {
    const response = await fetch(`http://localhost:3001/bookings/${bookId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("booking could not be cancelled");
    }
  } catch (error) {
    console.log("Failed to cancel bookings:", error);
    bookings.value.splice(index, 0, originalBookings);
  }
};

export default function useBooking() {
  return {
    bookings,
    Loading,
    fetchBookings,
    handleRegistration,
    findBookingById,
    cancelBooking,
    bookingsErrors,
  };
}
