<template>
    <Container padding>
        <PageTitle>Identification</PageTitle>
        <el-form ref="form" class="identification-form" :model="form" label-width="120px" label-position="top">
            <el-form-item
                label="Logo de l'entreprise"
                prop="imageUrl"
                :rules="[{ required: true, message: 'Un image d\'entreprise est requise' }]"
            >
                <el-upload
                    drag
                    class="avatar-uploader"
                    action="/"
                    :on-preview="beforeAvatarUpload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar-uploader__img" />
                    <div v-else>
                        <i class="el-icon-plus avatar-uploader__icon"> </i>
                        <div class="avatar-uploader__txt">
                            Télécharger une image
                        </div>
                    </div>
                </el-upload>
            </el-form-item>

            <el-form-item
                label="Nom de l'entreprise"
                prop="name"
                :rules="[{ required: true, message: 'Le nom de l\'entreprise est requis' }]"
            >
                <el-input v-model="form.name" class="identification-form__company-name"></el-input>
            </el-form-item>

            <el-form-item
                prop="region"
                :rules="[{ required: true, message: 'Un choix de forme juridique est requis' }]"
            >
                <template v-slot:label>
                    Assujetti aux taxes de vente
                    <BubbleInfo content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </template>
                <el-select v-model="form.region" placeholder="Choisir">
                    <el-option label="Incorporé" value="Incorporé"></el-option>
                    <el-option label="Immatriculé" value="Immatriculé"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item prop="isEntrepriseAlreadyStarted">
                <el-checkbox
                    v-model="form.isEntrepriseAlreadyStarted"
                    class="identification-form__checkbox"
                    label="L'entreprise est déjà en opération?"
                    name="type"
                />
                <BubbleInfo content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </el-form-item>

            <!-- !!!!!!! SUB FORM !!!!!!! -->
            <Row v-if="form.isEntrepriseAlreadyStarted" :class="'identification-form__sub-form'">
                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Encaisse"
                        prop="encaisse"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.encaisse"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Compte à recevoir"
                        prop="compteRecevoir"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.compteRecevoir"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Immobilisation"
                        prop="taxesRecevoir"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.taxesRecevoir"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Autres actifs"
                        prop="immobilisation"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.immobilisation"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Autres actifs"
                        prop="autreActifs"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.autreActifs"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Marge de crédit"
                        prop="margeCredit"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.margeCredit"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Comptes à payer"
                        prop="comptePayer"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.comptePayer"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Taxes à payer"
                        prop="taxesPayer"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.taxesPayer"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Portion CT de la dette LT"
                        prop="portionCTdetteLT"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.portionCTdetteLT"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Emprunt à LT"
                        prop="empruntLT"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.empruntLT"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Avance des actionnaires"
                        prop="avanceActionnaires"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.avanceActionnaires"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Capital action"
                        prop="capitalAction"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.capitalAction"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="Dividende"
                        prop="dividende"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.dividende"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="BNR Accumulé"
                        prop="bnrAccumule"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.bnrAccumule"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :sm="12" :md="8" :lg="6">
                    <el-form-item
                        label="BNR de la période"
                        prop="bnrPeriode"
                        :rules="[{ required: true, message: 'Ce champ est requis' }]"
                    >
                        <el-input
                            v-model="form.bnrPeriode"
                            type="number"
                            class="identification-form__sub-input"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </Row>

            <el-form-item prop="previsionDate" :rules="[{ required: true, message: 'La date est requise' }]">
                <template v-slot:label>
                    Premier mois de tes prévisions financières
                    <BubbleInfo content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </template>
                <el-date-picker v-model="form.previsionDate" type="month" placeholder="Année / Mois" />
            </el-form-item>

            <ConfirmForm @confirm="onSubmit" @cancel="onCancelSubmit" />
        </el-form>
    </Container>
</template>

<script>
import BubbleInfo from '~/components/BubbleInfo.vue';
import ConfirmForm from '~/components/ConfirmForm.vue';
import Container from '~/components/Container.vue';
import PageTitle from '~/components/PageTitle.vue';
import Row from '~/components/Row.vue';

export default {
    components: {
        Container,
        PageTitle,
        ConfirmForm,
        BubbleInfo,
        Row,
    },

    data() {
        return {
            form: {
                imageUrl: null,
                name: '',
                region: '',
                isEntrepriseAlreadyStarted: false,
                previsionDate: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                encaisse: 0,
                compteRecevoir: 0,
                taxesRecevoir: 0,
                immobilisation: 0,
                autreActifs: 0,
                margeCredit: 0,
                comptePayer: 0,
                taxesPayer: 0,
                portionCTdetteLT: 0,
                empruntLT: 0,
                avanceActionnaires: 0,
                capitalAction: 0,
                dividende: 0,
                bnrAccumule: 0,
                bnrPeriode: 0,
            },
        };
    },

    mounted() {
        /*
        // Test swagger api
        this.$swagger.api().then(result => {
            console.log(result);
        });
        */
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            this.$refs.form.validate(valid => {
                if (valid) {
                    console.log('FORM IS VALID submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        onCancelSubmit() {
            console.log('cancel submit!');
        },
        handleAvatarSuccess(res, file) {
            this.form.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error("L'avatar doit être en JPG !");
            }
            if (!isLt2M) {
                this.$message.error("L'avatar ne peut pas excéder 2Mb !");
            }
            return isJPG && isLt2M;
        },
    },
};
</script>

<style lang="scss">
.identification-form {
    &__company-name {
        max-width: 444px;
    }

    &__sub-input {
        max-width: 200px;
    }

    &__sub-form {
        margin-left: 2px;
        margin-bottom: 20px;
        padding: 20px 20px 10px;
        border-left: 2px solid $--color-gray-active;
        max-width: 910px;
    }

    &__footer {
        margin-top: 45px;
    }
}

.el-checkbox.identification-form__checkbox {
    padding: 0px 15px;
    background-color: transparent;
    border: 1px solid $--color-gray-active;
    border-radius: 4px;

    &:hover,
    &:focus {
        border: 1px solid $--color-gray;
    }
}

.avatar-uploader .el-upload,
.el-upload-dragger {
    border: 1px dashed #d9d9d9;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 444px;
    height: auto;
    min-height: 130px;
}

.el-upload-dragger {
    border: 0px solid transparent;
}

.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}

.avatar-uploader {
    &__img {
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
        width: 444px;
        height: auto;
    }
    &__icon {
        display: block;
        position: absolute;
        top: 47%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100%;
        text-align: center;
        font-size: 28px;
        color: #8c939d;
    }
    &__txt {
        font-size: 16px;
        text-align: center;
        position: absolute;
        bottom: 10px;
        width: 100%;
        pointer-events: none;
        color: $--color-black;
    }
}
</style>
