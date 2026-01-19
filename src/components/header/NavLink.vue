<template>
  <RouterLink :to="to" class="transition" :class="linkClass">
    {{ label }}
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  label: string;
  to: string;
  scrolled: boolean;
}>();

const route = useRoute();

const isActive = computed(() => route.path === props.to);

const linkClass = computed(() => {
  if (isActive.value) {
    return "text-green-500 font-semibold";
  }

  return props.scrolled
    ? "text-gray-800 hover:text-green-500"
    : "text-white hover:text-green-300";
});
</script>
