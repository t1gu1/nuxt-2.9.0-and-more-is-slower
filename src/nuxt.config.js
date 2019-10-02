const dotenv = require('dotenv').config();
const lang = require('./i18n/translations.js');

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#cc0000',
        height: '4px',
    },

    server: {
        port: dotenv.PORT,
        host: dotenv.HOST,
    },

    /*
     ** Global CSS
     */
    css: [{ src: '~assets/scss/fonts.scss', lang: 'scss' }, { src: '~assets/scss/main.scss', lang: 'scss' }],

    styleResources: {
        scss: ['~assets/scss/variables.scss', '~assets/scss/functions.scss', '~assets/scss/mixins.scss'],
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/element-ui', '@/plugins/utils.js', { src: '@/plugins/accessibility', ssr: false }],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        // '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        '@nuxtjs/dotenv',
        // { src: '@/plugins/localStorage.js', ssr: false },
        // { src: '@/plugins/accessibility', ssr: false },
        ['@nuxtjs/moment', ['fr']],
        [
            'nuxt-i18n',
            {
                // Options
                vueI18nLoader: true,
                parsePages: true,
                encodePaths: false,
                seo: true,
                locales: [
                    {
                        code: 'en',
                        name: 'English',
                        iso: 'en-US',
                    },
                    {
                        code: 'fr',
                        name: 'Français',
                        iso: 'fr-CA',
                    },
                ],
                defaultLocale: 'fr',

                vueI18n: {
                    fallbackLocale: 'fr',
                    messages: lang.translations,
                },
            },
        ],
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
    },
    /*
    watchers: {
        webpack: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
    */
};
