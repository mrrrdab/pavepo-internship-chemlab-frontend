import * as path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
    ],
  },
  base: '/chemlab-test-project',
});
