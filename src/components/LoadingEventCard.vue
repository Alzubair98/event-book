<template>
  <div>
    <rounded-card class="animate-pulse">
      <div class="p-4 border-b border-gray-200 h-8 bg-gray-300"></div>
      <div class="p-4 border-b border-gray-200 h-6 bg-gray-300"></div>
      <div class="p-4 h-6 bg-gray-300"></div>

      <div class="flex justify-end p-10">
        <div class="h-8 w-24 bg-gray-300 rounded-full"></div>
      </div>
    </rounded-card>
  </div>
</template>

<script lang="ts">
import RoundedCard from "./RoundedCard.vue";
export default {
  name: "LoadingCard",
  components: { RoundedCard },
};
</script>
