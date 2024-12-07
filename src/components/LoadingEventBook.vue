<template>
  <div>
    <rounded-card class="animate-pulse">
      <div class="flex justify-between p-6">
        <div class="w-64 h-6 bg-gray-300"></div>
        <div class="h-8 w-24 bg-gray-300 rounded-full"></div>
      </div>
    </rounded-card>
  </div>
</template>

<script lang="ts">
import RoundedCard from "./RoundedCard.vue";
export default {
  name: "LoadingBook",
  components: { RoundedCard },
};
</script>
