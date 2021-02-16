<template>
  <v-card outlined>
    <v-img :src="product.image" height="200px" max-width="295"></v-img>
    <v-card-title class="text-h6">{{ product.title }}</v-card-title>
    <v-card-subtitle>${{ product.price }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="success" outlined @click="addToCart(i)">
        <v-icon left small>mdi-basket-plus-outline</v-icon>
        Sepete Ekle
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
    // propsu bu şekilde emit gibi de tanımlayabiliriz Function olrak - addToCart fonksiyonunu da parent child olan The Component tanımlamış oluyor buradan yalnızca fonksiyonu çağırıyoruz
    addToCart: Function,
    i: Number,
  },
}
</script>

<style></style>
