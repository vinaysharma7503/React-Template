import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@RootService', replacement: path.resolve(__dirname, './src/RootService') },
      { find: '@Components', replacement: path.resolve(__dirname, './src/Components') },
      { find: '@Pages', replacement: path.resolve(__dirname, './src/Pages') },
      { find: '@Redux', replacement: path.resolve(__dirname + '/src/Redux') },
    ]
  },
  server:{
    host:true
  }
})
