<template>
  <div>
    <button
      class="w-full flex justify-between items-center font-semibold"
      @click="open = !open"
    >
      <span :class="isParentActive ? 'text-green-600' : 'text-gray-800'">
        {{ label }}
      </span>
      <span>{{ open ? "−" : "+" }}</span>
    </button>

    <div v-if="open" class="mt-2 space-y-2 pl-4">
      <RouterLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="block text-sm"
        :class="route.path === item.to ? 'text-green-600 font-semibold' : 'text-gray-700'"
        @click="$emit('navigate')"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

defineEmits(["navigate"]);

const props = defineProps<{
  label: string;
  items: { label: string; to: string }[];
}>();

const route = useRoute();
const open = ref(false);

const isParentActive = computed(() =>
  props.items.some((item) => route.path.startsWith(item.to))
);
</script>
