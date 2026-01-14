<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <img src="../assets/logo-rsds-baru.png" alt="Logo" class="h-10" />
      <div class="flex items-center gap-3">
        <span
          :class="scrolled ? 'text-gray-900' : 'text-white'"
          class="font-semibold text-sm leading-tight hidden md:block"
        >
        </span>
      </div>

      <!-- Navigation -->
      <nav class="hidden lg:flex items-center gap-8 text-sm font-medium">
        <!-- Link -->
        <a
          class="cursor-pointer transition"
          :class="
            scrolled
              ? 'text-gray-800 hover:text-green-600'
              : 'text-white hover:text-green-300'
          "
        >
          Beranda
        </a>

        <!-- Dropdown 1 -->
        <div class="relative group">
          <button
            class="flex items-center gap-1 cursor-pointer transition"
            :class="
              scrolled
                ? 'text-gray-800 hover:text-green-600'
                : 'text-white hover:text-green-300'
            "
          >
            Profil
            <i class="fas fa-chevron-down text-xs"></i>
          </button>

          <div
            class="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
          >
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Tentang Kami
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Kedudukan
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Tupoksi
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Visi dan Misi
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Struktur Organisasi
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Sumber Daya Manusia
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Penghargaan dan HAKI
            </a>
          </div>
        </div>

        <!-- Dropdown 2 -->
        <div class="relative group">
          <button
            class="flex items-center gap-1 cursor-pointer transition"
            :class="
              scrolled
                ? 'text-gray-800 hover:text-green-600'
                : 'text-white hover:text-green-300'
            "
          >
            Pelayanan
            <i class="fas fa-chevron-down text-xs"></i>
          </button>

          <div
            class="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
          >
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Rawat Jalan
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Rawat Inap
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Rawat Darurat
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Graha Amerta
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Rujukan Nasional
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Daftar Dokter
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Informasi
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Standar Pelayanan Publik
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Panduan Praktik Klinik
            </a>
          </div>
        </div>

        <!-- Dropdown 3 -->
        <div class="relative group">
          <button
            class="flex items-center gap-1 cursor-pointer transition"
            :class="
              scrolled
                ? 'text-gray-800 hover:text-green-600'
                : 'text-white hover:text-green-300'
            "
          >
            Diklit
            <i class="fas fa-chevron-down text-xs"></i>
          </button>

          <div
            class="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
          >
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Diklat
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Litbang
            </a>
            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100">
              Webinar
            </a>
          </div>
        </div>

        <a
          class="cursor-pointer transition"
          :class="
            scrolled
              ? 'text-gray-800 hover:text-green-600'
              : 'text-white hover:text-green-300'
          "
        >
          Promosi Kesehatan
        </a>

        <a
          class="cursor-pointer transition"
          :class="
            scrolled
              ? 'text-gray-800 hover:text-green-600'
              : 'text-white hover:text-green-300'
          "
        >
          Laporan
        </a>

        <a
          class="cursor-pointer transition"
          :class="
            scrolled
              ? 'text-gray-800 hover:text-green-600'
              : 'text-white hover:text-green-300'
          "
        >
          Reformasi Biokrasi
        </a>

        <a
          class="cursor-pointer transition"
          :class="
            scrolled
              ? 'text-gray-800 hover:text-green-600'
              : 'text-white hover:text-green-300'
          "
        >
          CSIRT
        </a>

        <a
          class="cursor-pointer transition"
          :class="
            scrolled
              ? 'text-gray-800 hover:text-green-600'
              : 'text-white hover:text-green-300'
          "
        >
          PPID
        </a>

        <a
          class="cursor-pointer transition"
          :class="
            scrolled
              ? 'text-gray-800 hover:text-green-600'
              : 'text-white hover:text-green-300'
          "
        >
          Pengaduan
        </a>
      </nav>

      <!-- Search -->
      <!-- <div class="hidden md:flex items-center">
        <div
          class="flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur transition"
          :class="scrolled ? 'border-gray-300' : 'border-white/50'"
        >
          <i
            class="fas fa-search text-sm"
            :class="scrolled ? 'text-gray-500' : 'text-white'"
          ></i>

          <input
            type="text"
            placeholder="Pencarian"
            class="bg-transparent outline-none text-sm w-32 placeholder:text-white/70"
            :class="scrolled ? 'text-gray-700 placeholder:text-gray-400' : 'text-white'"
          />
        </div>
      </div> -->
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
