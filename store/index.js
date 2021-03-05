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
    filteredCategories: '',
    arrowProducts : []

})

export const mutations = {

  pushProductToCart(state, product){
    state.cart.push(product)
    //console.log(state.cart.length);
  },

  removeProductFromCart(state, product){
    state.cart =  state.cart.filter((prod)=>prod.id !== product.id)

  },
  
    // adetdeki artış ve azalışı direk store üzerinden yaptık daha iyi oldu diğer türlü duplicete key uyarısı alıyordum ve storedaki productların idlerini eziyordum
    // ref aldığım kod --> https://stackoverflow.com/questions/60788909/how-to-make-vuex-state-update-ui-when-its-updated
  increment(state, productId) {
    state.cart = state.cart.map(cartProduct => {
      if (cartProduct.id === productId) {
        cartProduct.quantity += 1;
      }
      return cartProduct;
    });
  },
  decrement(state, productId) {
    state.cart = state.cart.map(cartProduct => {
      if (cartProduct.id === productId) {
        cartProduct.quantity -= 1;
      }
      return cartProduct;
    });
  },

  setFilteredCategories(state, value) {
    // console.log(state.filteredCategories);
    state.filteredCategories = value
  },

  setProducts(state, payload){
    state.fakeProducts = payload
    // console.log(state.fakeProducts);
  },
  setArrowProducts(state, payload){
    state.arrowProducts = payload

  },
  showSnackbar(state, settings) {

    // mesajların birbirini önüne geçmesini engellemek için if ile mevcut ta show: true mu ya bakıyoruz, evet ise show:false yapıp sonra araya bir timeout süresi ekleyip -yarım saniye verdim - bekletip sonra diğer mesajı gösteriyoruz
    let timeout = 0
    if(state.snackbar.show){
      state.snackbar.show = false
      timeout = 500
    }
    setTimeout(() => {
      state.snackbar.show = settings.show
      state.snackbar.variant = settings.color
      state.snackbar.message = settings.text
    }, timeout)
  },

  resetCart(state){
    state.cart = []
  }
}

export const actions = {
  async nuxtServerInit({commit}){
    const fakeProductsApi =  this.$axios.get('https://fakestoreapi.com/products')
    //console.log(response.data[1].category);
    // const products = response.data

    const arrowProductsApi = this.$axios.get(
      'http://api.arrow.com/itemservice/v4/en/search/token',
      {
        params: {
          search_token: 'bav99-7-',
          login: 'kmc-grup',
          apikey:
            '337bbb7e77e9fff93546c6749e76a42f82b42ab829c62e7b1ef56690a88d14f2',
        },
      }
    )
    const [fakeProductResponse, arrowResponse] = await Promise.all([
      fakeProductsApi,
      arrowProductsApi,
    ])

    const fakeProducts = fakeProductResponse.data
    const arrowProducts = arrowResponse.data.itemserviceresult.data
    // console.log('arrow response: ', arrowProducts);  

    commit('setProducts', fakeProducts)
    commit('setArrowProducts', arrowProducts)
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
      commit('showSnackbar', { show: true, color: 'success', text: 'Ürün sepetinize başarıyla eklendi...'})
    } else {
      commit('showSnackbar',{ show: true, color: 'error', text: 'Bu ürün sepetinizde mevcut!'})
      //alert('Hoop ürün sepette zati...')
    } 
  },
    // adetdeki artış ve azalışı direk store üzerinden yaptık daha iyi oldu diğer türlü duplicete key uyarısı alıyordum ve storedaki productların idlerini eziyordum
    // ref aldığım kod --> https://stackoverflow.com/questions/60788909/how-to-make-vuex-state-update-ui-when-its-updated
  incrementQuantity({ commit }, productId) {
    commit("increment", productId);
  },
  decrementQuantity({ commit }, productId) {
    commit("decrement", productId);
  },
  removeProduct({commit}, product){
    commit('removeProductFromCart', product)
    commit('showSnackbar', { show: true, color: 'primary', text: 'Ürün sepetinizden çıkarıldı!'})
  }

}

export const getters = {
  getCartLength(state) {
    return state.cart.length;
  },
  getCart(state) {
    return state.cart
  },
  getCartTotalPriceWithoutFees(state){
    let totalPrice = 0
    let cartArray = state.cart
    for (let index = 0; index <cartArray.length; index++) {
       totalPrice += cartArray[index].price * cartArray[index].quantity
    }
    return totalPrice.toFixed(2)
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