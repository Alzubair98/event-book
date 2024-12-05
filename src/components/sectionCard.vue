<template>
  <RoundedCard>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
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
