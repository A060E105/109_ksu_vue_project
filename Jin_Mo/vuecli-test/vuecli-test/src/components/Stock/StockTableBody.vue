<template>
    <tr>
        <td>null</td>
        <td>{{ id }}</td>
        <td>{{ cash }}</td>
        <td>{{ stock }}</td>
    </tr>
</template>

<script>
export default {
    name: 'StockTableBody',
    props: {
        earn_value: {},
        year: {},
        stock_id: null
    },
    computed: {
        id() {
            return this.stock_id;
        },
        cash() {
            let len = this.year.length;
            if (len <= 1) {
                return this.earn_value[this.year[0]]['cash'];
            } else {
                let sum = 0;
                for (i=0; i < len; i++) {
                    sum += this.earn_value[this.year[i]]['cash'];
                }
                return (sum / len).toFixed(2);
            }
        },
        stock() {
            let len = this.year.length;
            if (len <= 1) {
                return this.earn_value[this.year[0]]['stock'];
            } else {
                let sum = 0;
                for (i=0; i < len; i++) {
                    sum += this.earn_value[this.year[i]]['stock'];
                }
                return (sum / len).toFixed(2);
            }
        }
    }
};
</script>