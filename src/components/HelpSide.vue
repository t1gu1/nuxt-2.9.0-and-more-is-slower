<template>
    <div
        class="help-side"
        :style="`top: ${headerSpacer}px; height: calc(100% - ${headerSpacer}px - 40px);`"
        :class="{ close: !privateIsOpen }"
    >
        <div class="help-side__close" @click="close">
            <img src="~assets/images/close.png" alt="close" />
        </div>

        <div class="help-side__top-title">
            Première visite
        </div>

        <PageTitle tag="h3" class="help-side__title">
            Mieux comprendre Paramètres utilisateur
        </PageTitle>

        <div class="help-side__content">
            <slot />
        </div>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue';

export default {
    components: {
        PageTitle,
    },

    props: {
        topTitle: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: null,
        },
        isOpen: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            privateIsOpen: false,
            headerSpacer: 0,
            headerHeight: 0,
        };
    },

    watch: {
        isOpen(newVal, oldVal) {
            this.privateIsOpen = newVal;
        },
    },

    mounted() {
        this.calcHeader();
        this.calcHeaderSpacer();

        window.onscroll = () => {
            this.calcHeaderSpacer();
        };
    },

    methods: {
        close() {
            this.$emit('update:is-open', false);
            this.privateIsOpen = false;
        },
        calcHeaderSpacer() {
            const scrollTop = parseInt(document.documentElement.scrollTop);

            const scrollDifference = scrollTop <= this.headerHeight ? scrollTop : this.headerHeight;

            this.headerSpacer = this.headerHeight - scrollDifference;
        },
        calcHeader() {
            const mainHeaderHeight = parseInt(document.getElementById('main-header').style.height);
            const mainBannerHeight = parseInt(document.getElementById('main-banner').style.height);
            this.headerHeight = mainHeaderHeight + mainBannerHeight;
        },
    },
};
</script>

<style lang="scss">
$help-side-width: 415px;
$help-side-padding: 20px;

.help-side {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    max-width: $help-side-width;
    padding: $help-side-padding;
    color: $--color-black;
    background-color: white;
    transition: 1s right;
    box-shadow: -4px 6px 12px 1px rgba(0, 0, 0, 0.4);
    overflow: scroll;
    overflow-x: hidden;

    &__close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        padding: 10px;
    }

    &__top-title {
        text-transform: uppercase;
        color: $--color-gray;
        font-size: 10px;
        font-weight: bold;
    }

    &__title {
        margin-top: 2px;
    }

    &__content {
        p {
            margin: 10px 0;
            font-size: 14px;
            line-height: 1.3;
        }

        h3 {
            font-size: 18px;
            margin-top: 25px;
            margin-bottom: 5px;
        }
    }

    &.close {
        right: -($help-side-width + $help-side-padding * 2 + 20);
    }
}
</style>
