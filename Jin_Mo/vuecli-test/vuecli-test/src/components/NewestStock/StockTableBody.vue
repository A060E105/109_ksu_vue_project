<template>
    <tr>
        <td>{{ stock_id }}</td>
        <td>{{ stock_name }}</td>
        <td>{{ stock_open }}</td>
        <td>{{ stock_high }}</td>
    </tr>
</template>


<script>
export default {
    name: 'StockTableBody',
    props: {
        stock_value: {},
        years: {}
    },
    computed: {
        stock_id() {
            return this.stock_value.c;
        },
        stock_name() {
            return this.stock_value.n;
        },
        stock_open() {
            return this.stock_value.o;
        },
        stock_high() {
            return this.stock_value.h;
        }
    }
}
</script>