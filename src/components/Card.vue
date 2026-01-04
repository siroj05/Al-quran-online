<script setup lang="ts">
import type { Surat } from '@/api/type'
import { RouterLink } from 'vue-router'

defineProps<{
  surah: Surat
  index: number
}>()
</script>

<template>
  <router-link
    :to="{ name: 'surah-view', params: { id: surah.nomor } }"
    class="bg-card block border border-border rounded-lg p-5 hover:border-green-500 cursor-pointer transition hover:bg-green-500/10"
  >
    <div class="flex flex-col space-y-3">
      <span class="font-quran text-5xl max-sm:text-2xl" dir="rtl">
        {{ surah.nama }}
      </span>
      <span class="ml-2 text-base max-sm:text-[10px] text-gray-600">
        {{ surah.nomor + 1 }}. ({{ surah.namaLatin }}) - {{ surah.jumlahAyat }} ayat
      </span>
    </div>
  </router-link>
</template>
