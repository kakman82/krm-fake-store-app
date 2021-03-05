<template>
  <div class="mt-4">
    <h2 class="mb-3" v-if="$store.state.cart.length > 0">Cart Details</h2>
    <h2 v-else>
      There are no products selected in your cart <br />
      Please visit <nuxt-link to="/store">Store</nuxt-link> page. <br />
      KRM - Fake Store
    </h2>

    <v-row v-for="product in $store.state.cart" :key="product.id">
      <horizontal-product :product="product"></horizontal-product>
    </v-row>
  </div>
</template>

<script>
import HorizontalProduct from '../cards/HorizontalProduct'

export default {
  components: { HorizontalProduct },
}
</script>

<style></style>
