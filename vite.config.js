import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Eğer fatihaksoy.com gibi bir domain kullanıyorsan '/' kalmalı
})
