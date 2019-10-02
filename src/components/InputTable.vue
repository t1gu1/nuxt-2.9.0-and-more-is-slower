<template>
    <Container class="input-table">
        <div v-if="formStructure" class="input-table__row">
            <div
                v-for="(columnName, columnIndex) in Object.keys(formStructure)"
                :key="'column-' + columnIndex"
                class="input-table__column"
            >
                <el-form-item
                    v-for="(element, index) in formStructure[columnName]"
                    :key="index"
                    :prop="columnName + '.' + index + '.value'"
                    class="input-table__item"
                    :rules="element.rules"
                    :style="element.style ? element.style : ''"
                >
                    <template v-if="index === 0" v-slot:label>
                        {{ element.label ? element.label : '' }}
                        <BubbleInfo v-if="element.info" :content="element.info" />
                    </template>

                    <el-input
                        v-if="!element.type || element.type === 'text' || element.type === 'number'"
                        v-model="element.value"
                        class="input-table__input"
                        :type="element.type ? element.type : 'text'"
                        :placeholder="element.placeholder ? element.placeholder : ''"
                    >
                        <i v-if="element.suffix" slot="suffix" class="price-table__input-suffix">{{
                            element.suffix
                        }}</i>
                    </el-input>

                    <el-select
                        v-if="element.type === 'select'"
                        v-model="element.value"
                        class="input-table__input input-table__input--select"
                        :placeholder="element.placeholder"
                    >
                        <el-option
                            v-for="option in element.options"
                            :key="option.label"
                            :label="option.label"
                            :value="option.value"
                        ></el-option>
                    </el-select>

                    <el-date-picker
                        v-if="element.type === 'date'"
                        v-model="element.value"
                        type="month"
                        :placeholder="element.placeholder"
                    />

                    <el-checkbox
                        v-if="element.type === 'checkbox'"
                        v-model="element.value"
                        class="input-table__input input-table__input--checkbox"
                        border
                    >
                        {{ element.placeholder }}
                    </el-checkbox>
                </el-form-item>
            </div>

            <div class="input-table__column">
                <div v-for="(n, index) in formStructure[Object.keys(formStructure)[0]]" :key="index">
                    <el-form-item
                        v-if="formStructure[Object.keys(formStructure)[0]].length !== 1"
                        :label="index === 0 ? 'Action' : ''"
                        class="input-table__item input-table__item--action"
                    >
                        <el-button
                            v-if="formStructure[Object.keys(formStructure)[0]].length <= 1"
                            class="input-table__action--hide"
                            type="primary"
                        ></el-button>
                        <el-button v-else class="input-table__action" type="primary" @click="removeRow(index)"
                            >Remove</el-button
                        >
                    </el-form-item>
                </div>
            </div>
        </div>

        <el-button type="primary" @click="addRow">Add</el-button>
        <slot name="footer"></slot>
    </Container>
</template>

<script>
import BubbleInfo from '~/components/BubbleInfo.vue';
import Container from '~/components/Container.vue';

export default {
    components: {
        Container,
        BubbleInfo,
    },

    props: {
        formStructure: {
            type: Object,
            default: null,
        },
        formValues: {
            type: Object,
            default: null,
        },
        repeatable: {
            type: Object,
            default: null,
        },
    },

    data() {
        return {
            currentSubYear: null,
            optionsModified: null,
            defaultRow: [],
        };
    },

    mounted() {
        // Register the first row for future copy use with addRow() method
        Object.keys(this.formStructure).forEach(columnName => {
            this.defaultRow[columnName] = JSON.parse(JSON.stringify(this.formStructure[columnName][0]));
        });
    },

    methods: {
        addRow() {
            Object.keys(this.formStructure).forEach(columnName => {
                this.formStructure[columnName].push(JSON.parse(JSON.stringify(this.defaultRow[columnName])));
            });
        },
        removeRow(index) {
            Object.keys(this.formStructure).forEach(columnName => {
                this.formStructure[columnName].splice(index, 1);
            });
        },
    },
};
</script>

<style lang="scss">
.input-table {
    margin-bottom: 50px;

    &__row {
        display: flex;
    }

    &__column {
        display: flex;
        flex-flow: column;
        margin-right: 10px;
    }

    &__item {
        width: 100%;
        max-width: 240px;
        min-width: 45px;
    }

    &__input {
        &--checkbox {
            display: flex;

            .el-checkbox__input {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
        }
    }

    &__action {
        &--hide {
            opacity: 0;
            pointer-events: none;
        }
    }

    .el-form-item__error {
        font-size: 9px;
    }
}
</style>
