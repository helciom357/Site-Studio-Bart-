import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// BASE_PATH define a pasta onde o site será publicado:
//   - domínio próprio (ex.: studiobarto.com.br) ou usuario.github.io → "/"
//   - usuario.github.io/nome-do-repo                                  → "/nome-do-repo/"
// O workflow do GitHub Pages preenche isso automaticamente.
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
