import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { artist } from './artist';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

const apps = [
  {
    name: 'app1',
    entry: 'index.html',
    type: 'main',
    config: {},
  },
  {
    name: 'app2',
    entry: 'index.html',
    type: 'sub',
    config: {},
  },
];

// 1. 加载子系统资源
artist.load(apps);

artist.get();
// 调用调试方法
artist.get();

console.log({ artist });
