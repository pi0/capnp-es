import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    typecheck: { enabled: !process.argv.includes("bench") },
    coverage: { include: ["src/**/*.ts"] },
    plugins: [tsconfigPaths()],
  },
});
