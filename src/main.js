import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import http from './http/index'

Vue.config.productionTip = false;

Vue.use(http);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
