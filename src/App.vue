<template>
  <div id="app">
    <Cart />
  </div>
</template>

<script>
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: {
    Cart
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
