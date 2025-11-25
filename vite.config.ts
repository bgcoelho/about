import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// Plugin for GitHub Pages SPA fix + CNAME + nojekyll
function githubPagesSpaFix() {
  return {
    name: "github-pages-spa-fix",
    writeBundle() {
      const dist = "dist";
      const index = `${dist}/index.html`;
      const notFound = `${dist}/404.html`;

      // Copy index.html → 404.html (for SPA routing)
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, notFound);
        console.log("✔ 404.html created from index.html");
      } else {
        console.warn("⚠ index.html not found — skipping 404.html");
      }

      // Copy CNAME (custom domain)
      if (fs.existsSync("public/CNAME")) {
        fs.copyFileSync("public/CNAME", `${dist}/CNAME`);
        console.log("✔ CNAME copied to dist/");
      } else {
        console.warn("⚠ CNAME not found in public/");
      }

      // Copy .nojekyll
      if (fs.existsSync("public/.nojekyll")) {
        fs.copyFileSync("public/.nojekyll", `${dist}/.nojekyll`);
        console.log("✔ .nojekyll copied to dist/");
      } else {
        console.warn("⚠ .nojekyll not found in public/");
      }
    },
  };
}

export default defineConfig({
  // Custom domains MUST use "/"
  base: "/",

  plugins: [react(), githubPagesSpaFix()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

