import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: 'assets',
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: './assets/main.css',
            output: {
                assetFileNames: 'styles.css',
            }
        },
    }
})