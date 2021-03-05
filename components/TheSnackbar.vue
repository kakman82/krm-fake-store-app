<template>
  <v-snackbar
    v-model="$store.state.snackbar.show"
    :color="$store.state.snackbar.variant"
    top
  >
    {{ $store.state.snackbar.message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        @click="$store.commit('showSnackbar', { show: false })"
      >
        CLOSE
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {}
</script>

<style></style>
