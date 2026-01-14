<template>
  <div
    class="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition duration-300"
  >
    <!-- Illustration -->
    <div class="w-full h-40 mb-4">
      <img :src="image" alt="Agenda" class="w-full h-full object-contain" />
    </div>

    <!-- Date -->
    <p class="text-xs text-gray-500 mb-2">
      {{ date }}
    </p>

    <!-- Status Badge -->
    <span
      class="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
      :class="statusClass"
    >
      {{ statusText }}
    </span>

    <!-- Title -->
    <p class="text-sm font-semibold text-green-600 leading-relaxed">
      {{ title }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  date: String,
  status: String,
  image: String,
});

const statusClass = computed(() => {
  return props.status === "selesai"
    ? "bg-red-100 text-red-600"
    : "bg-yellow-100 text-yellow-700";
});

const statusText = computed(() => {
  return props.status === "selesai" ? "Acara Selesai" : "Acara Belum Mulai";
});
</script>
