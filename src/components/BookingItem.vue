<template>
  <RoundedCard
    class="flex flex-row justify-between border border-gray-200 bg-white rounded-md p-4"
  >
    <slot>Test</slot>
    <newbutton>test</newbutton>
  </RoundedCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import newbutton from "./NewButton.vue";
import RoundedCard from "./RoundedCard.vue";

export default defineComponent({
  name: "BookingCard",
  components: {
    newbutton,
    RoundedCard,
  },
});
</script>
