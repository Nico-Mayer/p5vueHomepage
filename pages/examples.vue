<script setup lang="ts"></script>

<template>
  <main flex="~" relative="~" top="0" h="full" p="y20">
    <Sidebar :title="'Examples'" />
    <div p="x10 b10" overflow="auto" w="full">
      <NuxtPage />
    </div>
  </main>
</template>
