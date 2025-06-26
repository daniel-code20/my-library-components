// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, 
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyComponentLibrary',
      fileName: (format) => `my-component-library.${format}.js`, 
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons', 'clsx'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-icons': 'ReactIcons',
          clsx: 'clsx',
        },
      },
    },
  },
})