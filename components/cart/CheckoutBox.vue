<template>
  <div>
    <v-btn
      color="primary"
      block
      @click="goToCheckout"
      :disabled="$store.state.cart.length === 0 ? true : false"
    >
      Sepeti Onayla (₺ {{ cartTotal }})
    </v-btn>
    <v-card outlined class="my-4">
      <v-card-title>Sipariş Özeti</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-subheader>Ürün Toplamı</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-text-field
              :value="totalPrice"
              prefix="₺"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>İndirim</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-text-field :value="discount" prefix="₺"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>Kdv(%18)</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-text-field :value="taxFee" prefix="₺"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>Kargo(%10)</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-text-field :value="shippingFee" prefix="₺"></v-text-field>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="6">
            <v-subheader class="font-weight-bold">Sepet Toplamı</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-text-field :value="cartTotal" prefix="₺"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-btn
      color="primary"
      block
      @click="goToCheckout"
      :disabled="$store.getters.getCartLength === 0 ? true : false"
    >
      Sepeti Onayla (₺ {{ cartTotal }})
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // cartTotal: this.$store.getters.getCartTotalPrice,
    }
  },
  computed: {
    totalPrice() {
      return this.$store.getters.getCartTotalPriceWithoutFees
    },
    discount() {
      return Number(0.0)
    },
    taxFee() {
      const value = this.totalPrice - this.discount
      return (value * 0.18).toFixed(2)
    },
    shippingFee() {
      const value = this.totalPrice - this.discount
      const totalWithTax = Number(value) + Number(this.taxFee)
      return (totalWithTax * 0.1).toFixed(2)
    },
    cartTotal() {
      const total =
        Number(this.totalPrice) -
        Number(this.discount) +
        Number(this.taxFee) +
        Number(this.shippingFee)
      return total.toFixed(2)
    },
  },
  methods: {
    goToCheckout() {
      // console.log('checkout')
      // this.$router.push('/checkout')
      // yukarıdaki ve aşağıdaki ikisi de aynı işlem , name ile kullanılmasına örnek olması için ekledim
      this.$router.push({ name: 'checkout' })
    },
  },
}
</script>

<style></style>
