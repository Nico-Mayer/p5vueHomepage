<script setup>
useHead({
  title: "p5vue",
  link: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
})
onMounted(() => {
  themeCheck()
})
</script>

<template>
  <div h="screen" overflow="md:auto">
    <Navbar />
    <RouterView />
  </div>
</template>
