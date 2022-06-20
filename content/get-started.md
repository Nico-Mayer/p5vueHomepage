## Get Started

### Install:

```bash
npm i p5vue
```

Depending on your environment, you may be alerted upon installing `p5vue` that `p5` is a required peer dependency which you must install yourself.
If this is the case:

```bash
npm i -D p5
```

Now add `p5vue` to your project:

- Import the Plugin to your main.js file

  ```javascript
  // main.js || main.ts
  import { createApp } from "vue"
  import App from "./App.vue"

  import p5vue from "p5vue"

  createApp(App).use(p5vue).mount("#app")
  ```

- Use the `P5` component inside the app

  ```javascript
  <script setup>
  import p5 from "p5"

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(500, 500)
    }

    p5.draw = () => {
      p5.background("#fff000")
    }
  }
  </script>

  <template>
  	<P5 :sketch="sketch"/>
  </template>
  ```
