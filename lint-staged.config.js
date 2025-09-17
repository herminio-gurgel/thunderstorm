export default {
    '*.{js,ts,vue}': ['eslint --fix', 'prettier --write'],
    '*.{html,css,yaml,md,json}': 'prettier --write',
};
