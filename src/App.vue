<script setup>
import FabricCanvas from './components/FabricCanvas.vue'
</script>

<template>
  <div class="app">
    <h1>Fabric Layers Test</h1>
    <FabricCanvas />
  </div>
</template>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
}
</style>
