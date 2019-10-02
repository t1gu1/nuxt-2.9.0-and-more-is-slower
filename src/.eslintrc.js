module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        'ecmaVersion': 6,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier', 'prettier/vue'],
    plugins: ['prettier', 'sort-imports-es6-autofix'],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-v-html': 'off',
        'no-return-await': 'off',
        'nuxt/no-cjs-in-config': 'off',
        'object-shorthand': ['error', 'always'],
        'sort-imports-es6-autofix/sort-imports-es6': [
            'error',
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
    },
};
