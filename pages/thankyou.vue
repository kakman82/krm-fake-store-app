<template>
  <div class="text-center mt-15">
    <v-overlay :value="overlay" class="flex-column">
      <p>Taking order...</p>
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <v-container v-if="!overlay">
      <v-row>
        <v-col sm="6" offset-sm="3" xl="4" offset-xl="4">
          <h1>Order is taken!</h1>
          <h2>
            Your order will be shipped as soon as possible.<br />
            Thank you for purchasing.<br />
            Nice and healty day,<br />
            KRM Fake Store
          </h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      overlay: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.overlay = false
    }, 3000)
  },
  beforeMount() {
    this.overlay = true
  },
}
</script>
