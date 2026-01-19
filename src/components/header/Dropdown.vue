<template>
  <div class="relative group">
    <!-- BUTTON -->
    <button class="flex items-center gap-1 transition" :class="buttonClass">
      {{ label }}
      <i class="fas fa-chevron-down text-xs"></i>
    </button>

    <!-- MENU -->
    <div
      class="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
    >
      <RouterLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="block px-5 py-3 text-sm transition"
        :class="childClass(item.to)"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  label: string;
  scrolled: boolean;
  items: { label: string; to: string }[];
}>();

const route = useRoute();

/* child active */
const isChildActive = (path: string) => route.path === path;

/* parent active jika salah satu child aktif */
const isParentActive = computed(() =>
  props.items.some((item) => route.path.startsWith(item.to))
);

const buttonClass = computed(() => {
  if (isParentActive.value) {
    return "text-green-600 font-semibold";
  }

  return props.scrolled
    ? "text-gray-800 hover:text-green-600"
    : "text-white hover:text-green-300";
});

const childClass = (path: string) => {
  return isChildActive(path)
    ? "bg-gray-100 text-green-600 font-semibold"
    : "text-gray-700 hover:bg-gray-100";
};
</script>
