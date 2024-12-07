<template>
  <sectionCard>
    <div class="flex justify-between">
      <slot></slot>
      <newbutton variant="danger">Cancel</newbutton>
    </div>
  </sectionCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import newbutton from "./NewButton.vue";
import sectionCard from "./sectionCard.vue";

export default defineComponent({
  name: "BookingCard",
  components: {
    newbutton,
    sectionCard,
  },
});
</script>
