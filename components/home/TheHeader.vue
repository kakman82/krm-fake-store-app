<template>
  <v-sheet :height="sheetHeight">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <!-- bu şekilde sayfanın mobil tablet yada web olmasına göre header ın görünüm büyüklüğünü ayarlayabiliyoruz hidden hariç gibi düşünülebilir gizli -->
        <h1 class="text-center display-3 hidden-xs-only">
          Welcome to KeReM - Fake Store App
        </h1>
        <h1 class="text-center display-1 hidden-sm-and-up">
          Welcome to KeReM - Fake Store App
        </h1>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    // https://vuetifyjs.com/en/features/breakpoints/
    // bu şekilde breakpoint ile sayfanın size yani mobile, tablet, web browser olmasına göre height değerlerini tanımlayabiliyor ve :height property ile bağlayabiliyoruz - v-sheet içindeki gibi
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 220
        case 'sm':
          return 400
        case 'md':
          return 500
        case 'lg':
          return 600
        case 'xl':
          return 800
      }
    },
  },
}
</script>

<style></style>
