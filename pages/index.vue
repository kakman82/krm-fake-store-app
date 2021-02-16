<template>
  <div>
    <the-header></the-header>
    <the-product></the-product>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '~/components/home/TheFooter.vue'
import TheHeader from '~/components/home/TheHeader.vue'
import TheProduct from '~/components/home/TheProduct.vue'
export default {
  components: { TheHeader, TheProduct, TheFooter },
}
</script>

<style></style>
