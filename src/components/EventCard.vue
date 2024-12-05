<template>
  <rounded-card>
    <h3 class="p-4 font-medium text-xl border-b border-gray-200">
      {{ title }}
    </h3>
    <p class="p-4 border-b border-gray-200">{{ date }}</p>
    <p class="p-4">{{ description }}</p>
    <section class="flex justify-end p-4">
      <newbutton label="Rigster" @click="$emit('register')">Rigster</newbutton>
    </section>
  </rounded-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import newbutton from "./NewButton.vue";
import RoundedCard from "./RoundedCard.vue";

export default defineComponent({
  name: "EventCard",
  components: {
    newbutton,
    RoundedCard,
  },
  props: {
    title: String,
    date: String,
    description: String,
  },
  emits: ["register"],

  methods: {},
});
</script>
