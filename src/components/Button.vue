<template>
  <button
    class="text-sm font-medium border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100"
    @click="$emit('register')"
  >
    Rigister
  </button>
</template>

<script lang="ts">
export default {
  name: "button",
  props: {
    label: String,
  },
};
</script>
