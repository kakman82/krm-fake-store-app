<template>
  <div>
    <h3>Ürünler</h3>
    <v-row class="mt-3">
      <v-col
        sm="6"
        md="6"
        v-for="product in $store.getters.getFilteredProducts"
        :key="product.title"
      >
        <!-- <vertical-product
          :product="product"
          :addToCart="addToCart"
        ></vertical-product> -->

        <vertical-action-card
          :product="product"
          :addToCart="addToCart"
        ></vertical-action-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VerticalActionCard from '../cards/VerticalActionCard.vue'
import VerticalProduct from '../cards/VerticalProduct'
export default {
  components: { VerticalProduct, VerticalActionCard },
  methods: {
    addToCart(product, quantity) {
      // number a çevirmek için 1 ile çarptım ve bu şekilde mevcut product objesine quantity i de ekledim
      product.quantity = quantity * 1
      // yeni bir objeye aldım hepsini
      const cartProduct = { ...product }
      //console.log('actionsa gidecek olan ...product: ', cartProduct)
      // action a gönderdim
      this.$store.dispatch('addProductToCart', cartProduct)
    },
  },
}
</script>

<style></style>
