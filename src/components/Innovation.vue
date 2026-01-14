<template>
  <!-- GRADIENT WRAPPER -->
  <section class="relative overflow-hidden py-32">
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- ================= Innovasi ================= -->
      <div class="mb-24">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Inovasi</h2>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Informasi terbaru seputar inovasi, layanan unggulan, dan kegiatan RSUD Dr.
            Soetomo Surabaya
          </p>
        </div>

        <!-- GRID -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="item in inovasi"
            :key="item.title"
            class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <!-- Image -->
            <div class="relative">
              <img
                :src="item.image"
                class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <!-- Soft overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              ></div>
            </div>

            <!-- Content -->
            <div class="p-6 text-center">
              <h3
                class="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition"
              >
                {{ item.title }}
              </h3>

              <p class="mt-3 text-sm text-gray-500 line-clamp-2">
                Inovasi pelayanan dan peningkatan mutu layanan kesehatan RSUD Dr. Soetomo.
              </p>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div class="mt-16 text-center">
          <RouterLink
            to="/inovasi"
            class="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition"
          >
            Lihat Inovasi Lainnya
            <span class="text-xl">→</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";

const inovasi = [
  {
    title: "Inovasi dan Dedikasi ASN RSUD Dr. Soetomo",
    image: new URL("../assets/rsds1.jpg", import.meta.url).href,
  },
  {
    title: "Inovasi Duta ASI untuk Ibu & Anak",
    image: new URL("../assets/rsds1.jpg", import.meta.url).href,
  },
  {
    title: "Inovasi ABI (Alat Bantu Ibu) untuk IMD",
    image: new URL("../assets/rsds1.jpg", import.meta.url).href,
  },
  {
    title: "Inovasi IHA CIAMIK Pelayanan Terpadu",
    image: new URL("../assets/rsds1.jpg", import.meta.url).href,
  },
];
</script>
