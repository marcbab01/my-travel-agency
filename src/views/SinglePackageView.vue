<template>
  <div class="p-10">
    <h2 class="text-3xl font-bold mb-4">Détails du forfait</h2>
    <div v-if="pkg">
      <h3 class="text-2xl font-semibold mb-2">{{ pkg.name }}</h3>
      <p class="mb-1"><strong>Description :</strong> {{ pkg.description }}</p>
      <p class="mb-1"><strong>Catégorie :</strong> {{ pkg.category }}</p>
      <p class="mb-4"><strong>Prix :</strong> {{ formatPrice(pkg.price) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      pkg: null
    }
  },
  methods: {
    formatPrice (value) {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'CAD' // adapte si besoin
      }).format(value)
    }
  },
  mounted () {
    fetch(`http://localhost:3000/packages/${this.id}`)
      .then(res => {
        if (!res.ok) throw new Error('Forfait non trouvé')
        return res.json()
      })
      .then(data => {
        this.pkg = data
      })
      .catch(err => {
        console.error(err)
        this.pkg = null
      })
  }
}
</script>
