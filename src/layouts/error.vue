<template>
    <Container class="error-page" padding>
        <Container offset>
            <div class="error-page__main-container">
                <div v-if="error.statusCode === 404" class="error-page__container">
                    <h1 class="error-page__title" v-html="$t('errorPage.404.title')"></h1>
                    <img src="~assets/images/error.png" alt="error" />
                    <p v-if="error.message.search('statusCode') === -1" class="error-page__message">
                        {{ error.message }}
                    </p>
                </div>

                <div v-else-if="error.statusCode === 401" class="error-page__container">
                    <h1 class="error-page__title" v-html="$t('errorPage.unauthorized.title')"></h1>
                    <img src="~assets/images/error.png" alt="error" />
                    <p v-if="error.message.search('statusCode') === -1" class="error-page__message">
                        {{ error.message }}
                    </p>
                </div>

                <div v-else-if="error.statusCode === 500" class="error-page__container">
                    <h1 class="error-page__title" v-html="$t('errorPage.418.title')"></h1>
                    <img src="~assets/images/error.png" alt="error" />
                    <p v-if="error.message.search('statusCode') === -1" class="error-page__message">
                        {{ error.message }}
                    </p>
                </div>

                <div v-else class="error-page__container">
                    <h1 class="error-page__title" v-html="$t('errorPage.error.title')"></h1>
                    <img src="~assets/images/error.png" alt="error" />
                    <p v-if="error.message.search('statusCode') === -1" class="error-page__message">
                        {{ error.message }}
                    </p>
                </div>
            </div>
        </Container>
    </Container>
</template>

<script>
import Container from '~/components/Container.vue';

export default {
    components: {
        Container,
    },

    props: {
        error: {
            type: Object,
            default: null,
        },
    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.error-page {
    &__main-container {
        height: 52vh;
        min-height: 400px;
        display: flex;
        text-align: center;
        align-items: center;
    }

    &__container {
        text-align: center;
        margin: auto;
    }

    &__title {
    }

    &__message {
    }
}
</style>
