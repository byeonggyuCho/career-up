import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    outDir: "./dist",
    lib: {
      entry: "./src/index.ts",
      name: "ui-kit",
      fileName: "index",
    },
    rollupOptions: {
      // 리액트를 함께 번들링하지 않고 이 패키지를 사용하는 측의 react의존성을 활용한다.
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
  },
});
