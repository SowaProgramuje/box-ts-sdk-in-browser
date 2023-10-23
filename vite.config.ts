import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { defineConfig } from 'vite'
import { UserConfig } from 'vite'

console.log(process.version)

const config: UserConfig = {
  plugins: [react(), ssr()],
  define: {
    'process.env': process.env,
    'process.version': JSON.stringify(process.version),
  }
}

export default config
