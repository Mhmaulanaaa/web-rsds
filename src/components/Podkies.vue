<template>
  <section class="relative py-10 overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 flex justify-center">
        <img src="../assets/images/podkies.svg" alt="Logo" class="h-40" />
      </div>

      <!-- Podcast Grid -->
      <TransitionGroup
        name="fade-slide"
        tag="div"
        class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <div
          v-for="video in visibleVideos"
          :key="video.id"
          class="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition"
        >
          <!-- Youtube Embed -->
          <div class="aspect-video">
            <iframe
              :src="`https://www.youtube.com/embed/${video.id}`"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>

          <!-- Content -->
          <div class="p-4">
            <h3 class="text-sm font-bold text-gray-900 line-clamp-2">
              {{ video.title }}
            </h3>
            <p class="mt-1 text-xs text-gray-500">
              {{ video.episode }}
            </p>
          </div>
        </div>
      </TransitionGroup>

      <!-- CTA Expand -->
      <div class="text-center mt-14">
        <button
          @click="toggleShow"
          class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg"
        >
          {{ showAll ? "Lihat Lebih Sedikit" : "Lihat Semua Podcast" }}
          <span
            class="transition-transform duration-300"
            :class="showAll ? 'rotate-180' : ''"
          >
            ▼
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const showAll = ref(false);
const limit = 4;

const videos = [
  {
    id: "nUxwzXVx9c0",
    title: "WORLD ANTIMICROBIAL RESISTANCE AWARENESS WEEK",
    episode: "Podcast RSUD Dr. Soetomo",
  },
  {
    id: "oT7Dc6Yui7o",
    title: "UNIT KERJA ORTOTIK PROSTETIK DI RSUD DR. SOETOMO",
    episode: "Podcast RSUD Dr. Soetomo",
  },
  {
    id: "6XauWFkGQKk",
    title:
      "SHORTNESS OF BREATH, REMEMBER COPD! [CHRONIC OBSTRUCTIVE PULMONARY DISEASE DAY]",
    episode: "Podcast RSUD Dr. Soetomo",
  },
  {
    id: "QZwZypCVXy0",
    title: "DIABETES AND WELLBEING [WORLD DIABETES DAY]",
    episode: "Podcast RSUD Dr. Soetomo",
  },
  {
    id: "u2ZX06GDTXk",
    title: "GENERASI SEHAT, MASA DEPAN HEBAT [HARI KESEHATAN NASIONAL 2025]",
    episode: "Podcast RSUD Dr. Soetomo",
  },
  {
    id: "GAGcgPsqG28",
    title:
      "APA YANG HARUS DIKETAHUI ORANG TUA TERHADAP WABAH CAMPAK [WASPADA WABAH CAMPAK]",
    episode: "Podcast RSUD Dr. Soetomo",
  },
  {
    id: "6KHUnR-iwhM",
    title: "EVERY MINUTE COUNTS [WORLD STROKE DAY]",
    episode: "Podcast RSUD Dr. Soetomo",
  },
  {
    id: "izUknyj3nY0",
    title: "PSIKIATRI DAN MITIGASI BENCANA [HARI KESEHATAN JIWA SEDUNIA 2025]",
    episode: "Podcast RSUD Dr. Soetomo",
  },
];

const visibleVideos = computed(() => (showAll.value ? videos : videos.slice(0, limit)));

const toggleShow = () => {
  showAll.value = !showAll.value;
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
