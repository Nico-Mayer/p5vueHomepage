<script setup lang="ts">
import p5 from "p5"
let darkMode
let width = 850
let height = 400

onMounted(() => {
  console.log(screen.width)

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // true for mobile device
    console.log("on mobile")
    width = screen.width * 0.9
  }

  if (isDark()) {
    darkMode = true
  } else {
    darkMode = false
  }
})

const sketch = (p5: p5) => {
  let x = 0.01
  let y = 0
  let z = 0

  const sigma = 10
  const b = 28
  const c = 8.0 / 3.0

  let lastPoint
  let points = []

  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL)
    p5.colorMode(p5.HSB)
    lastPoint = p5.createVector(0, 0, 0)
  }
  p5.draw = () => {
    p5.background(215, 26, 18)
    p5.orbitControl()
    let dt = 0.01
    let dx = sigma * (y - x) * dt
    let dy = (x * (b - z) - y) * dt
    let dz = (x * y - c * z) * dt
    x = x + dx
    y = y + dy
    z = z + dz

    p5.translate(0, 0, -80)
    points.push(p5.createVector(x, y, z))
    p5.scale(4)

    //drawLine(x, y, z, lastPoint.x, lastPoint.y, lastPoint.z);

    var len = points.length
    var i = 0
    let hue = 0
    p5.beginShape()
    p5.noFill()
    p5.strokeWeight(4)
    while (i < len) {
      hue = hue + 0.1
      p5.stroke(hue, 255, 255)
      p5.vertex(points[i].x, points[i].y, points[i].z)
      if (hue > 255) {
        hue = 0
      }
      i++
    }
    p5.endShape()
  }
}
</script>

<template>
  <main>
    <div border="~ accent/30" rounded="~ lg" overflow="hidden">
      <P5Wrapper :sketch="sketch" />
    </div>
  </main>
</template>
