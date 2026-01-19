<template>
  <section class="relative h-screen overflow-hidden -mt-20">
    <!-- <section class="relative h-screen overflow-hidden" style="margin-top: -80px"> -->

    <!-- Background Slides -->
    <transition-group name="fade" tag="div">
      <div
        v-for="(slide, index) in slides"
        v-show="active === index"
        :key="slide.image"
        class="absolute inset-0"
      >
        <img :src="slide.image" class="w-full h-full object-cover" alt="" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"
        ></div>
      </div>
    </transition-group>

    <!-- Content -->
    <div class="relative z-10 flex items-center h-full">
      <div class="max-w-7xl mx-auto px-6">
        <span
          class="inline-block mb-4 text-sm font-semibold tracking-widest text-green-300"
        >
          RUMAH SAKIT UMUM DAERAH DR. SOETOMO
        </span>

        <h1 class="text-white text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
          Pelayanan Kesehatan Terpadu & Profesional
        </h1>

        <p class="mt-6 max-w-xl text-white/90 text-lg">
          Rumah Sakit Umum Daerah Dr. Soetomo Surabaya berkomitmen memberikan pelayanan
          kesehatan yang bermutu, aman, dan berorientasi pada keselamatan pasien.
        </p>

        <!-- CTA -->
        <div class="mt-10 flex flex-wrap gap-4">
          <button
            class="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition"
          >
            Daftar Online
          </button>

          <button
            class="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Layanan Unggulan
          </button>
        </div>
      </div>
    </div>

    <!-- Arrow Navigation -->
    <button
      @click="prev"
      class="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
      aria-label="Previous slide"
    >
      ❮
    </button>

    <button
      @click="next"
      class="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"
      aria-label="Next slide"
    >
      ❯
    </button>

    <!-- Navigation Dots -->
    <div class="absolute bottom-10 right-10 flex gap-3 z-20">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="active = i"
        class="w-3 h-3 rounded-full transition"
        :class="active === i ? 'bg-white scale-110' : 'bg-white/40'"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const slides = [
  {
    image: new URL("../assets/images/gedung1.webp", import.meta.url).href,
  },
  {
    image: new URL("../assets/images/gedung2.webp", import.meta.url).href,
  },
  {
    image: new URL("../assets/images/gedung3.webp", import.meta.url).href,
  },
  {
    image: new URL("../assets/images/gedung4.webp", import.meta.url).href,
  },
  {
    image: new URL("../assets/images/gedung5.webp", import.meta.url).href,
  },
  {
    image: new URL("../assets/images/gedung6.webp", import.meta.url).href,
  },
  {
    image: new URL("../assets/images/gedung7.webp", import.meta.url).href,
  },
  {
    image: new URL("../assets/images/gedung8.webp", import.meta.url).href,
  },
];

const active = ref(0);
let interval;

const next = () => {
  active.value = (active.value + 1) % slides.length;
};

const prev = () => {
  active.value = active.value === 0 ? slides.length - 1 : active.value - 1;
};

onMounted(() => {
  interval = setInterval(next, 6000);
});

onUnmounted(() => clearInterval(interval));
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
