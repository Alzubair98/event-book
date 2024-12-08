import { ref } from "vue";

type Bookings = {
  id: string;
  userId: number;
  eventId: string;
  eventTitle: string;
  status: string;
};

const bookings = ref<Bookings[]>([]);
const Loading = ref(false);

const fetchBookings = async () => {
  try {
    Loading.value = true;
    const response = await fetch("http://localhost:3001/bookings");
    bookings.value = await response.json();
  } catch (error) {
    console.log(error);
  } finally {
    Loading.value = false;
  }
};

export default function useBooking() {
  return {
    bookings,
    Loading,
    fetchBookings,
  };
}
