<template>
  <v-app >
    <Header />
    <router-view />
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  components: { Header },
  name: 'App'
}
</script>

<style>
a { text-decoration: none; }
</style>
