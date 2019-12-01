<template>
  <div id="app">
    <h1>This is CanvasTest</h1>
    <CanvasWrite></CanvasWrite>

  </div>
</template>

<script>
import CanvasWrite from './components/CanvasWrite.vue'

export default {
  name: 'app',
  components: {
    CanvasWrite
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
