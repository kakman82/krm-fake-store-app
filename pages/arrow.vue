<template>
  <v-container class="mt-16 pa-16">
    <v-row v-for="(arrow, index) in arrowProducts" :key="index">
      <v-card max-width="374">
        <v-img
          class="ma-3"
          contain
          height="150"
          position="center center"
          :src="arrow.image"
        ></v-img>

        <v-card-title>{{ arrow.title }}</v-card-title>

        <v-card-text>
          <div class="my-4 subtitle-1" style="font-weight: bold">
            {{ arrow.currency }} {{ arrow.price }}
          </div>
          <div class="my-4 caption">
            Min Sipariş Adedi: {{ arrow.minQty }} <br />
            Max Sipariş Adedi: {{ arrow.maxQty }}
          </div>

          <div class="my-4 text-body-1">
            {{ arrow.desc }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Detay Özellikler</v-card-title>

        <v-card-text>
          <v-btn rounded color="primary" :href="arrow.doc" target="_blank" small
            >Dokümanı Görüntüle</v-btn
          >
        </v-card-text>

        <v-card-actions>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              solo
              type="number"
              v-model.number="quantity"
              :value="quantity"
              :rules="[
                rules.required(quantity),
                rules.min(quantity, arrow.minQty),
                rules.max(quantity, arrow.maxQty),
              ]"
            >
            </v-text-field>
            <v-btn
              :disabled="!valid"
              rounded
              color="success"
              @click="addToCart(arrow)"
            >
              Sepete Ekle
            </v-btn>
          </v-form>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      arrowProducts: [],
      quantity: null,

      rules: {
        required: (value) => !!value || 'Adet girişi yapınız.',
        min(value, min) {
          return value >= min || `Sipariş ${min} adetten az olmamalıdır.`
        },
        max(value, max) {
          return value <= max || `Sipariş ${max} adeti geçemez.`
        },
      },
    }
  },

  created() {
    this.arrowProducts = this.$store.state.arrowProducts
    // console.log('önce', this.arrowProducts)
    let array = this.arrowProducts
    const arrowProductArray = []
    for (let index = 0; index < array.length; index++) {
      const element = array[index].PartList[index]
      const items = {
        id: element.itemId,
        desc: element.desc,
        title: element.partNum,
        doc: element.resources[0].uri,
        image: element.resources[2].uri,
        currency: element.InvOrg.webSites[0].sources[0].currency,
        price:
          element.InvOrg.webSites[1].sources[0].sourceParts[0].Prices
            .resaleList[0].price,
        minQty:
          element.InvOrg.webSites[1].sources[0].sourceParts[0].Prices
            .resaleList[0].minQty,
        maxQty:
          element.InvOrg.webSites[1].sources[0].sourceParts[0].Prices
            .resaleList[0].maxQty,
      }

      //console.log('InvOrg:', element.InvOrg.webSites)
      arrowProductArray.push(items)
    }
    // console.log(arrowProductArray)
    this.arrowProducts = arrowProductArray
    // console.log('sonra', this.arrowProducts)
    this.quantity = arrowProductArray[0].minQty
  },

  methods: {
    addToCart(arrowProd) {
      //TODO store actions a dispatch edilecek - öncesinde storedaki yapıya uygun biçime alınrak image, id, quantity vs

      if (this.$refs.form[0].validate()) {
        // console.log('Form valid')
        const payload = {
          id: arrowProd.id,
          title: arrowProd.title,
          image: arrowProd.image,
          price: arrowProd.price,
          quantity: this.quantity,
        }
        // console.log(payload)
        this.$store.dispatch('addProductToCart', payload)
      } else {
        console.log('Form valid değil')
      }
    },
  },
}
</script>

<style></style>
