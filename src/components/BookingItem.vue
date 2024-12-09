<template>
  <sectionCard>
    <div class="flex justify-between">
      <div class="flex space-x-2">
        <div><slot></slot></div>
        <div>
          {{ status
          }}<component :is="icon" :class="{ 'animate-spin': pending }" />
        </div>
      </div>
      <newbutton variant="danger" @click="$emit('canceld')">Cancel</newbutton>
    </div>
  </sectionCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import newbutton from "./NewButton.vue";
import sectionCard from "./sectionCard.vue";
import { LoaderPinwheel, Check } from "lucide-vue-next";

export default defineComponent({
  name: "BookingCard",
  components: {
    newbutton,
    sectionCard,
    LoaderPinwheel,
    Check,
  },
  props: {
    status: String,
  },
  emits: ["canceld"],
  computed: {
    pending(): boolean {
      return this.status === "pending";
    },
    icon() {
      return this.pending ? LoaderPinwheel : Check; //timer
    },
  },
});
</script>
