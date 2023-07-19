import { defineConfig } from 'vite'
import { resolve } from 'path';
export default defineConfig({
    resolve: {
        alias: {
            'hxg': resolve('./src'),
            '@': resolve('./')
        }
    }
});