<template>
  <sectionCard>
    <div class="flex justify-between">
      <div class="flex space-x-2">
        <div><slot></slot></div>
        <div>{{ status }}</div>
      </div>
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
  props: {
    status: String,
  },
});
</script>
