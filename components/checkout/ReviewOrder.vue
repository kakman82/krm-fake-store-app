<template>
  <v-stepper-content step="3">
    <v-list dense disabled>
      <v-subheader class="title">Order Summary</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(value, name) in data" :key="name">
          <v-list-item-content>
            <v-list-item-title> {{ name }}: {{ value }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-btn color="primary" @click="submitOrder"> Confirm Order </v-btn>

    <v-btn text @click="previous"> Back </v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    data: Object,
    submitOrder: Function,
    previous: Function,
  },
}
</script>

<style></style>
