<script setup lang="ts">
import { useGetAllSurat } from '@/api/api.query'
import { computed } from 'vue'
import Card from '@/components/Card.vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/vue/16/solid'

const route = useRoute()
const router = useRouter()
const search = ref((route.query.q as string) ?? '')

watch(search, (value) => {
  router.replace({
    query: {
      ...route.query,
      q: value || undefined,
    },
  })
})

const { data, isLoading } = useGetAllSurat()
const surah = computed(() => data.value?.data ?? [])

const filteredSurah = computed(() => {
  if (!search.value) return surah.value

  return surah.value.filter(
    (item) =>
      item.namaLatin.toLowerCase().includes(search.value.toLowerCase()) ||
      item.nama.toLowerCase().includes(search.value.toLowerCase()),
  )
})
</script>

<template>
  <main class="mx-20 max-sm:mx-5 lg:max-w-5xl sm:mx-20 lg:mx-auto mt-5">
    <div class="flex flex-col">
      <div class="w-full mx-auto my-10 sticky top-3 z-30">
        <div class="relative group transition">
          <input
            type="text"
            class="px-2 bg-white rounded-full shadow-2xl w-full h-9 focus:outline-none"
            v-model="search"
            placeholder="Cari surat.."
          />
          <MagnifyingGlassIcon
            class="absolute right-3 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-400 transition-all duration-300 ease-out group-focus-within:w-6 group-focus-within:h-6 group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:bg-white px-1"
          />
        </div>
      </div>
      <div class="font-bold text-2xl mb-5">Daftar Surat :</div>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div v-if="filteredSurah.length === 0" class="text-center text-gray-500">
          Tidak ada surat ditemukan.
        </div>
        <div v-else class="space-y-2">
          <div class="grid max-sm:grid-cols-2 max-md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(item, index) in filteredSurah" :key="item.nomor">
              <Card :surah="item" :index="index" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
