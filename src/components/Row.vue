<template>
    <el-row
        class="row"
        :class="{ 'is-flex': type === 'flex' }"
        :align="align"
        :justify="justify"
        :tag="tag"
        :type="type"
        :gutter="gutter ? 64 : gutterSmall ? 15 : customGutter"
    >
        <slot />
    </el-row>
</template>

<script>
export default {
    props: {
        customGutter: {
            type: Number,
            default: 0,
        },
        gutter: {
            type: Boolean,
            default: false,
        },
        gutterSmall: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'flex',
        },
        justify: {
            type: String,
            default: 'start',
        },
        align: {
            type: String,
            default: 'top',
        },
        tag: {
            type: String,
            default: 'div',
        },
    },
};
</script>

<style lang="scss" scoped>
.row {
    &.is-flex {
        flex-flow: wrap;
    }
}
</style>
