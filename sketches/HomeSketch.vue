<script setup lang="ts">
import p5 from "p5"
let darkMode
let ballColor
// Sketch Variables
const canvasWidth = 1200
const canvasHeight = 800
let g = 0.5
let m1 = 30
let m2 = 20
let r1 = 190
let r2 = 220

onMounted(() => {
  if (isDark()) {
    darkMode = true
    ballColor = "#E0EDEE"
  } else {
    darkMode = false
    ballColor = "#374151"
  }
})

// Functions

function changeTheme() {
  toggleDarkMode()
  if (ballColor === "#374151") {
    ballColor = "#E0EDEE"
  } else {
    ballColor = "#374151"
  }
}
function changeGravity(e) {
  console.log(g)
  g = e.target.value
}
function changeMass(e) {
  if (e.target.name === "m2Changer") {
    m2 = e.target.value
  }
}

// Sketch Area

const sketch = (p5: p5) => {
  let buffer
  let xOff = canvasWidth / 2
  let yOff = 225
  let a1 = p5.PI / p5.random(2)
  let a2 = p5.PI / p5.random(2)
  let a1_v = 0
  let a2_v = 0

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight)
    p5.pixelDensity(1)
    buffer = p5.createGraphics(canvasWidth, canvasHeight)
    //buffer.background(0)
    buffer.translate(xOff, yOff)
  }

  p5.draw = () => {
    p5.clear(0, 0, 0, 0)
    //p5.background(100)

    p5.imageMode(p5.CORNER)
    p5.image(buffer, 0, 0, canvasWidth, canvasHeight)
    p5.translate(xOff, yOff)

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
    buffer.point(x1, y1)

    p5.mousePressed = () => {
      let d = p5.dist(xOff, yOff, p5.mouseX, p5.mouseY)
      if (d < r1 + r2) {
        a1 = p5.random(200)
        a2 = p5.random(200)
      }
    }
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

      <!-- Slider Section -->

      <div flex="~" space="x4" color="accent" font="mono" m="t8">
        <div flex="~ col" items="center" space="y2">
          <input
            type="range"
            min="0.1"
            max="1"
            :value="g"
            step="0.1"
            @input="changeGravity"
            class="w-full slider h-2 bg-textd rounded-lg appearance-none cursor-pointer dark:bg-textl"
          />
          <label>Gravity</label>
        </div>
        <div flex="~ col" items="center" space="y2">
          <input
            type="range"
            min="2"
            max="200"
            step="2"
            :value="m2"
            name="m2Changer"
            @input="changeMass"
            class="w-full slider h-2 bg-textd rounded-lg appearance-none cursor-pointer dark:bg-textl"
          />
          <label>Mass</label>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.slider {
  -webkit-appearance: none;
  @apply w-80

  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: #41b883;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #41b883;
  cursor: pointer;
}
</style>
