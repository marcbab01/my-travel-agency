<template>
  <MainNav />
  <router-view :packages="packages" />
  <MainFooter />
</template>

<script>
import MainNav from './components/MainNav.vue'
import MainFooter from './components/MainFooter.vue'
import PackageDataService from '@/services/PackageDataService'

export default {
  components: {
    MainNav,
    MainFooter
  },
  data () {
    return {
      packages: []
    }
  },
  mounted () {
    PackageDataService.getAll()
      .then(response => {
        this.packages = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.error("Couldn't fetch Packages:", error)
      })
  }
}
</script>
