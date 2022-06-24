<script setup lang="ts">
const { title } = defineProps(["title"])
const docsMenuItems = [
  {
    title: "Get Started",
    icon: "i-carbon-play",
    url: "/docs/",
  },
  {
    title: "Nuxt 3",
    icon: "i-simple-icons-nuxtdotjs",
    url: "/docs/nuxt3",
  },
  {
    title: "TypeScript",
    icon: "i-simple-icons-typescript",
    url: "/docs/typescript",
  },
]
const examplesMenuItems = [
  {
    title: "Follow",
    icon: "i-carbon-flow-data",
    url: "/examples/",
  },
  {
    title: "Sine Cosine in 3D",
    icon: "i-carbon-asset-digital-twin",
    url: "/examples/2",
  },
  {
    title: "Mouse 2D",
    icon: "i-carbon-tropical-storm",
    url: "/examples/3",
  },
]

const menuItems = title === "Docs" ? docsMenuItems : examplesMenuItems
</script>

<template>
  <nav min-w="58" border="r black/15 dark:white/10">
    <div border="b black/15 dark:white/10" p="2">
      <div border="~ black/15 dark:white/10 rounded" text="center" p="y3">
        <span>{{ title === "Docs" ? "📘" : "🧪" }}</span>
        {{ title }}
      </div>
    </div>

    <ul space="y2" p="2">
      <li v-for="item in menuItems" flex="~">
        <NuxtLink class="side-btn" :to="item.url">
          <div :class="item.icon" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  border: 1px solid #41b883 !important;
  pointer-events: none !important;
}
</style>
