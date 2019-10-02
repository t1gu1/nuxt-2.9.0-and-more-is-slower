<template>
    <div
        :style="cssProps"
        class="container"
        :class="{
            'full-width': full,
            'big-padding': bigPadding,
            padding: padding,
            'is-horizontal': horizontal,
            'no-margin': noMargin,
        }"
    >
        <Row :justify="justify ? justify : offset ? 'end' : 'start'">
            <el-col :span="24">
                <slot />
            </el-col>
        </Row>
    </div>
</template>

<script>
import Row from '~/components/Row.vue';

export default {
    components: {
        Row,
    },

    props: {
        full: {
            type: Boolean,
            default: false,
        },
        justify: {
            type: String,
            default: null,
        },
        padding: {
            type: Boolean,
            default: false,
        },
        bigPadding: {
            type: Boolean,
            default: false,
        },
        horizontal: {
            type: Boolean,
            default: false,
        },
        height: {
            type: String,
            default: null,
        },
        offset: {
            type: Boolean,
            default: false,
        },
        offsetSize: {
            type: Number,
            default: 4,
        },
        maxWidth: {
            type: String,
            default: null,
        },
        noMargin: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            pageWidth: 1920,
        };
    },

    computed: {
        cssProps() {
            return {
                '--calc-max-width': this.maxWidth ? this.maxWidth : '1440px',
                '--calc-height': this.height ? this.height : 'auto',
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    margin-left: auto;
    margin-right: auto;
    // max-width: 1440px;
    height: var(--calc-height);

    /*
    @include media(lg) {
        max-width: var(--calc-max-width);
    }
    */

    &.no-margin {
        @include media(lg) {
            margin-left: 0;
        }
    }

    &.padding {
        padding-left: 20px;
        padding-right: 20px;
    }

    &.big-padding {
        @include padding-content();
    }

    &.full-width {
        max-width: 100%;
    }

    &.is-horizontal {
        overflow-x: scroll;
        overflow-y: hidden;
    }
}
</style>
