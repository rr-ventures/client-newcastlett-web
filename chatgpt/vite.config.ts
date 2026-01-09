import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: path.resolve(process.cwd(), "data/competitions.csv"),
            dest: "data"
          }
        ]
      })
    ],
    server: {
      port: Number(env.VITE_PORT || 5173),
      host: true
    }
  };
});
