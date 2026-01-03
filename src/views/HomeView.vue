<script setup lang="ts">
import { useGetAllSurat } from '@/api/api.query'
import { computed } from 'vue'
import Card from '@/components/Card.vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

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
  <main class="mx-20 lg:max-w-5xl sm:mx-20 lg:mx-auto mt-10">
    <div class="mx-auto my-10">
      <input
        type="text"
        class="bg-white text-black px-2 rounded-lg w-full h-9 border"
        v-model="search"
      />
    </div>
    <div class="font-bold text-2xl mb-5">Daftar Surat :</div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div v-if="filteredSurah.length === 0" class="text-center text-gray-500">
        Tidak ada surat ditemukan.
      </div>
      <div v-else class="space-y-2">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="(item, index) in filteredSurah" :key="item.nomor">
            <Card :surah="item" :index="index" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
