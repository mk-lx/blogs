import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default () => {
  const pwd = process.cwd();

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(pwd, "./src"),
        e: resolve(pwd, "./src/view/Editor"),
      },
    },
  });
};

