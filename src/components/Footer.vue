<template>
  <div class="pt-20 pb-5 bg-transparent transition-all">
    <div class="max-w-7xl mx-auto px-4 transition-all">
      <!-- Card Logos -->
      <div class="mb-5 bg-gray-100 rounded-lg shadow text-center">
        <div class="py-12 flex flex-wrap justify-center items-center gap-4">
          <!-- Logo Item -->
          <a
            v-for="(item, index) in logos"
            :key="index"
            :href="item.url"
            target="_blank"
            class="mx-4 transition-all"
          >
            <img
              :src="item.img"
              :alt="item.alt"
              class="h-22.5 my-2 transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      </div>

      <!-- Info -->
      <div class="text-center mt-5 transition-all">
        <h2 class="text-2xl font-bold mb-2 transition-all">
          RSUD Dr. Soetomo, Pemerintah Provinsi Jawa Timur
        </h2>

        <p class="text-gray-700 leading-relaxed transition-all">
          <b>Alamat :</b>
          <span class="text-green-600 font-semibold hover:text-yellow-500">
            Jl. Mayjend. Prof. Dr. Moestopo No. 6-8, Kecamatan Gubeng, Kelurahan
            Airlangga, Kota Surabaya 60286
          </span>
          <br />

          <b>Telepon :</b>
          <span class="text-green-600 font-semibold hover:text-yellow-500">1500995</span>;
          <b> No. WhatsApp :</b>
          <a
            href="https://wa.me/6281216700101"
            target="_blank"
            class="text-green-600 font-semibold hover:text-yellow-500"
          >
            +62 812 1670 0101
          </a>
          (Hanya Menerima Pesan Pengaduan)
          <br />

          <b>Email :</b>
          <span class="text-green-600 font-semibold hover:text-yellow-500">
            kontak.rsudrsoetomo@jatimprov.go.id
          </span>
        </p>

        <!-- Social Media -->
        <div class="flex justify-center gap-3 py-3 mb-5 transition-all">
          <a
            href="https://www.facebook.com/rsudrsoetomo"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:opacity-80 transition"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://twitter.com/rsudrsoetomo"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center rounded-lg bg-sky-500 text-white hover:opacity-80 transition"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/rsudrsoetomo/"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center rounded-lg bg-pink-500 text-white hover:opacity-80 transition"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.youtube.com/@RSUDDrSOETOMOSurabaya"
            target="_blank"
            class="w-10 h-10 flex items-center justify-center rounded-lg bg-red-600 text-white hover:opacity-80 transition"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-sm text-gray-700 transition-all">
        <strong>© 2026</strong>
        Instalasi Teknologi Komunikasi dan Informasi, RSUD Dr. Soetomo
        <span class="mx-2">•</span>
        <a
          href="https://rsudrsoetomo.jatimprov.go.id/kebijakan-privasi"
          class="text-green-600 hover:text-yellow-500 font-semibold"
        >
          Kebijakan dan Privasi
        </a>
        <span class="mx-2">•</span>
        <a
          href="https://rsudrsoetomo.jatimprov.go.id/faq"
          class="text-green-600 hover:text-yellow-500 font-semibold"
        >
          FAQ
        </a>
        <span class="mx-2">•</span>
        <a href="#" class="text-green-600 hover:text-yellow-500 font-semibold">
          Site Map
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pemprovJatim from "@/assets/images/pemprovjatim2.png";
import dinkesJatim from "@/assets/images/dinkesjatim.png";
import diskominfoJatim from "@/assets/images/diskominfojatim.png";
import ppidJatim from "@/assets/images/ppidjatim.png";
import inaproc from "@/assets/images/inaprocspse.png";
import lapor from "@/assets/images/lapor.png";
import sippn from "@/assets/images/sippn.png";
import kemenkes from "@/assets/images/kemenkes.png";
import kip from "@/assets/images/kip.png";

const logos = [
  {
    url: "https://jatimprov.go.id/",
    img: pemprovJatim,
    alt: "Pemerintah Provinsi Jawa Timur",
  },
  {
    url: "https://dinkes.jatimprov.go.id/",
    img: dinkesJatim,
    alt: "Dinas Kesehatan Provinsi Jawa Timur",
  },
  {
    url: "https://kominfo.jatimprov.go.id/",
    img: diskominfoJatim,
    alt: "Dinas Kominfo Provinsi Jawa Timur",
  },
  {
    url: "https://ppid.jatimprov.go.id/",
    img: ppidJatim,
    alt: "PPID Provinsi Jawa Timur",
  },
  {
    url: "https://spse.inaproc.id/jatimprov",
    img: inaproc,
    alt: "INAPROC SPSE Provinsi Jawa Timur",
  },
  {
    url: "https://www.lapor.go.id/instansi/rumah-sakit-umum-daerah-dr-soetomo",
    img: lapor,
    alt: "LAPOR! RSUD Dr. Soetomo",
  },
  {
    url: "https://sippn.menpan.go.id/instansi/rsud-dr-soetomo-169816",
    img: sippn,
    alt: "SIPPN CariYanlik RSUD Dr. Soetomo",
  },
  {
    url: "https://kemkes.go.id/id/home",
    img: kemenkes,
    alt: "Kementerian Kesehatan",
  },
  {
    url: "https://komisiinformasi.go.id/",
    img: kip,
    alt: "Komisi Informasi Pusat Republik Indonesia",
  },
];
</script>
