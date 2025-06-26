<template>
  <div>
    <HeroHeader/>
    <div class="p-20">
      <h2 class="text-3xl font-bold mb-6">Nos forfaits de voyage</h2>

      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="pkg in packages"
          :key="pkg.id"
          class="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <h3 class="text-xl font-semibold mb-1">{{ pkg.name }}</h3>
          <h4 class="text-md text-gray-700 mb-2">{{ pkg.destination }}</h4>
          <p class="text-gray-600 mb-4">
            {{ pkg.description || 'Découvrez ce superbe forfait.' }}
          </p>
          <div class="flex justify-between items-center">
            <span class="text-lg font-bold text-indigo-600">${{ pkg.price }}</span>
            <router-link :to="{ name: 'package', params: { id: pkg.id } }"
              class="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition"
            >
              See more
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroHeader from '@/components/HeroHeader.vue'

export default {
  components: {
    HeroHeader
  },
  props: ['packages']
}
</script>
