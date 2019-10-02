<template>
    <span class="link">
        <a
            v-if="external"
            :id="id"
            :class="{
                'link__external--underline': underline,
                'link__external--no-underline': !underline,
                'link__external--hoverUnderline': hoverUnderline,
                'link__external--bold': bold,
                'link__external--gray': gray,
                'link__external--dark-gray': darkGray,
                'link__external--white': white,
                'link__external--black': black,
                'link__external--primary': primary,
                'link__external--warning': warning,
                'link__external--info': info,
            }"
            class="link__external"
            :href="to"
            target="_blank"
            rel="noopener noreferrer"
            @click="$emit('click')"
        >
            <slot />
            <i v-if="!hideExternal" class="link__external-icon">
                <svg class="link__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        class="link__svg-path"
                        :class="{
                            'link__svg--gray': gray,
                            'link__svg--dark-gray': darkGray,
                            'link__svg--white': white,
                            'link__svg--black': black,
                            'link__svg--primary': primary,
                            'link__svg--warning': warning,
                            'link__svg--info': info,
                        }"
                        d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"
                    />
                </svg>
            </i>
        </a>

        <span class="link__internal-container" @click="beforeRouteChange(to)">
            <nuxt-link
                v-if="!external && !noLink"
                :id="id"
                class="link__internal"
                :aria-label="label"
                :class="{
                    'link__external--underline': underline,
                    'link__external--no-underline': !underline,
                    'link__external--hoverUnderline': hoverUnderline,
                    'link__external--bold': bold,
                    'link__internal--dark-gray': darkGray,
                    'link__internal--gray': gray,
                    'link__internal--white': white,
                    'link__internal--black': black,
                    'link__internal--primary': primary,
                    'link__external--warning': warning,
                    'link__external--info': info,
                }"
                :to="to"
            >
                <span class="link__txt"><slot /></span>
            </nuxt-link>

            <span
                v-if="!external && noLink"
                class="link__internal link__internal--nolink"
                :class="{
                    'link__internal--gray': gray,
                    'link__internal--dark-gray': darkGray,
                    'link__internal--white': white,
                    'link__internal--black': black,
                    'link__internal--primary': primary,
                    'link__external--warning': warning,
                    'link__external--info': info,
                }"
            >
                <span class="link__txt" :aria-label="label + ' ' + $t('a11y.link.active')"><slot /></span>
            </span>
        </span>
    </span>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
    props: {
        external: {
            type: Boolean,
            default: null,
        },
        noLink: {
            type: Boolean,
            default: false,
        },
        to: {
            type: [String, Object],
            default: null,
        },
        id: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: '',
        },
        primary: {
            type: Boolean,
            default: false,
        },
        warning: {
            type: Boolean,
            default: false,
        },
        info: {
            type: Boolean,
            default: false,
        },
        gray: {
            type: Boolean,
            default: false,
        },
        darkGray: {
            type: Boolean,
            default: false,
        },
        blue: {
            type: Boolean,
            default: false,
        },
        white: {
            type: Boolean,
            default: false,
        },
        black: {
            type: Boolean,
            default: false,
        },
        underline: {
            type: Boolean,
            default: false,
        },
        hoverUnderline: {
            type: Boolean,
            default: false,
        },
        bold: {
            type: Boolean,
            default: false,
        },
        hideExternal: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            lang: this.$i18n.locale,
        };
    },

    methods: {
        beforeRouteChange(to) {
            /*
            if (!this.noLink && this.lastRoute !== to) {

                this.$store.commit('menu/closeMainMenu', this.lang);
                this.$store.commit('loading/setLastRoute', to);
                this.$store.commit('loading/setIsPageLoad', true);
            }
               */
        },
    },
};
</script>

<style lang="scss" scoped>
.link {
    &__external,
    &__internal {
        position: relative;
        display: block;
        text-decoration: none;

        &:focus {
            z-index: 2;
        }

        &--primary {
            color: $--color-primary;
        }

        &--warning {
            color: $--color-warning;
        }

        &--info {
            color: $--color-info;
        }

        &--gray {
            color: $--color-gray;
        }

        &--dark-gray {
            color: $--color-dark-gray;
        }

        &--white {
            color: $--color-white;
        }

        &--black {
            color: $--color-black;
        }

        &--bold {
            font-weight: bold;
        }

        &--underline:not(.link__internal--nolink) {
            text-decoration: underline;
        }

        &--no-underline:not(.link__internal--nolink) {
            text-decoration: none;
        }

        &--hoverUnderline:not(.link__internal--nolink) {
            &:hover {
                text-decoration: underline;
            }
        }
    }

    &__external {
    }

    &__internal {
    }

    &__external-icon {
        margin-left: -2px;
    }

    &__txt {
        &.active {
            font-weight: bold;
        }
    }

    &__svg {
        width: 0.8em;
        height: 0.8em;
        margin-top: -4px;

        &--primary {
            fill: $--color-primary;
        }

        &--warning {
            fill: $--color-warning;
        }

        &--info {
            fill: $--color-info;
        }

        &--gray {
            color: $--color-gray;
        }

        &--white {
            fill: $--color-white;
        }

        &--black {
            fill: $--color-black;
        }

        &--path {
            line-height: normal;
            text-indent: 0;
            text-align: start;
            text-decoration-line: none;
            text-decoration-style: solid;
            text-transform: none;
            isolation: auto;
            mix-blend-mode: normal;
            font-weight: 400;
            white-space: normal;
            overflow: visible;
        }
    }
}
</style>
