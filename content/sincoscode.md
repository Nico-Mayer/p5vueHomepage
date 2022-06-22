```vue
<script setup lang="ts">
import p5 from "p5"
let darkMode
let width = 850
let height = 400

const sketch = (p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL)
  }
  p5.draw = () => {
    p5.background(250)
    p5.rotateY(p5.frameCount * 0.01)

    for (let j = 0; j < 5; j++) {
      p5.push()
      for (let i = 0; i < 80; i++) {
        p5.translate(
          p5.sin(p5.frameCount * 0.001 + j) * 100,
          p5.sin(p5.frameCount * 0.001 + j) * 100,
          i * 0.1
        )
        p5.rotateZ(p5.frameCount * 0.002)
        p5.push()
        p5.sphere(8, 6, 4)
        p5.pop()
      }
      p5.pop()
    }
  }
}
</script>

<template>
  <P5 :sketch="sketch" />
</template>
```
