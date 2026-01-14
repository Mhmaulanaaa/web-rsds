<template>
  <section class="relative overflow-hidden py-28">
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- HEADER CENTER -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Agenda</h2>
        <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
          Jadwal kegiatan, pelatihan, dan agenda resmi RSUD Dr. Soetomo
        </p>

        <div class="mt-6">
          <a
            href="https://sicerdas.kemkes.go.id"
            target="_blank"
            class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-7 py-3 rounded-full shadow-lg transition"
          >
            Website SICERDAS
            <span class="text-base">↗</span>
          </a>
        </div>
      </div>

      <!-- GRID DEMPET + CENTER -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center"
      >
        <AgendaCard
          v-for="agenda in agendas"
          :key="agenda.title"
          v-bind="agenda"
          class="w-full max-w-sm bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AgendaCard from "./card/AgendaCard.vue";

const agendas = [
  {
    date: "26 September 2025 – 04 Oktober 2025",
    status: "belum",
    title:
      "Pelatihan Teknologi Kontrasepsi Terkini atau Contraception Technology Update (CTU)",
    image: new URL("../assets/rsds1.jpg", import.meta.url).href,
  },
  {
    date: "26 September 2025 – 03 Oktober 2025",
    status: "selesai",
    title:
      "Pelatihan Teknologi Kontrasepsi Terkini atau Contraception Technology Update (CTU)",
    image: new URL("../assets/rsds1.jpg", import.meta.url).href,
  },
  {
    date: "22 September 2025 – 27 September 2025",
    status: "selesai",
    title: "Pelatihan Pelayanan Sterilisasi Tingkat Lanjut",
    image: new URL("../assets/rsds1.jpg", import.meta.url).href,
  },
  {
    date: "17 September 2025 – 24 September 2025",
    status: "selesai",
    title: "Pelatihan Kewaspadaan Kegawatdaruratan Maternal dan Neonatal",
    image: new URL("../assets/rsds1.jpg", import.meta.url).href,
  },
];
</script>
