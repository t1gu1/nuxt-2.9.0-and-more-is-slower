<template>
    <div class="price-table__container">
        <div class="price-table__row-container">
            <!-- Empty Name for Name column (corner top/left) -->
            <span class="price-table__row-name"></span>

            <!-- DATES (top) -->
            <template v-if="elements.columnNames">
                <span
                    v-for="(column, index) in elements.columnNames"
                    :key="'Name-date' + index"
                    class="price-table__column-name"
                >
                    {{ column.title }}
                </span>
            </template>

            <span v-for="(n, index) in 12" v-else :key="'date' + index" class="price-table__dates">
                {{
                    $moment()
                        .month(n - 1)
                        .format('MMM')
                }}
            </span>

            <!-- TOTAL NAME / TITLE (top) -->
            <span class="price-table__dates">
                Total
            </span>
        </div>

        <div v-for="(row, rowIndex) in elements.row" :key="'row' + rowIndex" class="price-table__row-container">
            <!-- NAME / TITLE (Left) -->
            <span class="price-table__row-name">{{ row.title }}</span>

            <!-- VALUES / INPUTS -->
            <el-input
                v-for="(value, index) in row.values"
                :key="'value' + index"
                v-model="value.val"
                class="price-table__input"
                :type="value.type"
            >
                <i slot="suffix" class="price-table__input-icon">$</i>
            </el-input>

            <!-- TOTAL VALUE -->
            <!-- <el-input :value="sumOfRow(elements.row.values)" class="price-table__input" disabled type="number"> -->
            <el-input class="price-table__input" disabled type="number">
                <i slot="suffix" class="price-table__input-icon">$</i>
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        elements: {
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

    methods: {
        sumOfRow(rowData) {
            return rowData.reduce((total, value) => total + parseInt(value.val), 0);
        },
    },
};
</script>

<style lang="scss">
$priceTableWidth: 110px;
$priceTableInputWidth: 75px;
$priceTableHeight: 40px;

.price-table {
    &__row-container {
        display: flex;
        align-items: center;
    }

    &__column-name {
        display: inline-flex;
        align-items: center;
        width: $priceTableInputWidth;
        height: $priceTableHeight;
        margin-right: 3px;
        margin-bottom: 0px;
        font-size: 13px;
        color: $--color-black;
    }

    &__row-name {
        display: inline-flex;
        align-items: center;
        width: $priceTableWidth;
        height: $priceTableHeight;
        margin-right: 12px;
        margin-bottom: 0px;
        font-size: 13px;
        color: $--color-gray;
    }

    &__dates {
        display: inline-block;
        width: $priceTableInputWidth;
        margin-right: 3px;
        margin-bottom: 3px;
        color: blue;
        text-align: right;
        font-weight: 700;
    }

    &__input {
        width: $priceTableInputWidth;
        height: $priceTableHeight - 2;
        margin-right: 3px;
        margin-bottom: 3px;

        &.is-disabled .el-input__inner {
            color: $--color-black;
            background-color: $--color-gray-active;
        }
    }
}

$priceTableInputWidth: 165px;

.price-table__tabs--before {
    .price-table {
        &__column-name,
        &__dates,
        &__input {
            width: $priceTableInputWidth;
        }
    }
}
</style>
