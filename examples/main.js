import Vue from 'vue'
import App from './App.vue'
import NewUI from '../packages/index.js'
Vue.config.productionTip = false
Vue.use(NewUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
