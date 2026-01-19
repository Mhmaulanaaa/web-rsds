<template>
  <Header />

  <main class="pt-20">
    <!-- ISI HALAMAN MASUK DI SINI -->
    <router-view />
  </main>

  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
