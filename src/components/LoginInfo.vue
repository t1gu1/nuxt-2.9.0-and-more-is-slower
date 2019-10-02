<template>
    <Row>
        <el-col :span="24">
            <h2>Login component</h2>
            <br />

            <pre><b>Token:</b> <br />{{ isLogged }}</pre>
            <br />
            <pre><b>User info:</b> <br />{{ user }}</pre>
            <br />

            <pre><b>RefreshToken:</b> <br />{{ refreshToken }}</pre>
            <br />

            <pre><b>ExpiresIn:</b> <br />{{ expiresIn }}</pre>
            <br />

            <el-button type="primary" :disabled="isLogged" @click="loginUser"
                >Login User (user/pswd already present, just press the button)</el-button
            >
            <el-button type="primary" :disabled="isLogged" @click="loginAnonymous">Login anonymous</el-button>
            <el-button type="danger" :disabled="!isLogged" @click="logout">Logout</el-button>
        </el-col>
    </Row>
</template>

<script>
import { mapGetters } from 'vuex';
import Row from '~/components/Row.vue';

export default {
    components: {
        Row,
    },

    data() {
        return {
            form: {
                username: 'email@admin.com',
                password: 'admineadmine',
            },
        };
    },

    computed: {
        ...mapGetters({
            isLogged: 'authentication/getAccessToken',
            user: 'authentication/getUser',
            refreshToken: 'authentication/getRefreshToken',
            expiresIn: 'authentication/getExpiresIn',
        }),
    },

    mounted() {},

    methods: {
        loginUser() {
            const authInfos = {
                username: this.form.username,
                password: this.form.password,
            };
            this.$store.dispatch('authentication/loginAdmin', authInfos).then(info => {
                console.log('state', info);
            });
        },
        loginAnonymous() {
            this.$store.dispatch('authentication/loginAnonymous').then(info => {
                console.log('state', info);
            });
        },
        logout() {
            this.$store.commit('authentication/logout');
        },
    },
};
</script>

<style lang="scss" scoped>
.login {
}
</style>
