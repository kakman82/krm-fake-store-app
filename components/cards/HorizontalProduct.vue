<template>
  <v-card outlined min-width="100%" class="mb-5 pa-4">
    <div class="d-flex">
      <div>
        <v-img
          contain
          :src="product.image"
          height="120px"
          width="120px"
        ></v-img>
      </div>

      <div class="d-flex flex-column justify-center">
        <v-card-title class="text-body2">{{ product.title }}</v-card-title>
        <v-card-subtitle>${{ product.price }}</v-card-subtitle>

        <v-btn color="error" class="ml-4" outlined small>
          <v-icon small left>mdi-minus-thick</v-icon>
          Sepetten Çıkar
        </v-btn>

        <!-- <v-btn
          v-if="btnAction === 'remove'"
          color="error"
          class="ml-4"
          outlined
          small
          @click="updateCart(i)"
        >
          <v-icon small left>mdi-minus-thick</v-icon>
          Sepetten Çıkar
        </v-btn>
        <v-btn v-else color="success" small outlined @click="updateCart(i)">
          <v-icon small left>mdi-basket-plus-outline</v-icon>
          Sepete Ekle
        </v-btn> -->
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
    updateCart: Function,
    btnAction: String,
    i: Number,
  },
}
</script>

<style></style>
