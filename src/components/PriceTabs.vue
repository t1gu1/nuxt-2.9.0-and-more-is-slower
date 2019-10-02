<template>
    <div class="price-table">
        <PageTitle v-if="title" :tag="titleTag" class="price-table__title">{{ title }}</PageTitle>
        <el-tabs v-if="options" type="border-card" class="price-table__tabs">
            <el-tab-pane class="price-table__tabs--before" label="asdadadad">
                <PriceTable :elements="options.before.subsYear" />
            </el-tab-pane>
            <el-tab-pane v-for="year in options.years" :key="year.number" :label="`zzzz ${year.number}`">
                <el-tabs v-model="currentSubYear">
                    <el-tab-pane
                        v-for="subYear in year.subsYear"
                        :key="subYear.label"
                        :label="subYear.label"
                        :name="subYear.name"
                    >
                        <PriceTable :elements="subYear" />
                    </el-tab-pane>
                </el-tabs>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue';
import PriceTable from '~/components/PriceTable.vue';

export default {
    components: {
        PageTitle,
        PriceTable,
    },

    props: {
        title: {
            type: String,
            default: null,
        },
        titleTag: {
            type: String,
            default: 'h2',
        },
        options: {
            type: Object,
            default: null,
        },
        optionsBefore: {
            type: Object,
            default: null,
        },
    },

    data() {
        return {
            currentSubYear: null,
            optionsModified: null,
        };
    },

    mounted() {
        this.currentSubYear = this.options.years[0].subsYear[0].name;
        // this.optionsModified = JSON.parse(JSON.stringify(this.options));
    },

    methods: {
        sumOfRow(rowData) {
            return rowData.reduce((total, value) => total + parseInt(value.val), 0);
        },
    },
};
</script>

<style lang="scss">
.price-table {
}
</style>
