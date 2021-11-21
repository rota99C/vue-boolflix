import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueAxios, axios,)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
