<template>
  <v-card class="mx-auto" max-width="344">
    <v-img contain :src="product.image" height="250px"></v-img>

    <!-- çok uzun olan title lar birden fazla satırda olunca card boyutu farklılaşıyordu, bunu container ve height="130px" ile çözdüm  -->
    <v-container style="height: 130px" ml-n2>
      <v-card-title class="text-subtitle-1">
        {{ product.title }}
      </v-card-title>
    </v-container>

    <v-card-subtitle> ₺ {{ product.price }}</v-card-subtitle>

    <v-card-actions>
      <v-row class="d-flex">
        <v-col>
          <v-select
            dense
            :items="qtyValues"
            solo
            :value="1"
            v-model="quantity"
          ></v-select>
        </v-col>
        <v-col>
          <v-btn
            medium
            color="success"
            outlined
            @click="addToCart(product, quantity)"
          >
            <v-icon left small>mdi-basket-plus-outline</v-icon>
            Sepete Ekle
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon @click="show = !show" v-bind="attrs" v-on="on">
                <v-icon>{{
                  show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </template>
            <span>Açıklamalar için tıkla!</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="text-justify">
          <strong>Product Description:</strong> <br />
          {{ product.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
    addToCart: Function,
  },
  data() {
    return {
      show: false,
      quantity: 1,
    }
  },
  computed: {
    qtyValues() {
      //TODO stok adedi için 10 sayısı hardcode olarak verdim, bu değer normalde apiden gelmeli... çalıştığım örnek api de bu bilgi yoktu
      let qtyArray = []
      for (let index = 1; index <= 10; index++) {
        qtyArray.push(index)
      }
      //console.log(qtyArray)
      return qtyArray
    },
  },
}
</script>

<style scoped>
.v-card__title {
  word-break: break-word;
}
</style>
