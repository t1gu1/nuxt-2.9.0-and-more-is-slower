<template>
    <el-menu default-active="tableau-de-bord" class="main-menu" :router="false" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/matieres-premieres">
            <CustomLink :to="localePath('expenses-rawMaterial')">
                <span class="main-menu__txt main-menu__txt--sub">Menu 1</span>
            </CustomLink>
        </el-menu-item>

        <el-menu-item index="/ventes">
            <CustomLink :to="localePath('ventes')">
                <span class="main-menu__txt">Menu 2</span>
            </CustomLink>
        </el-menu-item>
    </el-menu>
</template>

<script>
import CustomLink from '~/components/CustomLink';

export default {
    components: {
        CustomLink,
    },

    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
    },
};
</script>

<style lang="scss">
.main-menu {
    background-color: $--color-light-gray;

    &__txt {
        font-size: 16px;
        font-weight: bold;
        color: $--color-primary;

        &--sub {
            font-size: 14px;
        }
    }

    .el-submenu__icon-arrow {
        color: $--color-primary;
        font-weight: bold;
        font-size: 16px;
    }

    .el-menu-item {
        &.is-active {
            border-left: 5px solid $--color-primary !important;
        }
    }

    .el-menu-item,
    .el-submenu {
        border-bottom: 1px solid rgba(gray, 0.2);

        &:hover {
            background-color: $--color-gray-active;
        }

        &:focus {
            background-color: transparent;
        }

        &.is-active {
            //background-color: $--color-gray-active;

            .el-submenu__title {
                border-left: 5px solid $--color-primary !important;
            }
        }

        .el-menu-item {
            transition: 0.25s all;

            &.is-active,
            &:hover {
                &:before {
                    transition: 0.25s all;
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 20px;
                    border-left: 5px solid $--color-primary !important;
                }
            }

            &:hover:not(.is-active):before {
                height: 5px;
            }
        }
    }

    .el-submenu {
        &__title {
            &:hover {
                background-color: $--color-gray-active;
            }
        }

        .el-menu {
            background-color: $--color-gray-active;
            .el-menu-item {
                border-bottom: none;
            }
        }

        .el-menu-item {
            &.is-active {
                border-left: 0px solid transparent !important;
            }
        }
    }

    .spacer {
        height: 56px;
        width: 100%;
    }
}
</style>
