<script setup lang="ts">
import { useGetSuratById } from '@/api/api.query'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { data, isLoading, isError } = useGetSuratById(Number(route.params.id))

const surah = computed(() => data.value?.data)
</script>
<template>
  <main class="max-md:mx-2 max-w-4xl mx-auto mt-10">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Error loading surah</div>
    <div v-else-if="surah">
      <h1 class="lg:text-2xl font-bold mt-4">{{ surah.namaLatin }}</h1>
      <div class="font-quran text-5xl max-md:text-3xl text-center mb-10 mt-2">
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
      </div>
      <div v-for="(item, index) in surah.ayat" :key="index">
        <div class="border-b">
          <div class="font-quran text-5xl/20 max-md:text-3xl/15 text-right my-10">
            {{ item.teksArab }}
          </div>
          <div class="italic mb-2">{{ item.teksLatin }}</div>
          <div class="">{{ item.teksIndonesia }}</div>
        </div>
      </div>
    </div>
  </main>
</template>
