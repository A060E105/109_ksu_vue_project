<template>
    <div>
        <table border="3">
            <tr>
                <th>名稱</th>
                <th>編號</th>
                <th>現金</th>
                <th>股票</th>
            </tr>
            <tr is='StockTableBody' 
                v-for='(earn_value, index) in earn_values'
                :stock_id='index'
                :key="earn_value"
                :year='years'
                :earn_value='earn_value'>
            </tr>
        </table>
    </div>
</template>

<script>
import StockTableBody from './StockTableBody';

export default {
    name: 'StockTable',
    props: {
        years: {},
        earn_values: {}
    },
    components: {
        StockTableBody
    },
    computed: {
        year() {
            if (this.years.length <= 1) {
                return this.years[0];
            } else {
                let len = this.years.length;
                return this.years[0] + '~' + this.years[len - 1];
            }
        }
    }
};
</script>