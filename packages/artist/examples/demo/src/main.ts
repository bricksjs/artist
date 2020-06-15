import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Artist } from './artist';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

const artist = new Artist();
console.log({ artist });
