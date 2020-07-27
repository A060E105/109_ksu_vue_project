<template>
    <div>
        <div>
            <button @click="setTitleYears(1)">1</button>
            <button @click="setTitleYears(3)">3</button>
            <button @click="setTitleYears(5)">5</button>
        </div>
        <table border="3">
            <tr>
                <th colspan="4">{{ year_title }}</th>
            </tr>
            <tr>
                <th>股票代號</th>
                <th>公司簡稱</th>
                <th>開盤價</th>
                <th>最高價</th>
            </tr>
            <tr is='StockTableBody'
                v-for='(value, index) in jsonData.msgArray'
                :stock_value='value'
                :years='title_years'
                :key="index">
            </tr>
        </table>
    </div>
</template>


<script>
import StockTableBody from './StockTableBody';
import API from './http/api';

export default {
    name: 'StockTable',
    components: {
        StockTableBody
    },
    props: {
        searchList: {}
    },
    data() {
        return {
            years: [],
            title_years: [],
            jsonData: {},
            stockData: {},
            postBody: {
                "_action": "list",
                "member_id": 3
            }
        }
    },
    watch: {
        searchList: function () {
            console.log('watch search List');
            this.getData();
        }
    },
    created() {
        this.getWatch();
    },
    computed: {
        year_title() {
            let len = this.title_years.length;
            if (len <= 1) {
                return this.title_years[0];
            } else {
                return this.title_years[0] + '~' + this.title_years[len -1];
            }
        }
    },
    methods: {
        setTitleYears(value) {
            this.title_years = [];
            if (value === 1) {
                this.title_years.push(this.years[0]);
            } else {
                for (let i=0; i < value; i++) {
                    this.title_years.push(this.years[i]);
                }
                this.title_years.reverse();
            }
        },
        getData() {
            console.log('getData');
            API.getData(this.searchList).then(response => {
                this.jsonData = response.data;
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
        },
        getWatch() {
            console.log('getWatch');
            API.getWatchStock(this.postBody).then(response => {
                console.log(response);
                this.stockData = response;
                this.years = Object.keys(response.data.watchStocks[0].earn_values).reverse();
                console.log('years', this.years);
                this.setTitleYears(1);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
}
</script>