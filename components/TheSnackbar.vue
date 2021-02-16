<template>
  <v-snackbar
    v-model="$store.state.snackbar.show"
    :color="$store.state.snackbar.variant"
    top
    right
  >
    {{ $store.state.snackbar.message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        @click="$store.commit('showSnackbar', { show: false })"
      >
        Kapat
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {}
</script>

<style></style>
