<template>
  <nav class="bg-blue-600 text-white">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <h1 class="text-xl font-bold">Agence Voyage</h1>

      <!-- Menu burger (mobile) -->
      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Navigation links -->
      <ul class="hidden md:flex space-x-6">
        <li>
            <RouterLink to="/" class="hover:underline">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="/packages" class="hover:underline">Packages</RouterLink>
        </li>
        <li>
            <RouterLink to="/about" class="hover:underline">About</RouterLink>
        </li>
      </ul>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <RouterLink to="/" class="block hover:underline" @click="isOpen = false">Accueil</RouterLink>
      <RouterLink to="/forfaits" class="block hover:underline" @click="isOpen = false">Forfaits</RouterLink>
      <RouterLink to="/a-propos" class="block hover:underline" @click="isOpen = false">À propos</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
