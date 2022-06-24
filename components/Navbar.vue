<script setup lang="ts">
const homeBtn = ref<HTMLElement | null>(null)
const docsBtn = ref<HTMLElement | null>(null)
const examplesBtn = ref<HTMLElement | null>(null)
const path = useRoute()

onMounted(() => {
  setActive(path.name)
})

function setActive(dir) {
  switch (dir) {
    default:
      homeBtn.value.classList.add("isActive")
      docsBtn.value.classList.remove("isActive")
      examplesBtn.value.classList.remove("isActive")
      break
    case "docs":
      homeBtn.value.classList.remove("isActive")
      docsBtn.value.classList.add("isActive")
      examplesBtn.value.classList.remove("isActive")
      break
    case "examples":
      homeBtn.value.classList.remove("isActive")
      docsBtn.value.classList.remove("isActive")
      examplesBtn.value.classList.add("isActive")
      break
  }
}
</script>

<template>
  <nav
    flex="~"
    w="full"
    min-w="sm"
    h="20"
    justify="between"
    p="2 md:8"
    bg="lightbg dark:darkbg"
    border="b black/15 dark:white/10"
    items="center"
    class="fixed"
    z="20"
  >
    <a href="/">
      <div flex="~" items="center" space="x4" opacity="75">
        <img src="/logo.svg" alt="" w="6" />
        <h1 font="mono semibold" tracking="widest" class="hidden md:block">
          p5vue
        </h1>
      </div>
    </a>
    <div space="x2" flex="~">
      <div ref="homeBtn">
        <NuxtLink class="btn hidden md:flex" @click="setActive('home')" to="/">
          <div class="i-carbon-home text-lg"></div>
          <span>Home</span>
        </NuxtLink>
      </div>

      <div ref="docsBtn">
        <NuxtLink
          class="btn border-rounded"
          to="/docs"
          @click="setActive('docs')"
        >
          <div class="i-simple-icons-docsdotrs text-lg"></div>
          <span>Docs</span>
        </NuxtLink>
      </div>

      <div ref="examplesBtn">
        <NuxtLink class="btn" to="/examples" @click="setActive('examples')">
          <div class="i-carbon-aperture text-lg" />
          <span>Examples</span>
        </NuxtLink>
      </div>
    </div>
    <div flex="~">
      <NuxtLink to="https://github.com/Nico-Mayer/p5vue" target="_blank">
        <div class="i-mdi-github icon-btn"></div>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.isActive {
  border-radius: 0.25rem;
  outline: 1px solid #41b883;
}
</style>
