<template>
  <v-container>
    <v-row>
      <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
        <product-list></product-list>
      </v-col>
      <!-- bu order çok güzel bir özellik componentin sırasını da belirtebiliyor bu örnekte checkout-box tüm screen sizelerinde ilk olsun sadece sm de yani yan çvrilmiş telefon ekranında son olsun demiş olduk  -->
      <v-col sm="4" md="3" order="first" order-sm="last">
        <checkout-box></checkout-box>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CheckoutBox from '~/components/cart/CheckoutBox.vue'
import ProductList from '~/components/cart/ProductList.vue'
export default {
  components: { ProductList, CheckoutBox },
}
</script>

<style></style>
