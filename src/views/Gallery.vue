<template>
  <v-container>
    <div class='loader' v-if="!getPhotos.length || !display">
      <v-progress-circular
        indeterminate
        color="purple"
        :width='5'
        :size="100"
      ></v-progress-circular>
    </div>
    <Categories v-else v-for="index in 4" :photos="photosForCategories()" :key="index" />
  </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Categories from '../components/Categories.vue'

export default {
  components: { Categories },
  name: 'Gallery',
  data () {
    return {
      display: false
    }
  },
  computed: {
    ...mapGetters(['getPhotos']),
    photosForCategories () {
      let i = 0
      return () => {
        i += this.getPhotos.length ? 6 : 0
        return this.getPhotos.slice(i - 6, i)
      }
    }
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    displayData () {
      setTimeout(() => { this.display = true }, 500)
    }
  },
  async mounted () {
    this.fetchPhotos()
    this.displayData()
  }
}

</script>

<style>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
</style>
