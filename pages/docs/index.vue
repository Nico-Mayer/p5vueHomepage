<script setup lang="ts"></script>

<template>
  <main flex="~" relative="~" top="0" h="full" p="t20">
    <Sidebar :title="'Docs'" />
    <div p="l10">
      <article class="text-base prose prose-textl dark:prose-textd xl:text-xl">
        <ContentDoc path="/get-started" />
      </article>
    </div>
  </main>
</template>
