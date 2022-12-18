import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "tw-elements";

//initiate socket io
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

//const socket = io('https://iproject2.herokuapp.com');
const socket = io('https://p2-iproject-server-1-production.up.railway.app')

Vue.use(VueSocketIOExt, socket, {store});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
