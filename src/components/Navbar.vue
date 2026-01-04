<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// const toggleDark = () => {
//   const isDark = document.documentElement.classList.toggle('dark')
//   localStorage.setItem('theme', isDark ? 'dark' : 'light')
// }

// if (localStorage.getItem('theme') === 'dark') {
//   document.documentElement.classList.add('dark')
// }
</script>

<template>
  <nav class="py-3 w-full bg-white top-0 z-50 sticky border-b border-border">
    <div class="flex mx-auto max-w-5xl">
      <button @click="router.push({ name: 'home' })" class="ml-3 cursor-pointer flex">
        <img src="./icons/alquran logo.png" alt="Al-Qur'an" class="w-12 h-12" />
        <h1 class="font-bold text-2xl my-auto">Al-Qur'an</h1>
      </button>
      <!-- <button @click="toggleDark" class="px-3 py-2 rounded border">Toggle Dark</button> -->
    </div>
  </nav>
</template>
