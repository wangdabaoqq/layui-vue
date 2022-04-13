import { UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default (): UserConfigExport => {
  return {
    publicDir: false,
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(process.cwd(), "./"),
        },
      ],
    },
    plugins: [vue()],
    build: {
      cssCodeSplit: false,
      outDir: "lib",
      emptyOutDir: true,
      lib: {
        entry: resolve(process.cwd(), "./src/index.ts"),
        name: "layui-vue",
        formats: ["es"],
        fileName: (name) => `index.js`,
      },
      rollupOptions: {
        output: {
          globals: {
            vue: "Vue",
          },
          assetFileNames: "index.css",
        },
        external: ["vue"],
      },
    },
  };
};