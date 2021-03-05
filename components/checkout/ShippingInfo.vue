<template>
  <v-stepper-content step="2">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="data.address"
        :rules="[rules.required]"
        label="Address"
        clearable
        required
      >
      </v-text-field>
      <v-text-field
        v-model="data.state"
        :rules="[rules.required]"
        label="State"
        clearable
        required
      >
      </v-text-field>
      <v-text-field
        v-model="data.city"
        :rules="[rules.required]"
        label="City"
        clearable
        required
      >
      </v-text-field>
      <v-btn :disabled="!valid" color="primary" @click="validate">
        Continue
      </v-btn>
      <v-btn text @click="previous"> Back </v-btn>
    </v-form>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    data: Object,
    rules: Object,
    next: Function,
    previous: Function,
  },
  data() {
    return {
      valid: true,
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()

      // eğer form valid ise next funk çalıştır demiş olduk
      if (this.$refs.form.validate()) {
        this.next()
      }
    },
  },
}
</script>

<style></style>
