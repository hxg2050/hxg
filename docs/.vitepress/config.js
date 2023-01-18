import { defineConfig } from 'vitepress';
import sidebar from '../dist/api.json'
export default defineConfig({

    title: '文档',
    // description: 'Just playing around.',
    'themeConfig': {
        docFooter: { prev: '上一篇', next: '下一篇' },
        sidebar
    },
    'markdown': {
        'breaks': true
    }
});