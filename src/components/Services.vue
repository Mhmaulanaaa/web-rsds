<template>
  <section class="relative overflow-hidden py-1">
    <!-- BG -->
    <!-- CONTENT -->
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- CATEGORY : Layanan Unggulan -->
      <div class="mb-24 text-center">
        <!-- HEADER -->
        <div class="flex flex-col items-center gap-4 mb-12">
          <div
            class="flex items-center justify-center rounded-xl text-white font-bold text-lg"
          >
            <img src="../assets/images/layung.svg" alt="Logo" class="h-40 mb-5" />
          </div>
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
            class="flex items-center justify-center rounded-xl text-white font-bold text-lg"
          >
            <img src="../assets/images/runas.svg" alt="Logo" class="h-40 mb-5" />
          </div>
        </div>

        <!-- GRID + ANIMATION -->
        <TransitionGroup
          name="fade-slide"
          tag="div"
          class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <ServiceCard v-for="item in visibleRujukan" :key="item.title" :item="item" />
        </TransitionGroup>

        <!-- BUTTON -->
        <div class="flex justify-center mt-12">
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
      <!-- End Rujukan Nasional -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ServiceCard from "./card/ServicesCard.vue";

const showAll = ref(false);

const visibleRujukan = computed(() => (showAll.value ? rujukan : rujukan.slice(0, 8)));

const toggleShow = () => {
  showAll.value = !showAll.value;
};

const unggulan = [
  {
    title: "Immunotherapy Clinic",
    icon: new URL("../assets/images/layungimuno.png", import.meta.url).href,
    link: "/layanan/immunotherapy",
  },
  {
    title: "Soetomo Aesthetic Clinic",
    icon: new URL("../assets/images/layungestetik.png", import.meta.url).href,
    link: "/layanan/aesthetic",
  },
];

const rujukan = [
  {
    title: "Pelayanan Bank Jaringan",
    icon: new URL("../assets/images/rnPbjrm.png", import.meta.url).href,
    link: "/rujukan/bankjaringan",
  },
  {
    title: "Pelayanan Bayi Tabung",
    icon: new URL("../assets/images/rnPbt.png", import.meta.url).href,
    link: "/rujukan/bayitabung",
  },
  {
    title: "Pelayanan Endoskopi dan Minimal Invasif",
    icon: new URL("../assets/images/rnPemi.png", import.meta.url).href,
    link: "/rujukan/endoskopi",
  },
  {
    title: "Pelayanan Endokrin Terintegrasi",
    icon: new URL("../assets/images/rnPet.png", import.meta.url).href,
    link: "/rujukan/endokrin",
  },
  {
    title: "Pelayanan Ginjal Terpadu",
    icon: new URL("../assets/images/rnPgit.png", import.meta.url).href,
    link: "/rujukan/ginjalterpadu",
  },
  {
    title: "Pelayanan Geriatri Terpadu",
    icon: new URL("../assets/images/rnPgt.png", import.meta.url).href,
    link: "/rujukan/geriatriterpadu",
  },
  {
    title: "Pelayanan Penyakit Infeksi Emerging dan Re-Emerging",
    icon: new URL("../assets/images/rnPinere.png", import.meta.url).href,
    link: "/rujukan/penyakitinfeksi",
  },
  {
    title: "Pelayanan Kembar Siam",
    icon: new URL("../assets/images/rnPks.png", import.meta.url).href,
    link: "/rujukan/kembarsiam",
  },
  // 1
  {
    title: "Pelayanan Ortorik Prosterik",
    icon: new URL("../assets/images/rnPop.png", import.meta.url).href,
    link: "/rujukan/bankjaringan",
  },
  {
    title: "Pelayanan Paliatif dan Bebas Nyeri",
    icon: new URL("../assets/images/rnPpbn.png", import.meta.url).href,
    link: "/rujukan/bayitabung",
  },
  {
    title: "Pelayanan Sport Clinic",
    icon: new URL("../assets/images/rnPsc.png", import.meta.url).href,
    link: "/rujukan/endoskopi",
  },
  {
    title: "Pelayanan Sistem Saraf Terintegrasi",
    icon: new URL("../assets/images/rnPsst.png", import.meta.url).href,
    link: "/rujukan/endokrin",
  },
  {
    title: "Pelayanan Tumbuh Kembang Anak",
    icon: new URL("../assets/images/rnPtka.png", import.meta.url).href,
    link: "/rujukan/ginjalterpadu",
  },
  {
    title: "Program Pencegahan Resistensi Antimikroba",
    icon: new URL("../assets/images/rnPpra.png", import.meta.url).href,
    link: "/rujukan/geriatriterpadu",
  },
  {
    title: "Pusat Pelayanan Jantung Terpadu",
    icon: new URL("../assets/images/rnPpjt.png", import.meta.url).href,
    link: "/rujukan/penyakitinfeksi",
  },
  {
    title: "Pusat Pengembangan Layanan Kanker",
    icon: new URL("../assets/images/rnPplk.png", import.meta.url).href,
    link: "/rujukan/kembarsiam",
  },
];
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
