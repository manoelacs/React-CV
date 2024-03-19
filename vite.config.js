import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://manoelacs.github.io/React-CV',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
