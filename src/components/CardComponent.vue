<template>
  <div
    class="flex flex-row justify-between border border-gray-200 bg-white rounded-md p-4"
  >
    <slot>Test</slot>
    <newbutton>test</newbutton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import newbutton from "./NewButton.vue";

export default defineComponent({
  name: "Card",
  components: {
    newbutton,
  },
});
</script>
