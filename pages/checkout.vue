<template>
  <v-container class="mt-15">
    <v-row>
      <v-col>
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1"
              >İletişim Bilgileri</v-stepper-step
            >
            <v-stepper-step step="2" :complete="step > 2"
              >Teslimat Bilgileri</v-stepper-step
            >
            <v-stepper-step step="3">Sipariş Özeti</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <!-- yukarıda belirttiğimiz stepleri kaç adet olacağı ve tamamlandığında hangisine geçeciğini belirttikten sonra burada items altında her bir stepte ne olacağını belirtiyoruz ki üçü içinde ayrı ayrı komponentler oluşturduk -->
            <contact-info
              :data="data"
              :rules="rules"
              :next="next"
            ></contact-info>

            <shipping-info
              :data="data"
              :rules="rules"
              :next="next"
              :previous="previous"
            ></shipping-info>

            <review-order
              :data="data"
              :submitOrder="submitOrder"
              :previous="previous"
            ></review-order>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactInfo from '~/components/checkout/ContactInfo.vue'
import ReviewOrder from '~/components/checkout/ReviewOrder.vue'
import ShippingInfo from '~/components/checkout/ShippingInfo.vue'
export default {
  components: { ContactInfo, ShippingInfo, ReviewOrder },
  data() {
    return {
      step: 1,
      data: {
        name: '',
        email: '',
        phone: '',
        address: '',
        state: '',
        city: '',
      },
      // email ve tel no kontrolü için ayrı bir isEmail gibi paket yüklemeden bu pattern de kullanılabilir - vuetify da default mevcut bunu yerine https://vee-validate.logaretm.com/v3/ de kullanılabilir
      rules: {
        required: (value) => !!value || 'Lütfen giriş yapınız.',
        // zip i formda kullanmadım yerine il - ilçe kullandım
        // zip: (value) => value.length == 5 || '5 karakter olmalıdır.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return (
            pattern.test(value) || 'Lütfen geçerli bir email adresi giriniz.'
          )
        },
        phone: (value) => {
          const pattern = /\d{10}/
          return (
            pattern.test(value) ||
            'Lütfen geçerli bir telefon numarası giriniz.'
          )
        },
      },
    }
  },
  methods: {
    next() {
      this.step += 1
    },
    previous() {
      this.step -= 1
    },
    submitOrder() {
      this.$router.push({ name: 'thankyou' })
      setTimeout(() => {
        this.$store.commit('resetCart')
      }, 3000)
    },
  },
}
</script>

<style></style>
