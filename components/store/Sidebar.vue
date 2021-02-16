<template>
  <div>
    <v-sheet
      v-if="$vuetify.breakpoint.mdAndUp"
      :elevation="4"
      class="pa-8"
      tile
    >
      <h3>Kategoriler</h3>

      <v-checkbox
        dense
        v-for="(category, i) in catNames"
        :key="i"
        :label="catNames[i].toUpperCase()"
        :value="category"
        v-model="selectedCategories"
        @change="selected($event)"
      ></v-checkbox>
    </v-sheet>
    <v-expansion-panels v-else>
      <v-expansion-panel>
        <v-expansion-panel-header> Kategoriler </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-checkbox
            dense
            v-for="(category, i) in catNames"
            :key="i"
            :label="catNames[i].toUpperCase()"
            :value="category"
            v-model="selectedCategories"
            @change="selected($event)"
          ></v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategories: '',
      checkbox: true,
    }
  },
  computed: {
    catNames() {
      return this.$store.getters['getCategoryNames']
    },
  },
  methods: {
    selected() {
      // checkbox da seçilen değerleri change ile bir arraya yazdırdım ref --> http://jsfiddle.net/eLzavj5f/
      this.$store.commit('setFilteredCategories', this.selectedCategories)
    },
  },
}
</script>

<style></style>
