<template>
    <Container padding>
        <PageTitle>Menu 2 page title</PageTitle>

        <el-form ref="form" class="sales-page" :model="formStructure" label-width="120px" label-position="top">
            <InputTable :form-structure="formStructure" />

            <PriceTabs title="asdafafasf" :options="options" />

            <ConfirmForm @confirm="onSubmit" @cancel="onCancelSubmit" />
        </el-form>
    </Container>
</template>

<script>
import ConfirmForm from '~/components/ConfirmForm.vue';
import Container from '~/components/Container.vue';
import InputTable from '~/components/InputTable.vue';
import PageTitle from '~/components/PageTitle.vue';
import PriceTabs from '~/components/PriceTabs.vue';

export default {
    nuxtI18n: {
        paths: {
            fr: '/ventes',
            en: '/sales',
        },
    },

    components: {
        Container,
        PageTitle,
        ConfirmForm,
        // eslint-disable-next-line vue/no-unused-components
        PriceTabs,
        // eslint-disable-next-line vue/no-unused-components
        InputTable,
    },

    data() {
        return {
            formStructure: {
                name: [
                    {
                        label: 'Lorem ipsum',
                        placeholder: 'Lorem ipsum',
                        rules: [{ required: true, message: 'Ce champs est requis', trigger: 'blur' }],
                        icon: '',
                        value: '',
                    },
                ],
                price: [
                    {
                        label: 'Lorem ipsum',
                        placeholder: 'Lorem ipsum',
                        type: 'number',
                        rules: [{ required: true, message: 'Ce champs est requis' }],
                        icon: '',
                        style: { width: '100px' },
                        value: '',
                        suffix: '$',
                    },
                ],
                rawMaterial: [
                    {
                        label: 'Lorem ipsum',
                        placeholder: 'VaLorem ipsumleur',
                        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        type: 'number',
                        rules: [{ required: true, message: 'Ce champs est requis' }],
                        icon: '',
                        value: '',
                    },
                ],
                deviseRep: [
                    {
                        label: 'Lorem ipsum',
                        placeholder: 'Choisir',
                        type: 'select',
                        rules: [{ required: true, message: 'Ce champs est requis' }],
                        icon: '',
                        style: { width: '120px' },
                        value: '',
                        options: [
                            {
                                label: 'Lorem ipsum',
                                value: 'Lorem ipsum',
                            },
                            {
                                label: 'orem ipsum',
                                value: '1Lorem ipsum',
                            },
                        ],
                    },
                ],
                providerPrice: [
                    {
                        label: 'Lorem ipsum',
                        placeholder: 'Choisir',
                        type: 'select',
                        rules: [{ required: true, message: 'Ce champs est requis' }],
                        icon: '',
                        value: '',
                        options: [
                            {
                                label: 'Lorem ipsum',
                                value: 'Lorem ipsum',
                            },
                            {
                                label: 'Lorem ipsums',
                                value: '1 Lorem ipsum',
                            },
                        ],
                    },
                ],
                taxes: [
                    {
                        label: 'Lorem ipsum',
                        placeholder: 'Taux',
                        rules: [{ required: true, message: 'Ce champs est requis' }],
                        icon: '',
                        value: '',
                        suffix: '%',
                    },
                ],
            },

            options: {
                before: {
                    tabTitle: 'Lorem ipsumads',
                    subsYear: {
                        label: 'Lorem ipsum3221',
                        name: 'dollars',
                        type: null,
                        columnNames: [
                            {
                                title: 'Lorem ipsu13m',
                                month: 2,
                            },
                            {
                                title: 'Lorem ipsu442m',
                                month: 3,
                            },
                        ],
                        row: [
                            {
                                title: 'Lorem ipsu6876m',

                                values: [{ val: 50, type: 'number' }, { val: 45, type: 'number' }],
                            },
                            {
                                title: 'Lorem ip34sum',

                                values: [{ val: 50, type: 'number' }, { val: 45, type: 'number' }],
                            },
                        ],
                    },
                },
                years: [
                    {
                        number: 1,
                        subsYear: [
                            {
                                label: 'Dollars',
                                name: 'dollars',
                                type: null,
                                row: [
                                    {
                                        title: 'Nom du produit ou service',
                                        values: [
                                            { val: 50, type: 'number' },
                                            { val: 45, type: 'number' },
                                            { val: 35, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                        ],
                                    },
                                    {
                                        title: 'Nom du produit ou service 2',
                                        values: [
                                            { val: 50, type: 'number' },
                                            { val: 45, type: 'number' },
                                            { val: 35, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                        ],
                                    },
                                ],
                            },
                            {
                                label: 'Quantité',
                                name: 'quantite',
                                type: null,
                                row: [
                                    {
                                        title: 'Nom du produit ou service',
                                        values: [
                                            { val: 11, type: 'number' },
                                            { val: 152, type: 'number' },
                                            { val: 71, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 1, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 3, type: 'number' },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        number: 2,
                        subsYear: [
                            {
                                label: 'Lorem ipsum2',
                                name: 'dollars',
                                type: null,
                                row: [
                                    {
                                        title: 'NLorem ipsum',
                                        values: [
                                            { val: 75, type: 'number' },
                                            { val: 88, type: 'number' },
                                            { val: 53, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 4, type: 'number' },
                                            { val: 0, type: 'number' },
                                        ],
                                    },
                                ],
                            },
                            {
                                label: 'Lorem ipsum57',
                                name: 'quantite',
                                type: null,
                                row: [
                                    {
                                        title: 'Lorem ipsum7',
                                        values: [
                                            { val: 27, type: 'number' },
                                            { val: 76, type: 'number' },
                                            { val: 34, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        number: 3,
                        subsYear: [
                            {
                                label: '0asdas',
                                name: 'dollars',
                                type: null,
                                row: [
                                    {
                                        title: 'Nom du produit ou service',
                                        values: [
                                            { val: 59, type: 'number' },
                                            { val: 45, type: 'number' },
                                            { val: 35, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 99, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                            { val: 0, type: 'number' },
                                        ],
                                    },
                                ],
                            },
                            {
                                label: 'Lorem 3ipsum',
                                name: 'quantite',
                                type: null,
                                row: {
                                    title: 'Lorem 4ipsum',
                                    values: [
                                        { val: 43, type: 'number' },
                                        { val: 22, type: 'number' },
                                        { val: 11, type: 'number' },
                                        { val: 0, type: 'number' },
                                        { val: 0, type: 'number' },
                                        { val: 0, type: 'number' },
                                        { val: 0, type: 'number' },
                                        { val: 0, type: 'number' },
                                        { val: 0, type: 'number' },
                                        { val: 0, type: 'number' },
                                        { val: 0, type: 'number' },
                                        { val: 2, type: 'number' },
                                    ],
                                },
                            },
                        ],
                    },
                ],
            },
            validateForm: {},
        };
    },

    mounted() {
        /*
        // Test swagger api
        this.$swagger.api().then(result => {
            console.log(result);
        });
        */
        Object.keys(this.formStructure).forEach(el => {
            // console.log('Does it show key', el);

            this.validateForm[el] = [
                {
                    key: 0,
                    value: this.formStructure[el][0].value,
                },
            ];
        });

        // console.log(this.validateForm);
    },
    methods: {
        onSubmit() {
            console.log('submit!', this.$refs.form);
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
            console.log('this is a cancel');
        },
    },
};
</script>

<style lang="scss">
.sales-page {
    &__row {
        max-width: 630px;
    }
}
</style>
