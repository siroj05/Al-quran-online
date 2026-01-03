<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <Navbar />
    </header>

    <main class="flex-1">
      <RouterView />
    </main>
    <footer>
      <div class="text-center py-10 text-white bg-green-800 mt-10">
        &copy; 2026 Al-Qur'an App. Dibuat oleh
        <span class="font-semibold">Siroojuddin Apendi</span>. All rights reserved.
      </div>
    </footer>
  </div>
</template>
