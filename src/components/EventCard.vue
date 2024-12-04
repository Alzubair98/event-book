<template>
  <div class="border border-gray-800 bg-white rounded-md">
    <h3 class="p-4 font-medium text-xl border-b border-gray-200">
      {{ title }}
    </h3>
    <p class="p-4 border-b border-gray-200">{{ date }}</p>
    <p class="p-4">{{ description }}</p>
    <section class="flex justify-end p-4">
      <button
        class="text-sm font-medium border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100"
        @click="$emit('register')"
      >
        Rigister
      </button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EventCard",
  props: {
    title: String,
    date: String,
    description: String,
  },
  emits: ["register"],

  methods: {},
});
</script>
