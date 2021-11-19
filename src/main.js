import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

Vue.use(VueAxios, axios,
)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
