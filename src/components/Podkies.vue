<template>
  <section class="relative py-32 overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Podcast Kesehatan</h2>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Dengarkan obrolan inspiratif seputar kesehatan, layanan, dan edukasi bersama
          tenaga medis RSUD Dr. Soetomo
        </p>
      </div>

      <!-- Podcast Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <a
          v-for="podcast in podcasts"
          :key="podcast.title"
          :href="podcast.link"
          target="_blank"
          rel="noopener"
          class="group block bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition"
        >
          <!-- Thumbnail -->
          <div class="relative aspect-video">
            <img :src="podcast.thumbnail" alt="" class="w-full h-full object-cover" />

            <!-- Play Overlay -->
            <div
              class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
            >
              <div
                class="w-14 h-14 bg-white rounded-full flex items-center justify-center"
              >
                ▶
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-4">
            <h3
              class="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-green-700 transition"
            >
              {{ podcast.title }}
            </h3>

            <p class="mt-2 text-xs text-gray-500">
              {{ podcast.date }}
            </p>
          </div>
        </a>
      </div>

      <!-- CTA -->
      <div class="text-center mt-14">
        <a
          href="https://www.youtube.com"
          target="_blank"
          class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg"
        >
          Lihat Semua Podcast
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const podcasts = [
  {
    title: "Podcast Kesehatan: Pentingnya Deteksi Dini Penyakit Jantung",
    date: "Episode 01",
    link: "https://youtu.be/QZwZypCVXy0?si=h7iXB_SS_r6n9jiU",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg",
  },
  {
    title: "Obrolan Sehat: Pola Hidup Sehat di Era Modern",
    date: "Episode 02",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg",
  },
  {
    title: "Podcast Medis: Mengenal Layanan Kanker Terpadu",
    date: "Episode 03",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg",
  },
  {
    title: "Edukasi Kesehatan: Manajemen Stres & Mental Health",
    date: "Episode 04",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_4",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID_4/hqdefault.jpg",
  },
  {
    title: "Talkshow RSUD Soetomo: Transformasi Digital Rumah Sakit",
    date: "Episode 05",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_5",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID_5/hqdefault.jpg",
  },
];
</script>
