<template>
    <component :is="tag" class="page-title">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'h1',
        },
    },
};
</script>

<style lang="scss" scoped>
.page-title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
}

h2.page-title {
    font-size: 24px;
    margin-bottom: 10px;
}
</style>
