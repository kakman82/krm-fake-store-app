<template>
  <v-container mb-12>
    <v-row>
      <v-col>
        <h2>
          Products
          <v-btn to="store" color="primary" small text>See more...</v-btn>
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row>
          <v-col
            v-for="product in $store.state.fakeProducts.slice(0, 3)"
            :key="product.id"
          >
            <vertical-product
              :product="product"
              :addToCart="addToCart"
            ></vertical-product>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalProduct from '../cards/VerticalProduct'
export default {
  components: { VerticalProduct },

  methods: {
    // sepete atılan productun tamamı yani tüm bilgileri ile seçilen adet bilgisi vertical-action-card dan buraya gelecek, buradan action ile store a gidecek
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
