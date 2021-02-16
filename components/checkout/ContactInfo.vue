<template>
  <v-stepper-content step="1">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="data.name"
        :rules="[rules.required]"
        label="Ad ve Soyad"
        clearable
        required
      >
      </v-text-field>
      <v-text-field
        v-model="data.email"
        :rules="[rules.required, rules.email]"
        label="Email"
        clearable
        required
      >
      </v-text-field>
      <v-text-field
        v-model="data.phone"
        :rules="[rules.required, rules.phone]"
        label="Telefon Numarası"
        clearable
        required
      >
      </v-text-field>
      <v-btn :disabled="!valid" color="primary" @click="validate">
        Devam Et
      </v-btn>
      <v-btn text @click="$router.push({ name: 'cart' })"> İptal </v-btn>
    </v-form>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    data: Object,
    rules: Object,
    next: Function,
  },
  data() {
    return {
      valid: true,
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()

      if (this.$refs.form.validate()) {
        this.next()
      }
    },
  },
}
</script>

<style></style>
