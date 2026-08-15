import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "next/link": path.resolve(__dirname, "./src/lib/next-link-compat.tsx"),
      "next/navigation": path.resolve(__dirname, "./src/lib/next-nav-compat.tsx"),
      "next/image": path.resolve(__dirname, "./src/components/Image.tsx"),
      "next/server": path.resolve(__dirname, "./src/lib/next-server-compat.ts"),
      "next/headers": path.resolve(__dirname, "./src/lib/next-headers-compat.ts"),
      "next/script": path.resolve(__dirname, "./src/lib/next-script-compat.tsx"),
      "next/og": path.resolve(__dirname, "./src/lib/next-og-compat.ts"),
    },
  },
});
