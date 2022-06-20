## Nuxt 3 Setup

### Setup for Nuxt 3 with SSR

##### To set the plugin up for Nuxt 3 we have to use some tricks to get it workin.

- Install p5vue
  ```fish
  npm i p5vue
  ```
- Add Plugin to nuxt

  - Crate a plugins folder in your root directory `~/plugins`
  - add a `p5vue.client.ts` file in the plugins folder
  - Add the plugin to Nuxt like this:

    ```javascript
    // p5vue.client.ts

    import { defineNuxtPlugin } from "#app"
    //@ts-ignore
    import p5vue from "p5vue"
    export default defineNuxtPlugin((nuxtApp) => {
      nuxtApp.vueApp.use(p5vue)
    })
    ```

  - Create a `P5Wrapper.client.vue` file in `~/components`

    ```vue
    // P5Wrapper.client.vue

    <script setup lang="ts">
    const props = defineProps(["sketch"])
    const sketch = props.sketch
    </script>

    <template>
      <P5 :sketch="sketch" />
    </template>
    ```

    We need this wrapper component to ensure p5 only loads on client side.

  - Now we can use our custom Wrapper inside the complete Nuxt App like this:

    ```vue
    // App.vue

    <script setup lang="ts">
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
      <P5Wrapper :sketch="sketch" />
    </template>
    ```
