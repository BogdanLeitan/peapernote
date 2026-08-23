import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'redirect-home-html',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/home.html')) {
            res.writeHead(302, { Location: '/' })
            res.end()
            return
          }
          next()
        })
      },
    },
  ],
})
