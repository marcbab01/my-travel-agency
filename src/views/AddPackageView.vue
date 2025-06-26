<template>
  <div class="min-h-screen flex items-center justify-center border-t border-gray-100">
    <div class="border mt-2 p-6 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
      <h2 class="text-2xl font-semibold mb-6">Add New Package</h2>
      <div>
        <form>
          <div class="mb-4">
            <label for="packageName" class="block text-sm font-medium text-gray-700">Package Name</label>
            <input type="text" id="packageName" class="mt-1 p-2 border w-full rounded-md" required />
          </div>
          <div class="mb-4">
            <label for="packagePrice" class="block text-sm font-medium text-gray-700">Price</label>
            <input type="text" id="packagePrice" class="mt-1 p-2 border w-full rounded-md" required />
          </div>
          <div class="mb-4">
            <label for="packageDescription" class="block text-sm font-medium text-gray-700">Package Description</label>
            <textarea id="packageDescription" class="mt-1 p-2 border w-full rounded-md" required></textarea>
          </div>
          <div class="mb-4">
            <label for="packageType" class="block text-sm font-medium text-gray-700">Package Type</label>
            <select id="packageType" class="mt-1 p-2 border w-full rounded-md" required>
              <option value="">Select</option>
              <option value="Soleil">Soleil</option>
              <option value="Culture">Culture</option>
              <option value="Aventure">Aventure</option>
              <option value="Croisière">Croisière</option>
              <option value="Gastronomie">Gastronomie</option>
              <option value="Détente">Détente</option>
              <option value="Famille">Famille</option>
            </select>
          </div>
          <div class="mb-6">
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Save
            </button>
          </div>
        </form>
      </div>
      <div>
        <div class="text-green-600 font-semibold mb-4">Success Message</div>
        <button class="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
          New Product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PackageDataService from '@/services/PackageDataService'

export default {
  props: ['addPkg'],
  data () {
    return {
      message: null,
      submitted: false,
      package: {
        name: '',
        description: '',
        price: '',
        category: ''
      }
    }
  },
  methods: {
    savePackage () {
      PackageDataService.create(this.package)
        .then((response) => {
          this.package.id = response.data.id
          this.addPkg(this.package)
          this.message = null
          this.submitted = true
        })
        .catch((e) => {
          this.message = e.response.data.message
        })
    },
    newPackage () {
      this.submitted = false
      this.package = {}
    }
  }
}
</script>
