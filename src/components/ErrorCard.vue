<template>
  <sectionCard>
    <div class="flex flex-col space-y-4 items-center justify-center">
      <div class="text-red-500">
        Could not load <slot></slot> at the moment. Please try again.
      </div>
      <NewButton @click="fetch">Retry Now</NewButton>
    </div>
  </sectionCard>
</template>

<script>
import sectionCard from "./sectionCard.vue";
import NewButton from "./NewButton.vue";

export default {
  name: "ErrorCard",
  props: {
    fetch: {
      type: Function,
      required: true,
    },
  },
  components: {
    sectionCard,
    NewButton,
  },
};
</script>
