<script setup lang="ts">
import p5 from "p5"
let darkMode
let width = 850
let height = 400

onMounted(() => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    width = screen.width * 0.9
  }

  if (isDark()) {
    darkMode = true
  } else {
    darkMode = false
  }
})

const sketch = (p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL)
    p5.pixelDensity(1)
  }
  p5.draw = () => {
    //p5.clear(0, 0, 0, 0)
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
  <main>
    <button class="themeToggle-btn" @click="toggleDarkMode()">
      <div class="i-carbon-moon dark:i-carbon-sun icon-btn" />
    </button>
    <div m="b4" relative="~">
      <div flex="~" space="x4" items="center" m="b-2">
        <div class="i-carbon-asset-digital-twin" text="2xl" />
        <h1 class="font-bold text-accent text-2xl">Sine Cosine in 3D</h1>
      </div>

      <p class="font-italic text-textl/50 dark:text-textd/50">
        Adapted from the Official
        <a
          href="https://p5js.org/examples/3d-sine-cosine-in-3d.html"
          class="text-accent/50 hover:text-accent"
          >p5 examples</a
        >.
      </p>
    </div>

    <div border="~ 2 accent" rounded="~ lg" overflow="hidden">
      <P5Wrapper :sketch="sketch" />
    </div>
    <h1 class="font-bold text-accent text-2xl my-8">Code</h1>
    <article class="prose prose-textl dark:prose-textd max-w-none pb-10">
      <ContentDoc path="sincoscode" />
    </article>
  </main>
</template>
