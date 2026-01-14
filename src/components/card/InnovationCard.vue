<template>
  <div class="flex flex-col items-center text-center">
    <!-- Image -->
    <div class="w-full h-40 rounded-xl overflow-hidden mb-3 bg-gray-100">
      <img
        :src="image"
        alt="Inovasi"
        class="w-full h-full object-cover hover:scale-105 transition duration-300"
      />
    </div>

    <!-- Title -->
    <p class="text-sm font-semibold text-green-600 leading-snug">
      {{ title }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>
