<template>
  <v-container mb-12>
    <v-row>
      <v-col>
        <h2>
          Ürünler
          <v-btn to="store" color="primary" small text>Tamamını Gör</v-btn>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalActionCard from '../cards/VerticalActionCard.vue'
import VerticalProduct from '../cards/VerticalProduct'
export default {
  components: { VerticalProduct, VerticalActionCard },

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
