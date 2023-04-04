import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/sass/core/core.scss',
            'resources/sass/client/index.scss',
            'resources/script/main.ts',
            'resources/client.js',
        ]),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/script', import.meta.url))
        }
    }
});


