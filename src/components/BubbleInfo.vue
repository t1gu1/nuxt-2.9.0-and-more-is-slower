<template>
    <el-tooltip v-if="content" popper-class="bubble-info" :content="content" placement="top-start" effect="light">
        <img v-if="icon" class="bubble-info__icon" src="~assets/images/info.png" alt="info" />
        <slot />
    </el-tooltip>
</template>

<script>
export default {
    props: {
        icon: {
            type: Boolean,
            default: true,
        },
        content: {
            type: String,
            default: null,
        },
    },
};
</script>

<style lang="scss">
.bubble-info {
    margin-left: -2px;
    max-width: 150px;

    &__icon {
        cursor: pointer;
        padding: 0 5px;
    }
}
</style>
