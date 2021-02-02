<template>
  <div id="app">
    <navbar></navbar>
    <main class="container">
       <router-view/>
    </main>
   
  </div>
</template>


<script>

import Navbar from './components/molecules/Navbar.vue';
export default {
  components: { Navbar },
 
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 80%;
  margin: 3rem auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  margin: 3rem 0;
}
</style>
