import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    optimizeDeps: {
        include: ['config.json']
    }
})
