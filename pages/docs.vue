<script setup lang="ts"></script>

<template>
  <main flex="~" relative="~" top="0" h="full" p="t20">
    <Sidebar :title="'Docs'" />
    <div p="l10">
      <NuxtPage />
    </div>
  </main>
</template>
