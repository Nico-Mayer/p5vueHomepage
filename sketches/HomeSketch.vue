<script setup lang="ts">
import p5 from "p5"
const canvasWidth = 1200
const canvasHeight = 800
let darkMode
let ballColor

onMounted(() => {
  if (isDark()) {
    darkMode = true
    ballColor = "#E0EDEE"
  } else {
    darkMode = false
    ballColor = "#374151"
  }
  console.log(darkMode)
})

function changeTheme() {
  toggleDarkMode()
  if (ballColor === "#374151") {
    ballColor = "#E0EDEE"
  } else {
    ballColor = "#374151"
  }
}

const sketch = (p5: p5) => {
  let buffer
  let r1 = 120
  let r2 = 200
  let m1 = 40
  let m2 = 60
  let a1 = p5.PI / 2
  let a2 = p5.PI / 2
  let a1_v = 0
  let a2_v = 0
  let g = 0.5

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight)
    buffer = p5.createGraphics(canvasWidth, canvasHeight)
    //buffer.background(0)
    buffer.translate(canvasWidth / 2, 250)
  }

  p5.draw = () => {
    //p5.background(100)
    p5.clear(0, 0, 0, 0)
    p5.imageMode(p5.CORNER)
    p5.image(buffer, 0, 0, canvasWidth, canvasHeight)
    p5.translate(canvasWidth / 2, 250)

    p5.push()
    let x1 = r1 * p5.sin(a1)
    let y1 = r1 * p5.cos(a1)
    p5.strokeWeight(4)
    p5.stroke("#41B883")
    p5.line(0, 0, x1, y1)
    p5.noStroke()

    p5.fill(ballColor)
    p5.ellipse(x1, y1, m1, m1)

    let x2 = x1 + r2 * p5.sin(a2)
    let y2 = y1 + r2 * p5.cos(a2)
    p5.strokeWeight(4)
    p5.stroke("#41B883")
    p5.line(x1, y1, x2, y2)
    p5.noStroke()
    p5.ellipse(x2, y2, m2, m2)
    p5.pop()

    let num1 =
      -g * (2 * m1 + m2) * p5.sin(a1) -
      m2 * g * p5.sin(a1 - 2 * a2) -
      2 *
        p5.sin(a1 - a2) *
        m2 *
        (a2_v * a2_v * r2 + a1_v * a1_v * r1 * p5.cos(a1 - a2))
    let denom1 = r1 * (2 * m1 + m2 - m2 * p5.cos(2 * a1 - 2 * a2))
    let a1_a = num1 / denom1

    let num2 =
      2 *
      p5.sin(a1 - a2) *
      (a1_v * a1_v * r1 * (m1 + m2) +
        g * (m1 + m2) * p5.cos(a1) +
        a2_v * a2_v * r2 * m2 * p5.cos(a1 - a2))
    let denom2 = r2 * (2 * m1 + m2 - m2 * p5.cos(2 * a1 - 2 * a2))
    let a2_a = num2 / denom2

    a1_v += a1_a
    a2_v += a2_a

    a1 += a1_v
    a2 += a2_v
    a1_v *= 0.999
    a2_v *= 0.999

    let col = p5.color("#41B883")
    col.setAlpha(100)
    buffer.stroke(col)
    buffer.strokeWeight(4)
    buffer.point(x2, y2)
  }
}
</script>

<template>
  <main w="screen" relative="~">
    <div
      class="i-carbon-moon dark:i-carbon-sun"
      absolute="~"
      right="0"
      m="10"
      @click="changeTheme"
      z="10"
    />
    <div flex="~ col" w="full" absolute="~" items="center">
      <div
        flex="~"
        justify="center"
        items="center"
        space="x4"
        relative="~"
        top="50"
      >
        <div class="i-simple-icons-p5dotjs" text="7xl" />
        <div class="i-carbon-add" text="3xl" />
        <div class="i-simple-icons-vuedotjs" text="5xl" />
      </div>
      <div flex="~">
        <P5Wrapper :sketch="sketch" />
      </div>
    </div>
  </main>
</template>
