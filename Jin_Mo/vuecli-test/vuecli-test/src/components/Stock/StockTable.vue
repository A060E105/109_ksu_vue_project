<template>
    <div>
        <button @click='setSearchYear(1)'>1</button>
        <button @click='setSearchYear(3)'>3</button>
        <button @click='setSearchYear(5)'>5</button>
        <br>
        <table border="3">
            <tr>
                <th colspan="4">
                    {{ year }}
                </th>
            </tr>
            <tr>
                <th>名稱</th>
                <th>編號</th>
                <th>現金</th>
                <th>股票</th>
            </tr>
            <tr is='StockTableBody' 
                v-for='(earn_value, index) in earn_values'
                :stock_id='index'
                :key="index"
                :year='searchYear'
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
    data() {
        return {
            // table title
            searchYear: []
        }
    },
    components: {
        StockTableBody
    },
    created() {
        this.setSearchYear(1);
    },
    computed: {
        year() {
            if (this.searchYear.length <= 1) {
                return this.searchYear[0];
            } else {
                let len = this.searchYear.length;
                return this.searchYear[0] + '~' + this.searchYear[len - 1];
            }
        }
    },
    methods: {
        setSearchYear(value) {
            this.searchYear = [];
            let i = 0;
            for (i = 0; i < value; i++) {
                this.searchYear.push(this.years[i]);
            }
            this.searchYear.reverse();
            console.log(this.searchYear);
        }
    }
};
</script>