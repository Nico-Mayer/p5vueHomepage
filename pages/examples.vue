<script setup lang="ts"></script>

<template>
  <main flex="~ col md:row" relative="~" top="0" h="full" p="t20">
    <Sidebar :title="'Examples'" relative="~" />
    <div p="x10 b10" overflow="md:auto" w="full">
      <NuxtPage />
    </div>
  </main>
</template>
