import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		react(),
		dts({
			exclude: [
				"src/lib/defs/**/*",
				"src/**/*.stories.tsx",
				"src/**/*.stories.ts",
				"src/**/*.test.tsx",
				"src/**/*.test.ts",
			],
		}),
	],
	build: {
		// Consumers minify; keeping output readable preserves component names and pure annotations.
		minify: false,
		lib: {
			entry: resolve(__dirname, "src/main.tsx"),
			formats: ["es", "cjs"],
			// npm never packs nested `node_modules` folders, so bundled deps (phosphor) go to `vendor/`.
			fileName: (format, entryName) =>
				`${entryName.replace(/^.*node_modules\//, "vendor/")}.${format === "es" ? "js" : "cjs"}`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				preserveModules: true,
				preserveModulesRoot: "src",
			},
		},
	},
});
