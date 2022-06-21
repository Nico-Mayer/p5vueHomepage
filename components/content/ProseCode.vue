// This Component Overrides the default Nuxt Content component to render
Codeblocks in Markdown
<template>
  <div
    border="~ white/5 rounded hover:white/10"
    bg="[#2D333B]"
    m="y4"
    class="relative"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "#imports"

export default defineComponent({
  props: {
    code: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
  },
})
</script>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
