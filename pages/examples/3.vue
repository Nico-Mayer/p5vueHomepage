<script setup lang="ts">
import p5 from "p5"

let bgColor
let width = 850
let height = 400

function changeTheme() {
  toggleDarkMode()
  if (bgColor === "#22272E") {
    bgColor = "#ffffff"
  } else {
    bgColor = "#22272E"
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
    bgColor = "#22272E"
  } else {
    bgColor = "#ffffff"
  }
})

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
  <main>
    <div flex="~" p="t20">
      <Sidebar title="Examples" />
      <button class="themeToggle-btn" @click="changeTheme">
        <div class="i-carbon-moon dark:i-carbon-sun icon-btn m0" />
      </button>
      <div p="10">
        <div m="b4" relative="~">
          <div flex="~" space="x4" items="center" m="b-2">
            <div class="i-carbon-tropical-storm" text="2xl" />
            <h1 class="font-bold text-accent text-2xl">Mouse 2D</h1>
          </div>

          <p class="font-italic text-textl/50 dark:text-textd/50">
            Adapted from the Official
            <a
              href="https://p5js.org/examples/input-mouse-2d.html"
              class="text-accent/90 hover:text-accent underline"
              >p5 examples</a
            >.
          </p>
        </div>

        <div border="~ 2 accent" rounded="~ lg" overflow="hidden">
          <P5Wrapper :sketch="sketch" />
        </div>
        <h1 class="font-bold text-accent text-2xl my-8">Code</h1>
        <article class="prose prose-textl dark:prose-textd max-w-none pb-10">
          <ContentDoc path="mouse2dcode" />
        </article>
      </div>
    </div>
  </main>
</template>
