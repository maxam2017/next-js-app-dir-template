import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: true,
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
});
