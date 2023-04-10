import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const formats = ['cjs', 'esm'];

export default defineConfig([{
    input: 'src/core/index.ts',
    output: formats.map(fmt => {
        return {
            dir: 'dist',
            entryFileNames: `[name].${fmt}.js`,
            format: fmt
        }
    }),
    plugins: [resolve(), typescript({
        compilerOptions: {
            outDir: "./dist",
            declaration: false,
            declarationDir: undefined
        }
    })],
}, {
    input: 'jsx-runtime/src/index.ts',
    output: formats.map(fmt => {
        return {
            dir: 'jsx-runtime/dist',
            entryFileNames: `[name].${fmt}.js`,
            format: fmt
        }
    }),
    plugins: [resolve(), typescript({
        compilerOptions: {
            outDir: "./jsx-runtime/dist",
            declaration: false,
            declarationDir: undefined
        }
    })],
    external: ['hxg']
},
]);