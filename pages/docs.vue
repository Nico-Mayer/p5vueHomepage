<script setup lang="ts"></script>

<template>
  <main flex="~" relative="~" top="0" h="full" p="t20">
    <Sidebar :title="'Docs'" />
    <div p="x10 b10" overflow="auto" w="full">
      <NuxtPage />
    </div>
  </main>
</template>
