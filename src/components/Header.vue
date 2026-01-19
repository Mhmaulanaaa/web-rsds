<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- LOGO -->
      <RouterLink to="/" class="flex items-center gap-3">
        <img src="../assets/images/logo-rsds-baru.png" alt="Logo" class="h-10" />
      </RouterLink>

      <!-- ================= DESKTOP NAV ================= -->
      <nav class="hidden lg:flex items-center gap-8 text-sm font-medium">
        <!-- BERANDA -->
        <RouterLink to="/" :class="linkClass('/')">Beranda</RouterLink>

        <!-- PROFIL -->
        <div class="relative group">
          <button :class="dropdownClass(profil.base)">
            Profil
            <i class="fas fa-chevron-down text-xs"></i>
          </button>

          <div
            class="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
          >
            <RouterLink
              v-for="item in profil.items"
              :key="item.to"
              :to="item.to"
              :class="dropdownItemClass(item.to)"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>

        <!-- PELAYANAN -->
        <div class="relative group">
          <button :class="dropdownClass(pelayanan.base)">
            Pelayanan
            <i class="fas fa-chevron-down text-xs"></i>
          </button>

          <div
            class="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
          >
            <RouterLink
              v-for="item in pelayanan.items"
              :key="item.to"
              :to="item.to"
              :class="dropdownItemClass(item.to)"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>

        <!-- DIKLIT -->
        <div class="relative group">
          <button :class="dropdownClass(diklit.base)">
            Diklit
            <i class="fas fa-chevron-down text-xs"></i>
          </button>

          <div
            class="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
          >
            <RouterLink
              v-for="item in diklit.items"
              :key="item.to"
              :to="item.to"
              :class="dropdownItemClass(item.to)"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>

        <!-- SINGLE LINKS -->
        <RouterLink to="/promosi-kesehatan" :class="linkClass('/promosi-kesehatan')">
          Promosi Kesehatan
        </RouterLink>

        <RouterLink to="/laporan" :class="linkClass('/laporan')">Laporan</RouterLink>
        <RouterLink to="/reformasi-birokrasi" :class="linkClass('/reformasi-birokrasi')">
          Reformasi Birokrasi
        </RouterLink>
        <RouterLink to="/csirt" :class="linkClass('/csirt')">CSIRT</RouterLink>
        <RouterLink to="/ppid" :class="linkClass('/ppid')">PPID</RouterLink>
        <RouterLink to="/pengaduan" :class="linkClass('/pengaduan')"
          >Pengaduan</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const scrolled = ref(false);

/* ================= MENU DATA ================= */
const profil = {
  base: "/profil",
  items: [
    { label: "Tentang Kami", to: "/profil/tentang-kami" },
    { label: "Kedudukan", to: "/profil/kedudukan" },
    { label: "Tupoksi", to: "/profil/tupoksi" },
    { label: "Visi dan Misi", to: "/profil/visi-misi" },
    { label: "Struktur Organisasi", to: "/profil/struktur-organisasi" },
    { label: "Sumber Daya Manusia", to: "/profil/sdm" },
    { label: "Penghargaan dan HAKI", to: "/profil/penghargaan-haki" },
  ],
};

const pelayanan = {
  base: "/pelayanan",
  items: [
    { label: "Rawat Jalan", to: "/pelayanan/rawat-jalan" },
    { label: "Rawat Inap", to: "/pelayanan/rawat-inap" },
    { label: "Rawat Darurat", to: "/pelayanan/rawat-darurat" },
    { label: "Graha Amerta", to: "/pelayanan/graha-amerta" },
    { label: "Rujukan Nasional", to: "/pelayanan/rujukan-nasional" },
    { label: "Daftar Dokter", to: "/pelayanan/daftar-dokter" },
    { label: "Informasi", to: "/pelayanan/informasi" },
    { label: "Standar Pelayanan Publik", to: "/pelayanan/standar-pelayanan" },
    { label: "Panduan Praktik Klinik", to: "/pelayanan/panduan-praktik-klinik" },
  ],
};

const diklit = {
  base: "/diklit",
  items: [
    { label: "Pendidikan dan Pelatihan", to: "/diklit/pendidikan-pelatihan" },
    { label: "Penelitian dan Pengembangan", to: "/diklit/penelitian-pengembangan" },
  ],
};

/* ================= SCROLL ================= */
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

/* ================= CLASS HELPERS ================= */
const linkClass = (path: string) => {
  const active = route.path === path;
  if (active) return "text-green-400 font-semibold";

  return scrolled.value
    ? "text-gray-800 hover:text-green-400"
    : "text-white hover:text-green-400";
};

const dropdownClass = (base: string) => {
  const active = route.path.startsWith(base);
  if (active) return "flex items-center gap-1 text-green-400 font-semibold";

  return scrolled.value
    ? "flex items-center gap-1 text-gray-800 hover:text-green-400"
    : "flex items-center gap-1 text-white hover:text-green-400";
};

const dropdownItemClass = (path: string) =>
  route.path === path
    ? "block px-5 py-3 text-sm bg-gray-100 text-green-400 font-semibold"
    : "block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100";

/* ================= LIFECYCLE ================= */
onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
