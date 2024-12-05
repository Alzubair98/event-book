<template>
  <RoundedCard>
    <h3 class="p-4 font-medium text-xl border-b border-gray-200">
      <slot name="header"></slot>
    </h3>
    <div class="p-4 border-b border-gray-200">
      <slot></slot>
    </div>

    <div class="p-4">
      <slot name="footer"></slot>
    </div>
  </RoundedCard>
</template>

<script lang="ts">
import RoundedCard from "./RoundedCard.vue";
export default {
  name: "sectionCard",
  components: {
    RoundedCard,
  },
};
</script>
