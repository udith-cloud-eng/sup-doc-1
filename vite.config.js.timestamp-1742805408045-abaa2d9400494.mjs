// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/app%20(1)/node_modules/vite/dist/node/index.js";
import laravel from "file:///D:/app%20(1)/node_modules/laravel-vite-plugin/dist/index.mjs";
import vue from "file:///D:/app%20(1)/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/app%20(1)/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["public/splash-screen.css", "resources/js/main.ts"],
      refresh: true
    }),
    vue()
  ],
  server: {
    hmr: {
      overlay: false
    }
  },
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": fileURLToPath(new URL("./resources/js/", __vite_injected_original_import_meta_url))
    }
  },
  base: "./",
  build: {
    chunkSizeWarningLimit: 3e3
  },
  env: {
    VITE_APP_API_URL: "http://127.0.0.1:5173/"
    // Your API URL here
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxhcHAgKDEpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxhcHAgKDEpXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9hcHAlMjAoMSkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBbJ3B1YmxpYy9zcGxhc2gtc2NyZWVuLmNzcycsICdyZXNvdXJjZXMvanMvbWFpbi50cyddLFxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIHZ1ZSgpXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgICAgaG1yOiB7XG4gICAgICAgICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICBcInZ1ZS1pMThuXCI6IFwidnVlLWkxOG4vZGlzdC92dWUtaTE4bi5janMuanNcIixcbiAgICAgICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9yZXNvdXJjZXMvanMvXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYmFzZTogXCIuL1wiLFxuICBidWlsZDoge1xuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMzAwMCxcbiAgfSxcbiAgZW52OiB7XG4gICAgVklURV9BUFBfQVBJX1VSTDogJ2h0dHA6Ly8xMjcuMC4wLjE6NTE3My8nIC8vIFlvdXIgQVBJIFVSTCBoZXJlXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzTixTQUFTLGVBQWUsV0FBVztBQUV6UCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxTQUFTO0FBSitHLElBQU0sMkNBQTJDO0FBTWhMLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNKLE9BQU8sQ0FBQyw0QkFBNEIsc0JBQXNCO0FBQUEsTUFDMUQsU0FBUztBQUFBLElBQ2IsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLEtBQUs7QUFBQSxNQUNELFNBQVM7QUFBQSxJQUNiO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osS0FBSyxjQUFjLElBQUksSUFBSSxtQkFBbUIsd0NBQWUsQ0FBQztBQUFBLElBQ2hFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ1IsT0FBTztBQUFBLElBQ0wsdUJBQXVCO0FBQUEsRUFDekI7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILGtCQUFrQjtBQUFBO0FBQUEsRUFDcEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
