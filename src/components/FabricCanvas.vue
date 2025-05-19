<template>
  <div class="fabric-canvas-container">
    <canvas ref="canvas"></canvas>
    <div class="controls">
      <button @click="toggleGrid">Toggle Grid</button>
      <button @click="toggleLabels">Toggle Labels</button>
      <button @click="toggleBackground">Toggle Background</button>
      <button @click="toggleForeground">Toggle Foreground</button>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { fabric } from 'fabric-pure-browser'
import { Canvas, Grid } from 'fabric-layers'

export default {
  name: 'FabricCanvas',
  setup() {
    const canvas = ref(null)
    let fabricCanvas = null
    let grid = null
    let rect = null
    let circle = null

    onMounted(() => {
      // Initialize fabric canvas
      fabricCanvas = new Canvas(canvas.value, {
        width: 800,
        height: 600,
        backgroundColor: '#f0f0f0'
      })

      // Create grid
      grid = new Grid(fabricCanvas.getFabricCanvas(), {
        size: 100,
        color: '#cccccc',
        opacity: 0.5,
        showLabels: true,
        labelColor: '#666666',
        labelSize: 12,
        labelFormat: (value) => value.toString()
      })

      // Create background layer with rectangle
      rect = new fabric.Rect({
        left: 100,
        top: 100,
        width: 100,
        height: 100,
        fill: 'red',
        selectable: true
      })
      fabricCanvas.createLayer('background')
      fabricCanvas.addToLayer('background', rect)

      // Create foreground layer with circle
      circle = new fabric.Circle({
        left: 300,
        top: 150,
        radius: 50,
        fill: 'blue',
        selectable: true
      })
      fabricCanvas.createLayer('foreground')
      fabricCanvas.addToLayer('foreground', circle)
    })

    onBeforeUnmount(() => {
      if (fabricCanvas) {
        const canvas = fabricCanvas.destroy()
        if (canvas) {
          canvas.dispose()
        }
      }
    })

    // Control functions
    const toggleGrid = () => {
      if (grid) {
        grid.visible = !grid.visible
        fabricCanvas.getFabricCanvas().requestRenderAll()
      }
    }

    const toggleLabels = () => {
      if (grid) {
        grid.showLabels = !grid.showLabels
      }
    }

    const toggleBackground = () => {
      if (fabricCanvas && rect) {
        const currentVisibility = rect.visible
        fabricCanvas.setLayerVisibility('background', !currentVisibility)
        fabricCanvas.getFabricCanvas().requestRenderAll()
      }
    }

    const toggleForeground = () => {
      if (fabricCanvas && circle) {
        const currentVisibility = circle.visible
        fabricCanvas.setLayerVisibility('foreground', !currentVisibility)
        fabricCanvas.getFabricCanvas().requestRenderAll()
      }
    }

    return {
      canvas,
      toggleGrid,
      toggleLabels,
      toggleBackground,
      toggleForeground,
    }
  }
}
</script>

<style scoped>
.fabric-canvas-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.controls {
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}

canvas {
  border: 1px solid #ccc;
}
</style>
