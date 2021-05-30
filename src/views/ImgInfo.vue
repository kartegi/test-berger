<template>
<v-container>
<div>
<h1>{{getPhoto.title}}</h1>
<v-img max-width="350" :src='getPhoto.url'></v-img>
<p>ID: {{getPhoto.id}}</p>
<a :href="getPhoto.url">{{getPhoto.url}}</a>
</div>
</v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ImageInfo',
  data () {
    return {
      display: false
    }
  },
  computed: {
    ...mapGetters(['getPhoto'])
  },
  methods: {
    ...mapActions(['fetchPhoto'])
  },
  async mounted () {
    this.fetchPhoto(this.$route.params.id)
    this.display = true
  }
}
</script>
