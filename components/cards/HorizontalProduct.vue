<template>
  <v-container class="mt-3">
    <v-row min-width="100%">
      <v-col>
        <v-card outlined>
          <div class="d-flex flex-wrap">
            <div class="d-flex">
              <v-img
                :src="product.image"
                class="ma-2"
                contain
                sizes="sm-3"
                height="120px"
                width="120px"
              ></v-img>
            </div>
            <div class="d-flex align-center" style="width: 300px">
              <div>
                <v-card-title>{{ product.title }}</v-card-title>
                <v-card-subtitle
                  >Unit Price: $ {{ product.price }}</v-card-subtitle
                >
                <v-card-subtitle class="mt-n8">Stock: 10</v-card-subtitle>
              </div>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex space-between">
              <div class="d-flex align-center mt-3 mr-5" style="width: 130px">
                <v-text-field
                  class="text-center"
                  v-model="newQuantity"
                  readonly
                  dense
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
                  >></v-text-field
                >
              </div>
              <div class="d-flex align-center" style="width: 120px">
                <v-card-title class="text-body-1 font-weight-bold"
                  >$ {{ productTotal }}</v-card-title
                >
              </div>

              <div class="d-flex align-center" style="width: 50px">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      rounded
                      color="error"
                      v-bind="attrs"
                      v-on="on"
                      @click="removeFromCart(product)"
                    >
                      <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Remove from cart!</span>
                </v-tooltip>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
          text: 'Should not be above 10!',
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
  font-size: small;
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
