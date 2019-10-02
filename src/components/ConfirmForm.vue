<template>
    <div class="confirm-form">
        <GrayBox>
            <el-button type="primary" @click="$emit('confirm')">Enregistrer</el-button>
            <el-button @click="$emit('cancel')">Annuler</el-button>
        </GrayBox>
    </div>
</template>

<script>
import GrayBox from '~/components/GrayBox.vue';

export default {
    components: {
        GrayBox,
    },

    mounted() {},
};
</script>

<style lang="scss" scoped>
.confirm-form {
    margin-top: 45px;
}
</style>
