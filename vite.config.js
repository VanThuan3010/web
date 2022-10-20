import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        shop: resolve(__dirname, "shop.html"),
        about: resolve(__dirname, "aboutus.html"),
        blog: resolve(__dirname, "blog.html"),
        cart: resolve(__dirname, "cart.html"),
        checkout: resolve(__dirname, "checkout.html"),
        detail: resolve(__dirname, "detail.html"),
      },
    },
  },
});
