import './database/firebase'

import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

import VueFire from 'vuefire'
Vue.use(VueFire);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app');
