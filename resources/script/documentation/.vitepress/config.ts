import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    outDir: '../../../public/docs',
    base: process.env.NODE_ENV === 'local' ? '' : '/docs/',
  title: "Crud Documentation",
  description: "Documentation Site"
})
