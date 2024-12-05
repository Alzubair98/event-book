<template>
  <div
    class="flex flex-row justify-between border border-gray-200 bg-white rounded-md p-4"
  >
    <slot>Test</slot>
    <button
      class="text-sm font-medium border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100"
    >
      Cancel
    </button>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>
