<template>
  <v-container>
    <v-row>
      <v-col class="mt-15" sm="3" offset-lg="1">
        <Sidebar />
      </v-col>
      <v-col class="mt-15" sm="9" lg="7">
        <product-display></product-display>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductDisplay from '~/components/store/ProductDisplay.vue'
import Sidebar from '~/components/store/Sidebar.vue'
export default {
  components: { ProductDisplay, Sidebar },
}
</script>

<style></style>
