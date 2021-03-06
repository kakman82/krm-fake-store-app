(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{387:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return h}));var n=r(0),o=r(412),l=r(413),c=r(411),v=Object(n.g)("v-stepper__header"),h=Object(n.g)("v-stepper__items");o.a,c.a,l.a},411:function(e,t,r){"use strict";r(16),r(18),r(67),r(38);var n=r(182),o=r(115),l=r(0),c=r(6),v=Object(c.a)(Object(o.a)("stepper","v-stepper-content","v-stepper"));t.a=v.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){return(this.$vuetify.rtl?!this.isReverse:this.isReverse)?n.e:n.f},styles:function(){return this.isVertical?{height:Object(l.f)(this.height)}:{}}},watch:{isActive:function(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter:function(){var e=this,t=0;requestAnimationFrame((function(){t=e.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return e.isActive&&(e.height=t||"auto")}),450)},leave:function(){var e=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return e.height=0}),10)},toggle:function(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render:function(e){var t={staticClass:"v-stepper__content"},r={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);var n=e("div",r,[this.$slots.default]),content=e("div",t,[n]);return e(this.computedTransition,{on:this.$listeners},[content])}})},412:function(e,t,r){"use strict";r(65),r(42),r(16);var n=r(2),o=(r(455),r(115)),l=r(191),c=r(19),v=r(6),h=r(5);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var _=Object(v.a)(Object(o.b)("stepper"),l.a,c.a);t.a=_.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,vertical:Boolean},data:function(){var data={isBooted:!1,steps:[],content:[],isReverse:!1};return data.internalLazyValue=null!=this.value?this.value:(data[0]||{}).step||1,data},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{internalValue:function(e,t){this.isReverse=Number(e)<Number(t),t&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(h.a)("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister:function(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter((function(i){return i!==e})):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter((function(i){return i!==e})))},stepClick:function(e){var t=this;this.$nextTick((function(){return t.internalValue=e}))},updateView:function(){for(var e=this.steps.length;--e>=0;)this.steps[e].toggle(this.internalValue);for(var t=this.content.length;--t>=0;)this.content[t].toggle(this.internalValue,this.isReverse)}},render:function(e){return e("div",{staticClass:"v-stepper",class:this.classes},this.$slots.default)}})},413:function(e,t,r){"use strict";r(93),r(16),r(18),r(67);var n=r(143),o=r(14),l=r(115),c=r(80),v=r(6),h=Object(v.a)(o.a,Object(l.a)("stepper","v-stepper-step","v-stepper"));t.a=h.extend().extend({name:"v-stepper-step",directives:{ripple:c.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(e){return!0!==e()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},genIcon:function(e){return this.$createElement(n.a,e)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var e=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(e,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var e=[];return this.hasError?e.push(this.genIcon(this.errorIcon)):this.complete?this.editable?e.push(this.genIcon(this.editIcon)):e.push(this.genIcon(this.completeIcon)):e.push(String(this.step)),e},toggle:function(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render:function(e){return e("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}})},418:function(e,t,r){"use strict";r.r(t);var n={props:{data:Object,rules:Object,next:Function},data:function(){return{valid:!0}},methods:{validate:function(){this.$refs.form.validate(),this.$refs.form.validate()&&this.next()}}},o=r(44),l=r(48),c=r.n(l),v=r(378),h=r(480),d=r(411),_=r(473),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-stepper-content",{attrs:{step:"1"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:[e.rules.required],label:"Name",clearable:"",required:""},model:{value:e.data.name,callback:function(t){e.$set(e.data,"name",t)},expression:"data.name"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.email],label:"Email",clearable:"",required:""},model:{value:e.data.email,callback:function(t){e.$set(e.data,"email",t)},expression:"data.email"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.phone],label:"Phone Number",clearable:"",required:""},model:{value:e.data.phone,callback:function(t){e.$set(e.data,"phone",t)},expression:"data.phone"}}),e._v(" "),r("v-btn",{attrs:{disabled:!e.valid,color:"primary"},on:{click:e.validate}},[e._v("\n      Continue\n    ")]),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:function(t){return e.$router.push({name:"cart"})}}},[e._v(" Cancel ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:v.a,VForm:h.a,VStepperContent:d.a,VTextField:_.a})},419:function(e,t,r){"use strict";r.r(t);var n={props:{data:Object,submitOrder:Function,previous:Function}},o=r(44),l=r(48),c=r.n(l),v=r(378),h=r(174),d=r(108),_=r(70),f=r(176),m=r(411),x=r(406),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-stepper-content",{attrs:{step:"3"}},[r("v-list",{attrs:{dense:"",disabled:""}},[r("v-subheader",{staticClass:"title"},[e._v("Order Summary")]),e._v(" "),r("v-list-item-group",{attrs:{color:"primary"}},e._l(e.data,(function(t,n){return r("v-list-item",{key:n},[r("v-list-item-content",[r("v-list-item-title",[e._v(" "+e._s(n)+": "+e._s(t)+" ")])],1)],1)})),1)],1),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:e.submitOrder}},[e._v(" Confirm Order ")]),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:e.previous}},[e._v(" Back ")])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:v.a,VList:h.a,VListItem:d.a,VListItemContent:_.a,VListItemGroup:f.a,VListItemTitle:_.b,VStepperContent:m.a,VSubheader:x.a})},420:function(e,t,r){"use strict";r.r(t);var n={props:{data:Object,rules:Object,next:Function,previous:Function},data:function(){return{valid:!0}},methods:{validate:function(){this.$refs.form.validate(),this.$refs.form.validate()&&this.next()}}},o=r(44),l=r(48),c=r.n(l),v=r(378),h=r(480),d=r(411),_=r(473),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-stepper-content",{attrs:{step:"2"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:[e.rules.required],label:"Address",clearable:"",required:""},model:{value:e.data.address,callback:function(t){e.$set(e.data,"address",t)},expression:"data.address"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required],label:"State",clearable:"",required:""},model:{value:e.data.state,callback:function(t){e.$set(e.data,"state",t)},expression:"data.state"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required],label:"City",clearable:"",required:""},model:{value:e.data.city,callback:function(t){e.$set(e.data,"city",t)},expression:"data.city"}}),e._v(" "),r("v-btn",{attrs:{disabled:!e.valid,color:"primary"},on:{click:e.validate}},[e._v("\n      Continue\n    ")]),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:e.previous}},[e._v(" Back ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:v.a,VForm:h.a,VStepperContent:d.a,VTextField:_.a})},455:function(e,t,r){var content=r(456);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(10).default)("421e27d6",content,!0,{sourceMap:!1})},456:function(e,t,r){(t=r(9)(!1)).push([e.i,".theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.6)}.v-application--is-ltr .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.v-application--is-rtl .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.v-application--is-ltr .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.v-application--is-rtl .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-right:1px solid hsla(0,0%,100%,.12)}.v-stepper{border-radius:4px;overflow:hidden;position:relative}.v-stepper,.v-stepper__header{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header{height:72px;align-items:stretch;display:flex;flex-wrap:wrap;justify-content:space-between}.v-stepper__header .v-divider{align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{align-items:center;border-radius:50%;display:inline-flex;font-size:.75rem;justify-content:center;height:24px;min-width:24px;width:24px;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-stepper__step__step{margin-right:8px}.v-application--is-rtl .v-stepper__step__step{margin-left:8px}.v-stepper__step__step .v-icon.v-icon{font-size:1.25rem}.v-stepper__step__step .v-icon.v-icon.v-icon--svg{height:1.25rem;width:1.25rem}.v-stepper__step{align-items:center;display:flex;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:1.5rem;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{align-items:flex-start;display:flex;flex-direction:column;line-height:1}.v-application--is-ltr .v-stepper__label{text-align:left}.v-application--is-rtl .v-stepper__label{text-align:right}.v-stepper__label small{font-size:.75rem;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{padding:16px 60px 16px 23px;width:auto}.v-application--is-ltr .v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px}.v-application--is-rtl .v-stepper--vertical .v-stepper__content{margin:-8px 36px -16px -36px}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-application--is-ltr .v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-application--is-rtl .v-stepper--vertical .v-stepper__step__step{margin-left:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{flex-direction:column;justify-content:flex-start;align-items:center;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{align-self:center}.v-stepper--alt-labels .v-stepper__step__step{margin-bottom:11px;margin-left:0;margin-right:0}@media only screen and (max-width:959px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-left:0;margin-right:0}}",""]),e.exports=t},480:function(e,t,r){"use strict";r(65),r(94),r(49),r(37),r(188),r(50),r(66),r(38);var n=r(2),o=r(6),l=r(86),c=r(115);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},488:function(e,t,r){"use strict";r.r(t);r(38);var n=r(418),o=r(419),l=r(420),c={components:{ContactInfo:n.default,ShippingInfo:l.default,ReviewOrder:o.default},data:function(){return{step:1,data:{name:"",email:"",phone:"",address:"",state:"",city:""},rules:{required:function(e){return!!e||"Please enter value!"},email:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Please enter a valid email!"},phone:function(e){return/\d{15}/.test(e)||"Please enter a valid phone number"}}}},methods:{next:function(){this.step+=1},previous:function(){this.step-=1},submitOrder:function(){var e=this;this.$router.push({name:"thankyou"}),setTimeout((function(){e.$store.commit("resetCart")}),3e3)}}},v=r(44),h=r(48),d=r.n(h),_=r(435),f=r(475),m=r(438),x=r(412),w=r(387),y=r(413),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"mt-15"},[r("v-row",[r("v-col",[r("v-stepper",{model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{step:"1",complete:e.step>1}},[e._v("Contact Info")]),e._v(" "),r("v-stepper-step",{attrs:{step:"2",complete:e.step>2}},[e._v("Shipping Info")]),e._v(" "),r("v-stepper-step",{attrs:{step:"3"}},[e._v("Summary")])],1),e._v(" "),r("v-stepper-items",[r("contact-info",{attrs:{data:e.data,rules:e.rules,next:e.next}}),e._v(" "),r("shipping-info",{attrs:{data:e.data,rules:e.rules,next:e.next,previous:e.previous}}),e._v(" "),r("review-order",{attrs:{data:e.data,submitOrder:e.submitOrder,previous:e.previous}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{ContactInfo:r(418).default,ShippingInfo:r(420).default,ReviewOrder:r(419).default}),d()(component,{VCol:_.a,VContainer:f.a,VRow:m.a,VStepper:x.a,VStepperHeader:w.a,VStepperItems:w.b,VStepperStep:y.a})}}]);