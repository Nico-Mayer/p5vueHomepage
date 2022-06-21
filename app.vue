<script setup>
useHead({
  title: "Vide",
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
  <div h="screen" overflow="auto">
    <Navbar />
    <RouterView />
  </div>
</template>
