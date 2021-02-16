<template>
  <div>
    <v-app-bar dense fixed>
      <v-toolbar-title>KMC-Katalog</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- mobile görünüm için eklediğim span class vuetify derslerinden  -->
      <span class="hidden-sm-and-up" @click.stop="drawer = !drawer">
        <v-btn>Menu</v-btn>
      </span>

      <v-toolbar-items
        v-for="item in items"
        :key="item.title"
        class="hidden-xs-only"
      >
        <v-btn
          v-if="item.title === 'Sepet' && $store.getters.getCartLength > 0"
          :to="item.link"
          text
        >
          <v-icon small left>{{ item.icon }}</v-icon>
          <v-badge color="green" :content="$store.getters.getCartLength">
            {{ item.title }}
          </v-badge>
        </v-btn>

        <v-btn v-else :to="item.link" text>
          <v-icon small left>{{ item.icon }}</v-icon>

          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon small>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content
            v-if="item.title === 'Sepet' && $store.getters.getCartLength > 0"
          >
            <v-list-item-title>
              <v-badge color="green" :content="$store.getters.getCartLength">
                {{ item.title }}
              </v-badge>
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-content v-else>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Ana Sayfa', link: '/', icon: 'mdi-home-circle' },
        { title: 'Ürünler', link: 'store', icon: 'mdi-storefront' },
        { title: 'Sepet', link: 'cart', icon: 'mdi-cart-arrow-down' },
      ],
    }
  },
}
</script>

<style></style>
