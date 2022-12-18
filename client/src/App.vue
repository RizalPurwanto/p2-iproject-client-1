<template>
<div class="h-screen mx-2 my2 relative">
    <navbar v-if="pageName !== 'Login' && pageName !== 'Register' "></navbar>

    <router-view></router-view>
    <!-- <HFooter class="bottom-0 "></HFooter> -->
  </div>
  
  
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";

import Navbar from "./components/Navbar.vue";
//import HFooter from 'vue-hacktiv8-footer'
export default {
  name: "App",
  components: {
    //HelloWorld,
    Navbar,
    //HFooter
  },
  computed: {
      pageName() {
        return this.$route.name
      }
  },
  
  created() {
    this.$store.dispatch("sendCustomEvenetToServer", {
      message: "Hello from client"
    })
 }
};
</script>

<style>
@import "../output.css";
@import url("https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css");
@import url("https://cdn.tailwindcss.com");
@import url("https://app.sandbox.midtrans.com/snap/snap.js");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
