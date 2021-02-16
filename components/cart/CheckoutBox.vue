<template>
  <div>
    <v-card outlined>
      <v-card-title>Ödeme Detayları</v-card-title>
      <v-card-text>
        <v-text-field label="İsim"></v-text-field>
        <v-text-field label="Email"></v-text-field>

        <p>Sepet Toplamı: $999</p>
        <v-btn color="primary" @click="goToCheckout"> Sepeti Onayla </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
