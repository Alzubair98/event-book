<template>
  <sectionCard>
    <template #header>{{ title }}</template>
    {{ date }}
    <template #footer>
      <p>{{ description }}</p>
      <div class="flex justify-end p-4">
        <newbutton label="Rigster" @click="$emit('register')"
          >Rigster</newbutton
        >
      </div></template
    >
  </sectionCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import newbutton from "./NewButton.vue";
import sectionCard from "./sectionCard.vue";

export default defineComponent({
  name: "EventCard",
  components: {
    newbutton,
    sectionCard,
  },
  props: {
    title: String,
    date: String,
    description: String,
  },
  emits: ["register"],
});
</script>
