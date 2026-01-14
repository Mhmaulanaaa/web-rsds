<template>
  <section class="relative overflow-hidden py-32">
    <!-- BG -->
    <!-- CONTENT -->
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- CATEGORY : Layanan Unggulan -->
      <div class="mb-24 text-center">
        <!-- HEADER -->
        <div class="flex flex-col items-center gap-4 mb-12">
          <div
            class="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500 text-white font-bold text-lg"
          >
            U
          </div>

          <h3 class="text-2xl font-bold text-gray-900">Layanan Unggulan</h3>

          <!-- Optional subtitle -->
          <p class="max-w-xl text-gray-500 text-sm">
            Layanan kesehatan unggulan dengan teknologi modern dan tenaga profesional
          </p>
        </div>

        <!-- CARDS -->
        <div class="flex flex-wrap justify-center gap-8">
          <ServiceCard
            v-for="item in unggulan"
            :key="item.title"
            :item="item"
            class="w-full max-w-sm"
          />
        </div>
      </div>

      <!-- End Layanan Unggulan -->

      <!-- CATEGORY : Rujukan Nasional -->
      <div>
        <!-- HEADER -->
        <div class="flex flex-col items-center gap-4 mb-12 text-center">
          <div
            class="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500 text-white font-bold text-lg"
          >
            R
          </div>

          <h3 class="text-2xl font-bold text-gray-900">Rujukan Nasional</h3>

          <!-- Optional subtitle -->
          <p class="max-w-xl text-gray-500 text-sm">
            Pusat rujukan nasional dengan layanan medis terpadu dan teknologi mutakhir
          </p>
        </div>

        <!-- GRID -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard v-for="item in rujukan" :key="item.title" :item="item" />
        </div>
      </div>

      <!-- End Rujukan Nasional -->
    </div>
  </section>
</template>

<script setup>
import ServiceCard from "./card/ServicesCard.vue";

const unggulan = [
  {
    title: "Immunotherapy Clinic",
    desc: "Layanan imunoterapi modern untuk meningkatkan kualitas hidup pasien.",
    icon: "https://img.icons8.com/fluency/96/immunotherapy.png",
    link: "/layanan/immunotherapy",
  },
  {
    title: "Aesthetic Clinic",
    desc: "Perawatan estetika medis dengan standar klinis profesional.",
    icon: "https://img.icons8.com/fluency/96/skin-care.png",
    link: "/layanan/aesthetic",
  },
];

const rujukan = [
  {
    title: "Endoskopi Minimal Invasif",
    desc: "Prosedur diagnostik dan terapeutik modern.",
    icon: "https://img.icons8.com/fluency/96/endoscopy.png",
    link: "/rujukan/endoskopi",
  },
  {
    title: "Ginjal Terpadu",
    desc: "Penanganan komprehensif penyakit ginjal.",
    icon: "https://img.icons8.com/fluency/96/kidney.png",
    link: "/rujukan/ginjal",
  },
  {
    title: "Jantung Terpadu",
    desc: "Pusat layanan kardiovaskular terintegrasi.",
    icon: "https://img.icons8.com/fluency/96/heart-health.png",
    link: "/rujukan/jantung",
  },
  {
    title: "Kanker Terpadu",
    desc: "Pendekatan multidisiplin penanganan kanker.",
    icon: "https://img.icons8.com/fluency/96/ribbon.png",
    link: "/rujukan/kanker",
  },
];
</script>
