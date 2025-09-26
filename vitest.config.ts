import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './resources/js/tests/setup.ts',
            server: { deps: { inline: ['vuetify'] } },
            exclude: [...configDefaults.exclude, 'e2e/**'],
            root: fileURLToPath(new URL('./', import.meta.url)),
        },
    }),
);
