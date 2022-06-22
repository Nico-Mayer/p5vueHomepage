<script setup lang="ts"></script>

<template>
  <main flex="~ col md:row" relative="~" top="0" h="full" p="t20">
    <Sidebar :title="'Docs'" relative="~" />
    <div p="x2 md:x10 b10" overflow="md:auto" w="full" relative="~">
      <button class="themeToggle-btn" @click="toggleDarkMode()">
        <div class="i-carbon-moon dark:i-carbon-sun icon-btn" />
      </button>
      <NuxtPage />
    </div>
  </main>
</template>
