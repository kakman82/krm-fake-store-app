<template>
  <v-card class="d-flex flex-row pa-2 ma-3" width="850px">
    <v-container>
      <v-row>
        <!-- Ürün fotoğrafı  -->
        <v-col cols="2">
          <v-img
            :src="product.image"
            contain
            height="120px"
            width="120px"
          ></v-img>
        </v-col>
        <!-- ürün adı ve birim fiyat bilgisi  -->
        <v-col cols="5">
          <v-card-title class="text-subtitle-1">{{
            product.title
          }}</v-card-title>
          <v-card-subtitle>
            Ürün Birim Fiyatı: ₺ {{ product.price }}<br />
            Stok Adedi: 10
          </v-card-subtitle>
        </v-col>
        <!-- Ürün adet artırma azaltma butonu  -->
        <v-col cols="2" align-self="center" class="mt-7">
          <v-text-field
            class="text-center"
            v-model="newQuantity"
            readonly
            solo
            :placeholder="product.quantity.toString()"
            prepend-icon="mdi-plus"
            append-outer-icon="mdi-minus"
            @click:prepend="
              {
                {
                  newQuantity < 10 ? increaseQuantity(product) : ''
                }
              }
            "
            @click:append-outer="
              {
                {
                  newQuantity > 1 ? decreaseQuantity(product) : ''
                }
              }
            "
          >
          </v-text-field>
        </v-col>
        <!-- Ürün fiyat x adet bilgisi  -->
        <v-col cols="2" align-self="center">
          <v-card-title class="text-body-1 font-weight-bold"
            >$ {{ productTotal }}</v-card-title
          >
        </v-col>
        <!-- Sepetten sil butonu  -->
        <v-col cols="1" align-self="center">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                color="error"
                v-bind="attrs"
                v-on="on"
                @click="removeFromCart(product)"
              >
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </template>
            <span>Sil</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      newQuantity: this.product.quantity,
    }
  },
  computed: {
    productTotal() {
      return (this.newQuantity * this.product.price).toFixed(2)
    },
  },
  watch: {
    newQuantity(value) {
      if (value >= 10) {
        // alert('En fazla 10 adet seçilebilir!')
        this.$store.commit('showSnackbar', {
          show: true,
          color: 'warning',
          text: 'En fazla 10 adet seçilebilir!',
        })
      }
    },
  },

  methods: {
    // adetdeki artış ve azalışı direk store üzerinden yaptık daha iyi oldu diğer türlü duplicete key uyarısı alıyordum ve storedaki productların idlerini eziyordum
    // ref aldığım kod --> https://stackoverflow.com/questions/60788909/how-to-make-vuex-state-update-ui-when-its-updated

    increaseQuantity(product) {
      this.newQuantity += 1
      this.$store.dispatch('incrementQuantity', product.id)
    },
    decreaseQuantity(product) {
      this.newQuantity -= 1
      this.$store.dispatch('decrementQuantity', product.id)
    },
    removeFromCart(product) {
      this.$store.dispatch('removeProduct', product)
    },
  },
}
</script>

<style scoped>
.v-card__title {
  word-break: break-word;
}
/* .card {
  border: 1px yellowgreen;
}
.container {
  border: 1px solid green;
}
.row {
  border: 1px solid red;
}
.col {
  border: 1px solid blue;
} */
</style>
