export default {
    '*.{js,ts,vue}': ['eslint --fix', 'prettier --write'],
    '*.{html,css,yaml,md,json}': 'prettier --write',
    'resources/js/**/*.{ts,vue}': ['vitest related --run', () => 'vue-tsc --build'],
};
