<template>
  <RoundedCard>
    <div class="p-4 flex flex-row justify-between">
      <slot>Test</slot>
      <newbutton>test</newbutton>
    </div>
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
