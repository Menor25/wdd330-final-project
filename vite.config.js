import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/wdd330-final-project/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
});