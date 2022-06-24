```vue
<script setup>
import p5 from "p5"
let width = 850
let height = 400

const sketch = (p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(width, height)
    p5.noStroke()
    p5.rectMode(p5.CENTER)
  }

  p5.draw = () => {
    p5.background(230)
    p5.fill(244, 122, 158)
    p5.rect(p5.mouseX, height / 2, p5.mouseY / 2 + 10, p5.mouseY / 2 + 10)
    p5.fill(237, 34, 93)
    let inverseX = width - p5.mouseX
    let inverseY = height - p5.mouseY
    p5.rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10)
  }
}
</script>

<template>
  <P5 :sketch="sketch" />
</template>
```
