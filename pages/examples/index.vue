<script setup lang="ts">
import p5 from "p5"

let strokeColor
let width = 850
let height = 400

function changeTheme() {
  toggleDarkMode()
  if (strokeColor === "rgba(224, 237, 238, 0.5)") {
    strokeColor = "rgba(55, 65, 81, 0.5)"
  } else {
    strokeColor = "rgba(224, 237, 238, 0.5)"
  }
}

onMounted(() => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    width = screen.width * 0.9
  }

  if (isDark()) {
    strokeColor = "rgba(224, 237, 238, 0.5)"
  } else {
    strokeColor = "rgba(55, 65, 81, 0.5)"
  }
})

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
    const cnv = p5.createCanvas(width, height)
    p5.pixelDensity(1)
    cnv.id("cnvIndex")
    p5.strokeWeight(9)
  }

  p5.draw = () => {
    p5.clear(0, 0, 0, 0)
    p5.stroke(strokeColor)
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
  <main>
    <div flex="~ col md:row" p="t20">
      <Sidebar title="Examples" />
      <button
        class="absolute top-80 right-4 z-10 md:themeToggle-btn"
        @click="changeTheme"
      >
        <div class="i-carbon-moon dark:i-carbon-sun icon-btn m0" />
      </button>
      <div p="2 md:10">
        <div m="b4" relative="~">
          <div flex="~" space="x4" items="center" m="b-2">
            <div class="i-carbon-flow-data" text="2xl" />
            <h1 class="font-bold text-accent text-2xl">Follow</h1>
          </div>

          <p class="font-italic text-textl/50 dark:text-textd/50">
            Adapted from the Official
            <a
              href="https://p5js.org/examples/interaction-follow-3.html"
              class="text-accent/90 hover:text-accent underline"
              >p5 examples</a
            >.
          </p>
        </div>

        <div
          flex="~ col"
          items="center"
          border="~ 2 accent"
          rounded="~ lg"
          overflow="hidden"
        >
          <P5Wrapper :sketch="sketch" />
        </div>
        <h1 class="font-bold text-accent text-2xl my-8">Code</h1>
        <article class="prose prose-textl dark:prose-textd max-w-none pb-10">
          <ContentDoc path="followcode" />
        </article>
      </div>
    </div>
  </main>
</template>
