// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['*.html']
  },
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
  ],
})
