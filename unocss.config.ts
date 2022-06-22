// This is the unocss config file, check out this links to get more information
// https://uno.antfu.me/
// https://github.com/unocss/unocss

import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
  presetTypography,
  presetWebFonts,
  presetIcons,
} from "unocss"

export default defineConfig({
  // Here u can customize ur colors for light and dark mode
  theme: {
    colors: {
      // Accent colors
      accent: "#41B883",
      // Light mode
      lightbg: "#ffffff",
      textl: "#374151",
      // Dark mode
      darkbg: "#22272E",
      textd: "#E0EDEE",
    },
  },
  // Here you can declare custom classes which u can use in every component
  shortcuts: [
    [
      "btn",
      "flex items-center bg-accent/30 text-xs font-bold hover:bg-accent/60 rounded px-4 py-2 transition-all duration-200 text-accent/90 hover:text-white/90 text-center space-x-2 w-30",
    ],
    [
      "icon-btn",
      "text-2xl cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-accent",
    ],
    [
      "side-btn",
      "bg-accent/30 w-full rounded color-accent px-2 py-2 hover:(bg-accent/60 text-white/90) cursor-pointer flex items-center space-x-2",
    ],
    [
      "themeToggle-btn",
      "absolute  right-0 mr-2 md:mr-8 mt-11 z-10 bg-lightbg dark:bg-darkbg p-2 rounded-full shadow-xl",
    ],
  ],
  presets: [
    presetWebFonts(
      // Here you can add custom fonts they get imported automatically
      {
        provider: "google",
        fonts: {
          sans: "Roboto",
          mono: ["Fira Code", "Fira Mono:400,700"],
        },
      }
    ),
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
