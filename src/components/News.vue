<template>
  <section class="relative overflow-hidden py-32">
    <div class="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#e6f7f1]"></div>
    <div
      class="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#a0e7c8]/40 rounded-full blur-3xl"
    ></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- ================= SOETOMO NEWS ================= -->
      <div class="mb-32">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Soetomo News</h2>
          <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
            Informasi terbaru seputar layanan, inovasi, dan kegiatan RSUD Dr. Soetomo
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="item in soetomoNews"
            :key="item.title"
            class="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all"
          >
            <img :src="item.image" class="h-52 w-full object-cover" alt="" />

            <div class="p-6">
              <span class="text-xs text-green-600 font-semibold">
                {{ item.date }}
              </span>

              <h3
                class="mt-2 text-lg font-bold text-gray-900 group-hover:text-green-700 transition"
              >
                {{ item.title }}
              </h3>

              <p class="mt-2 text-sm text-gray-600">
                {{ item.excerpt }}
              </p>

              <a
                :href="item.link"
                class="inline-flex items-center gap-2 mt-4 text-green-700 font-semibold text-sm"
              >
                Baca Selengkapnya →
              </a>
            </div>
          </article>
        </div>

        <!-- BUTTON -->
        <div class="text-center mt-12">
          <button
            class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg"
          >
            Berita Lainnya
          </button>
        </div>
      </div>

      <!-- ================= SEPUTAR JATIM ================= -->
      <div class="mb-32">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Seputar Jawa Timur</h2>
          <p class="mt-3 text-gray-600 max-w-2xl mx-auto">
            Informasi dan kebijakan kesehatan terkini di wilayah Jawa Timur
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in jatimNews"
            :key="item.title"
            class="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
          >
            <span class="text-xs text-emerald-600 font-semibold">
              {{ item.date }}
            </span>

            <h3 class="mt-2 font-bold text-gray-900">
              {{ item.title }}
            </h3>

            <p class="mt-2 text-sm text-gray-600">
              {{ item.excerpt }}
            </p>

            <a
              :href="item.link"
              class="inline-block mt-3 text-sm text-emerald-700 font-semibold"
            >
              Baca →
            </a>
          </div>
        </div>

        <!-- BUTTON -->
        <div class="text-center mt-12">
          <button
            class="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-600 hover:text-white transition"
          >
            Berita Jatim Lainnya
          </button>
        </div>
      </div>

      <!-- ================= INSTAGRAM ================= -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-900">Update Instagram Terbaru</h2>
        <p class="mt-3 text-gray-600">
          Posting terbaru dari Instagram resmi RSUD Dr. Soetomo
        </p>
      </div>

      <div class="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <!-- GANTI URL DENGAN POSTINGAN TERBARU -->
        <iframe
          src="https://www.instagram.com/p/rsudrsoetomo/embed"
          class="w-full h-[520px] border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
const soetomoNews = [
  {
    title: "RSUD Dr. Soetomo Resmikan Layanan Digital Terpadu",
    excerpt:
      "Transformasi digital untuk meningkatkan kecepatan dan kualitas layanan pasien.",
    date: "12 Jan 2026",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    link: "#",
  },
  {
    title: "Klinik Jantung Terpadu Jadi Rujukan Nasional",
    excerpt: "Pelayanan kardiovaskular komprehensif dengan teknologi mutakhir.",
    date: "10 Jan 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    link: "#",
  },
  {
    title: "RSUD Soetomo Raih Penghargaan Pelayanan Publik",
    excerpt: "Penghargaan atas inovasi dan peningkatan mutu pelayanan.",
    date: "08 Jan 2026",
    image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
    link: "#",
  },
];

const jatimNews = [
  {
    title: "Pemprov Jatim Perkuat Sistem Kesehatan Daerah",
    excerpt: "Kolaborasi rumah sakit dan puskesmas se-Jawa Timur.",
    date: "11 Jan 2026",
    link: "#",
  },
  {
    title: "Program Pemeriksaan Kesehatan Gratis Diluncurkan",
    excerpt: "Upaya meningkatkan derajat kesehatan masyarakat Jatim.",
    date: "09 Jan 2026",
    link: "#",
  },
  {
    title: "Digitalisasi Data Kesehatan di Jawa Timur",
    excerpt: "Langkah strategis menuju layanan kesehatan terintegrasi.",
    date: "06 Jan 2026",
    link: "#",
  },
];
</script>
