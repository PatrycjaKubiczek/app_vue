import Vue from 'vue'

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Firebase
import {firestorePlugin} from 'vuefire'
// import {db} from './firebase-db'

import App from './App.vue'


Vue.config.productionTip = false

Vue.use(firestorePlugin)
Vue.use(BootstrapVue)


new Vue({
	render: h => h(App),
}).$mount('#app')
