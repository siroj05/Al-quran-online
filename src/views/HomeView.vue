<script setup lang="ts">
import { useGetAllSurat } from '@/api/api.query'
import { computed } from 'vue'
import Card from '@/components/Card.vue'

const { data, isLoading } = useGetAllSurat()
const surah = computed(() => data.value?.data ?? [])
</script>

<template>
  <main class="mx-20 lg:max-w-5xl sm:mx-20 lg:mx-auto mt-10">
    <div class="font-bold text-2xl mb-5">Daftar Surat :</div>
    <div v-if="isLoading">Loading...</div>

    <div v-else class="space-y-2">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(item, index) in surah" :key="item.nomor">
          <Card :surah="item" :index="index" />
        </div>
      </div>
    </div>
  </main>
</template>
