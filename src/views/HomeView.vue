<template>
  <Header />
  <HeroCarousel />
  <Registration />
  <Services />
  <News />
  <Podkies />
  <section class="relative overflow-hidden py-32">
    <div class="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#e6f7f1]"></div>
    <div
      class="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#e6f7f1]/40 rounded-full blur-3xl"
    ></div>
    <Innovation />
    <Agenda />
  </section>
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import HeroCarousel from "@/components/HeroCarousel.vue";
import Registration from "@/components/Registration.vue";
import Services from "@/components/Services.vue";
import News from "@/components/News.vue";
import Innovation from "@/components/Innovation.vue";
import Podkies from "@/components/Podkies.vue";
import Footer from "@/components/Footer.vue";
import Agenda from "@/components/Agenda.vue";
</script>
