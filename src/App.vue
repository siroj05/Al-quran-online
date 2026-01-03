<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
  <footer>
    <div class="text-center py-10 text-white bg-green-800 mt-10">
      &copy; 2026 Al-Qur'an App. Dibuat oleh
      <span class="font-semibold">Siroojuddin Apendi</span>. All rights reserved.
    </div>
  </footer>
</template>
