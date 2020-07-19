<template>
  <div class="d-flex flex-column" id="app">
    <Navbar />
    <router-view class="flex-grow-1" />
    <Footer class="mt-auto"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import firebase from "firebase"
export default {
  components: {
    Footer,
    Navbar,
  },

  data(){
    return{
      user: null
    }
  },

  mounted(){
    firebase.auth().onAuthStateChanged(user => {
      this.user = user
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
