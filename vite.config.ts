import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // ↓ 追記
    alias: {
      "~/": `${__dirname}/src/`, // path.join(__dirname, "src/") でも可
    },
    // alias: [
    //   { find: "~/", replacement: `${__dirname}/src/` }
    // ],
  },
})
