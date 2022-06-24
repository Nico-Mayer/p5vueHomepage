```vue
<script setup>
import p5 from "p5"

const sketch = (p5: p5) => {
  let x = [],
    y = [],
    segNum = 20,
    segLength = 18

  for (let i = 0; i < segNum; i++) {
    x[i] = 0
    y[i] = 0
  }

  p5.setup = () => {
    p5.createCanvas(710, 400)
    p5.strokeWeight(9)
    p5.stroke(255, 100)
  }

  p5.draw = () => {
    p5.background(0)
    dragSegment(0, p5.mouseX, p5.mouseY)
    for (let i = 0; i < x.length - 1; i++) {
      dragSegment(i + 1, x[i], y[i])
    }
  }

  function dragSegment(i, xin, yin) {
    const dx = xin - x[i]
    const dy = yin - y[i]
    const angle = p5.atan2(dy, dx)
    x[i] = xin - p5.cos(angle) * segLength
    y[i] = yin - p5.sin(angle) * segLength
    segment(x[i], y[i], angle)
  }

  function segment(x, y, a) {
    p5.push()
    p5.translate(x, y)
    p5.rotate(a)
    p5.line(0, 0, segLength, 0)
    p5.pop()
  }
}
</script>

<template>
  <P5 :sketch="sketch" />
</template>
```
