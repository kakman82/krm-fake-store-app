<template>
  <div class="mt-3">
    <v-row v-for="product in $store.state.fakeProducts" :key="product.id">
      <horizontal-product :product="product"></horizontal-product>
    </v-row>
  </div>
</template>

<script>
import HorizontalProduct from '../cards/HorizontalProduct.vue'
export default {
  components: { HorizontalProduct },
  methods: {
    removeFromCart() {},
  },
}
</script>

<style></style>
