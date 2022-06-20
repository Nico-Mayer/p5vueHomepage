## Typescript:

Typescript inst fully supported yet.
To get the Plugin working without type errors do this:

- ```typescript
  // main.ts
  import { createApp } from "vue"
  import App from "./App.vue"
  // @ts-ignore
  import p5vue from "p5vue"

  createApp(App).use(p5vue).mount("#app")
  ```

- ```vue
  // Add the p5 type in function argument
  <script setup>
  import p5 from "p5"

  const sketch = (p5: p5) => {
    p5.setup = () => {
      p5.createCanvas(500, 500)
    }

    p5.draw = () => {
      p5.background("#fff000")
    }
  }
  </script>

  <template>
    <P5 :sketch="sketch" />
  </template>
  ```
