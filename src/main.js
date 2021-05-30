import Vue from 'vue'
import store from './store'
import router from './router'
import vuetify from './vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
