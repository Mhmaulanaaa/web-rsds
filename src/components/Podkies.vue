<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-14">
        <h2 class="text-3xl font-bold text-gray-900">Podcast RSUD Dr. Soetomo</h2>
        <p class="mt-2 text-gray-600">
          Edukasi & informasi kesehatan dari RSUD Dr. Soetomo
        </p>
      </div>

      <!-- GRID -->
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
          <!-- VIDEO -->
          <div class="relative aspect-video">
            <!-- Thumbnail -->
            <template v-if="playingVideo !== video.id">
              <img
                :src="getThumb(video.id)"
                class="w-full h-full object-cover bg-gray-200"
                @error="onThumbError($event, video.id)"
              />

              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer"
                @click="playVideo(video.id)"
              >
                <div
                  class="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-black shadow-lg"
                >
                  ▶
                </div>
              </div>
            </template>

            <!-- IFRAME -->
            <iframe
              v-else
              :src="`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`"
              class="w-full h-full"
              frameborder="0"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
              "
              allowfullscreen
            ></iframe>
          </div>

          <!-- CONTENT -->
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

      <!-- BUTTON -->
      <div class="text-center mt-14">
        <button
          @click="toggleShow"
          class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
        >
          {{ showAll ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya" }}
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
const playingVideo = ref<string | null>(null);

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

const visibleVideos = computed(() => (showAll.value ? videos : videos.slice(0, 4)));

const toggleShow = () => {
  showAll.value = !showAll.value;
};

const playVideo = (id: string) => {
  playingVideo.value = id;
};

const getThumb = (id: string) => {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

const onThumbError = (e: Event, id: string) => {
  const img = e.target as HTMLImageElement;

  if (img.src.includes("maxresdefault")) {
    img.src = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
  } else if (img.src.includes("sddefault")) {
    img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  } else if (img.src.includes("hqdefault")) {
    img.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
  } else {
    img.src = "/images/thumb-placeholder.jpg"; // lokal
  }
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.45s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
