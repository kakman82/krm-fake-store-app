(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{409:function(t,e,r){var content=r(452);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("5c601b76",content,!0,{sourceMap:!1})},416:function(t,e,r){"use strict";r.r(e);r(16),r(186);var o={data:function(){return{}},computed:{totalPrice:function(){return this.$store.getters.getCartTotalPriceWithoutFees},discount:function(){return Number(0)},taxFee:function(){return(.18*(this.totalPrice-this.discount)).toFixed(2)},shippingFee:function(){var t=this.totalPrice-this.discount;return(.1*(Number(t)+Number(this.taxFee))).toFixed(2)},cartTotal:function(){return(Number(this.totalPrice)-Number(this.discount)+Number(this.taxFee)+Number(this.shippingFee)).toFixed(2)}},methods:{goToCheckout:function(){this.$router.push({name:"checkout"})}}},n=r(44),c=r(48),l=r.n(c),d=r(378),v=r(404),h=r(385),f=r(435),_=r(405),m=r(438),x=r(406),w=r(473),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-btn",{attrs:{color:"primary",block:"",disabled:0===t.$store.state.cart.length},on:{click:t.goToCheckout}},[t._v("\n    Confirm ($ "+t._s(t.cartTotal)+")\n  ")]),t._v(" "),r("v-card",{staticClass:"my-4",attrs:{outlined:""}},[r("v-card-title",[t._v("Payment Detailts")]),t._v(" "),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-subheader",[t._v(" Cart Total")])],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{value:t.totalPrice,prefix:"$",readonly:""}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-subheader",[t._v("Discount")])],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{value:t.discount,prefix:"$"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-subheader",[t._v("Tax(%18)")])],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{value:t.taxFee,prefix:"$"}})],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-subheader",[t._v("Shipping Cost(%10)")])],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{value:t.shippingFee,prefix:"$"}})],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-subheader",{staticClass:"font-weight-bold"},[t._v("Total")])],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{value:t.cartTotal,prefix:"$"}})],1)],1)],1)],1),t._v(" "),r("v-btn",{attrs:{color:"primary",block:"",disabled:0===t.$store.getters.getCartLength},on:{click:t.goToCheckout}},[t._v("\n    Confirm ($ "+t._s(t.cartTotal)+")\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardText:h.c,VCardTitle:h.d,VCol:f.a,VDivider:_.a,VRow:m.a,VSubheader:x.a,VTextField:w.a})},417:function(t,e,r){"use strict";r.r(e);var o={components:{HorizontalProduct:r(425).default}},n=r(44),c=r(48),l=r.n(c),d=r(438),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-4"},[t.$store.state.cart.length>0?r("h2",{staticClass:"mb-3"},[t._v("Cart Details")]):r("h2",[t._v("\n    There are no products selected in your cart "),r("br"),t._v("\n    Please visit "),r("nuxt-link",{attrs:{to:"/store"}},[t._v("Store")]),t._v(" page. "),r("br"),t._v("\n    KRM - Fake Store\n  ")],1),t._v(" "),t._l(t.$store.state.cart,(function(t){return r("v-row",{key:t.id},[r("horizontal-product",{attrs:{product:t}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{HorizontalProduct:r(425).default}),l()(component,{VRow:d.a})},425:function(t,e,r){"use strict";r.r(e);r(186);var o={props:{product:Object},data:function(){return{newQuantity:this.product.quantity}},computed:{productTotal:function(){return(this.newQuantity*this.product.price).toFixed(2)}},watch:{newQuantity:function(t){t>=10&&this.$store.commit("showSnackbar",{show:!0,color:"warning",text:"Should not be above 10!"})}},methods:{increaseQuantity:function(t){this.newQuantity+=1,this.$store.dispatch("incrementQuantity",t.id)},decreaseQuantity:function(t){this.newQuantity-=1,this.$store.dispatch("decrementQuantity",t.id)},removeFromCart:function(t){this.$store.dispatch("removeProduct",t)}}},n=(r(451),r(44)),c=r(48),l=r.n(c),d=r(378),v=r(404),h=r(385),f=r(435),_=r(475),m=r(107),x=r(141),w=r(438),C=r(380),y=r(473),k=r(479),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mt-3"},[r("v-row",{attrs:{"min-width":"100%"}},[r("v-col",[r("v-card",{attrs:{outlined:""}},[r("div",{staticClass:"d-flex flex-wrap"},[r("div",{staticClass:"d-flex"},[r("v-img",{staticClass:"ma-2",attrs:{src:t.product.image,contain:"",sizes:"sm-3",height:"120px",width:"120px"}})],1),t._v(" "),r("div",{staticClass:"d-flex align-center",staticStyle:{width:"300px"}},[r("div",[r("v-card-title",[t._v(t._s(t.product.title))]),t._v(" "),r("v-card-subtitle",[t._v("Unit Price: ₺ "+t._s(t.product.price))]),t._v(" "),r("v-card-subtitle",{staticClass:"mt-n8"},[t._v("Stock: 10")])],1)]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"d-flex space-between"},[r("div",{staticClass:"d-flex align-center mt-3 mr-5",staticStyle:{width:"130px"}},[r("v-text-field",{staticClass:"text-center",attrs:{readonly:"",dense:"",solo:"",placeholder:t.product.quantity.toString(),"prepend-icon":"mdi-plus","append-outer-icon":"mdi-minus"},on:{"click:prepend":function(e){t.newQuantity<10&&t.increaseQuantity(t.product)},"click:append-outer":function(e){t.newQuantity>1&&t.decreaseQuantity(t.product)}},model:{value:t.newQuantity,callback:function(e){t.newQuantity=e},expression:"newQuantity"}},[t._v(">")])],1),t._v(" "),r("div",{staticClass:"d-flex align-center",staticStyle:{width:"120px"}},[r("v-card-title",{staticClass:"text-body-1 font-weight-bold"},[t._v("₺ "+t._s(t.productTotal))])],1),t._v(" "),r("div",{staticClass:"d-flex align-center",staticStyle:{width:"50px"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:"",rounded:"",color:"error"},on:{click:function(e){return t.removeFromCart(t.product)}}},"v-btn",n,!1),o),[r("v-icon",[t._v("mdi-trash-can-outline")])],1)]}}])},[t._v(" "),r("span",[t._v("Remove from cart!")])])],1)])],1)])],1)],1)],1)}),[],!1,null,"c75b43b8",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardSubtitle:h.b,VCardTitle:h.d,VCol:f.a,VContainer:_.a,VIcon:m.a,VImg:x.a,VRow:w.a,VSpacer:C.a,VTextField:y.a,VTooltip:k.a})},451:function(t,e,r){"use strict";r(409)},452:function(t,e,r){(e=r(9)(!1)).push([t.i,".v-card__title[data-v-c75b43b8]{font-size:small;word-break:break-word}",""]),t.exports=e},487:function(t,e,r){"use strict";r.r(e);var o=r(416),n={components:{ProductList:r(417).default,CheckoutBox:o.default}},c=r(44),l=r(48),d=r.n(l),v=r(435),h=r(475),f=r(438),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"mt-10"},[e("v-row",{staticClass:"mt-6"},[e("v-col",{attrs:{sm:"6",md:"8"}},[e("product-list")],1),this._v(" "),e("v-col",{attrs:{sm:"6",md:"4",order:"first","order-sm":"last"}},[e("checkout-box")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ProductList:r(417).default,CheckoutBox:r(416).default}),d()(component,{VCol:v.a,VContainer:h.a,VRow:f.a})}}]);