import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/MunchMate/',  // Replace with your actual GitHub repository name
});
