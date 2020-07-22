<template>
    <tr>
        <td>{{ stock_value.c }}</td>
        <td>{{ stock_value.n }}</td>
        <td>{{ stock_value.o }}</td>
        <td>{{ stock_value.h }}</td>
    </tr>
</template>


<script>
export default {
    name: 'StockTableBody',
    props: {
        stock_value: {}
    }
}
</script>