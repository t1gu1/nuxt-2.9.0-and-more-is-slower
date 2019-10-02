<template>
    <div class="gray-box">
        <slot />
    </div>
</template>

<style lang="scss">
.gray-box {
    padding: 15px;
    border: 1px solid $--color-gray;
    background-color: $--color-light-gray;
    border-radius: 5px;
}
</style>
