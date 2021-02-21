<template>
  <v-app>
    <top-nav></top-nav>

    <v-main>
      <Nuxt />
      <the-snackbar></the-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import TheSnackbar from '~/components/TheSnackbar.vue'
import TopNav from '~/components/TopNav.vue'

export default {
  name: 'default',
  components: { TopNav, TheSnackbar },
}
</script>

<style></style>
