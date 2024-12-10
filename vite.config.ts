/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        'src/test/**/*',
        'src/**/*.test.tsx',
        'src/**/*.test.ts',
        'src/**/*.stories.tsx',
        'src/**/*.stories.ts',
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'holakirr-snow-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `main.${format === 'umd' ? 'umd.cjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
