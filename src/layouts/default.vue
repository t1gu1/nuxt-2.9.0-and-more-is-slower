<template>
    <el-container class="main-container">
        <el-container>
            <el-aside width="241px" class="main-side-menu">
                <MainMenu />
            </el-aside>

            <el-container class="main-page-container">
                <el-main class="main-page-content">
                    <div class="main-page-content__container">
                        <nuxt />
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue';

export default {
    components: {
        MainMenu,
    },
    methods: {},
};
</script>

<style lang="scss">
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

.main-banner,
.main-page-footer {
    display: flex;
    align-items: center;
    background-color: rgba(gray, 0.3);

    * {
        margin: auto;
    }
}

.main-page-footer {
    border-top: 1px solid black;
}

.main-side-menu {
    width: 240px;
    background-color: $--color-light-gray;
    border-right: 1px solid black;
}

.main-page-content {
    padding-bottom: 30px;

    &__container {
        min-height: calc(100vh - 260px);
    }
}
</style>
