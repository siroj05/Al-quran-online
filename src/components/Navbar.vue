<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// isi input dari query param
const search = ref((route.query.q as string) ?? '')

watch(search, (value) => {
  router.replace({
    query: {
      ...route.query,
      q: value || undefined,
    },
  })
})
</script>

<template>
  <nav class="py-3 text-white w-full bg-green-800 top-0 z-50 sticky">
    <div class="flex mx-auto max-w-5xl">
      <button @click="router.push({ name: 'home' })" class="ml-3 cursor-pointer flex">
        <img src="./icons/alquran logo.png" alt="Al-Qur'an" class="w-12 h-12" />
        <h1 class="font-bold text-2xl my-auto">Al-Qur'an</h1>
      </button>
      <!-- <div class="mx-auto my-auto">
        <input type="text" class="bg-white text-black px-2 rounded-lg w-100 h-9" v-model="search" />
      </div> -->
    </div>
  </nav>
</template>
