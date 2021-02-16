import sampleProducts from '../sample_products'

export const state = () => ({
    snackbar: {
        show: false,
        variant: '',
        message: ''
    },
    cart: [], // { product, quantity }
    // scrimba vuetify eğitimindeki örnek productları ayrı bir dosyaya taşıyıp import ettim.  
    products: sampleProducts,
    // ref. https://fakestoreapi.com/
    fakeProducts: [],
    filteredCategories: ''

})

export const mutations = {

  pushProductToCart(state, product){
    state.cart.push(product)
    //console.log(state.cart.length);
  },

  setFilteredCategories(state, value) {
    // console.log(state.filteredCategories);
    state.filteredCategories = value
  },

  setProducts(state, payload){
    state.fakeProducts = payload
    // console.log(state.fakeProducts);
  },
  showSnackbar(state, settings) {
    let timeout = 0
    if(state.snackbar.show){
      state.snackbar.show = false
      timeout = 500
    }
    setTimeout(() => {
      state.snackbar.show = true
      state.snackbar.variant = settings.color
      state.snackbar.message = settings.text
    }, timeout)
  }
}

export const actions = {
  async nuxtServerInit({commit}){
    const response = await this.$axios.get('https://fakestoreapi.com/products')
    //console.log(response.data[1].category);
    const products = response.data
    commit('setProducts', products)
  },

  addProductToCart({commit, state}, product){
    // console.log('actionsa gelen product', product);
    // önce sepete bu ürün daha önce eklenmiş mi kontrol ediyoruz, bunun için de componentden gelen productın id ise cartdaki productın id sini check etmek için find ile bakıyoruz;
    // console.log('actiona gelen product ID: ', product.id);
    const cartProduct = state.cart.find((prod) => prod.id === product.id)
    // eğer sepette yoksa daha önce yeni bir ürün olduğunu anlayıp sepete eklenmesi için mutatina gönderiyoruz
    // console.log('carttaki product id:', cartProduct);
    if(!cartProduct){
      commit('pushProductToCart', product)
      commit('showSnackbar', { color: 'success', text: 'Ürün sepetinize başarıyla eklendi...'})
    } else {
      commit('showSnackbar',{ color: 'error', text: 'Bu ürün sepetinizde mevcut!'})
      //alert('Hoop ürün sepette zati...')
    } 
  },



}

export const getters = {
  getCartLength(state) {
    return state.cart.length;
  },
  getCart(state) {
    return state.cart
  },

  getFilteredProducts(state){
    if(state.filteredCategories) {
      return state.fakeProducts.filter((el) => el.category === state.filteredCategories)
    } else {
      return state.fakeProducts
    }
  },
  getCategoryNames(state){
    const productArray = state.fakeProducts
    let categoryNames = []
    
    for (let i = 0; i < productArray.length; i++) {
      const name = productArray[i].category
      categoryNames.push(name)
    }
    //return categoryNames
    // mükerrer elemanları ayıklamak için bu set yapısını kullandım;
    // https://wsvincent.com/javascript-remove-duplicates-array/
    return [...new Set(categoryNames)].sort();
  }
}

// chrome consolda Error: [vuex] Do not mutate vuex store state outside mutation handlers hatasını almamak için nuxt daki store.js deki strict tanımını false yaparak override ettim. Normal de production modunda zaten false oluyor
// https://github.com/nuxt/nuxt.js/issues/1521
// https://vuex.vuejs.org/guide/strict.html

export const strict = false