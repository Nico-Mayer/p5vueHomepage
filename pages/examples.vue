<script setup lang="ts"></script>

<template>
  <main flex="~ col md:row" relative="~" top="0" h="full" p="t20">
    <Sidebar :title="'Examples'" relative="~" />
    <div p="x2 md:x10 y10" overflow="md:auto" flex="~ 1" relative="~">
      <NuxtPage />
    </div>
  </main>
</template>
