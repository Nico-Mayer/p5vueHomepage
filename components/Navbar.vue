<script setup lang="ts"></script>

<template>
  <nav
    flex="~"
    w="full"
    min-w="sm"
    h="20"
    justify="between"
    p="8"
    bg="darkbg"
    border="b black/15 dark:white/10"
    items="center"
    class="fixed"
    z="10"
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
      <NuxtLink class="btn hidden md:flex" to="/">
        <div class="i-carbon-home text-lg"></div>
        <span>Home</span>
      </NuxtLink>
      <NuxtLink class="btn" to="/docs">
        <div class="i-simple-icons-docsdotrs text-lg"></div>
        <span>Docs</span>
      </NuxtLink>
      <NuxtLink class="btn" to="/examples">
        <div class="i-carbon-aperture text-lg" />
        <span>Examples</span>
      </NuxtLink>
    </div>
    <div flex="~" space="x4">
      <NuxtLink to="https://github.com/Nico-Mayer/p5vue" target="_blank">
        <div class="i-mdi-github icon-btn"></div>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  border: 1px solid #41b883 !important;
  pointer-events: none !important;
}
</style>
