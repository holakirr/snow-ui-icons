import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
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
      name: 'holakirr-snow-ui-icons',
      formats: ['es', 'umd'],
      fileName: (format) => `main.${format === 'umd' ? 'umd.cjs' : 'js'}`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@phosphor-icons/react/dist/ssr',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@phosphor-icons/react/dist/ssr': '@phosphor-icons/react/dist/ssr',
        },
      },
    },
  },
})
