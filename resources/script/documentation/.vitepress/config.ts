import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    outDir: '../../../public/docs',
    base: process.env.NODE_ENV === 'local' ? '' : '/docs/',
    title: "Crud Documentation",
    description: "Documentation Site",
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            // { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: '',
                items: [
                    // { text: 'Markdown Examples', link: '/markdown-examples' },
                    {text: 'Avatar', link: '/api-examples'},
                    {text: 'Modal', link: '/api-examples'},
                    {text: 'Input', link: '/api-examples'},
                    {text: 'FormGroup', link: '/api-examples'},
                    {text: 'Tabs ', link: '/api-examples'},
                ],
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'},
        ],
    
    }
})

