<template>
  <div class="mt-3">
    <h2 class="mb-3" v-if="$store.state.cart.length > 0">Sepet Detayı</h2>
    <h2 v-else>
      Sepetinizde ürün bulunmamaktadır. <br />
      Dilerseniz <nuxt-link to="/store">Ürünler</nuxt-link> sayfamızı ziyaret
      edebilirsiniz. <br />
      KMC Grup
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
