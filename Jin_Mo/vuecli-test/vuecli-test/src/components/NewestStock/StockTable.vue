<template>
    <div>
        <div>
            <button @click="setTitleYears(1)">1</button>
            <button @click="setTitleYears(3)">3</button>
            <button @click="setTitleYears(5)">5</button>
        </div>
        <table border="3">
            <tr>
                <th colspan="4">{{ current_year }}</th>
                <th colspan="2">{{ year_title }}</th>
            </tr>
            <tr>
                <th>股票代號</th>
                <th>公司簡稱</th>
                <th>開盤價</th>
                <th>最高價</th>
                <th>股利</th>
                <th>現金</th>
            </tr>
            <tr is='StockTableBody'
                v-for='(value, index) in newestStockData.msgArray'
                :stock_value='value'
                :years='title_years'
                :watchStock='watchStockData'
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
            years: [],                  // 所有年份
            title_years: [],            // 要查詢的年份
            newestStockData: {},        // 及時股價回傳的資料
            watchStockData: {},         // 關注的股票資料
            postBody: {
                "_action": "list",
                "member_id": 3
            }
        }
    },
    watch: {
        searchList() {
            this.getData();
        }
    },
    created() {
        this.getWatch();
    },
    computed: {
        // 顯示今年的年份
        current_year() {
            let date = new Date();
            return date.getFullYear();
        },
        // 顯示查詢的年份
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
        // 設定要查詢的年份
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
        // 取得及時股價
        getData() {
            API.getData(this.searchList).then(response => {
                this.newestStockData = response.data;
                console.log('getData', response);
            })
            .catch(err => {
                console.log(err);
            })
        },
        // 從伺服器取得關注的股票代碼與歷史股價
        getWatch() {
            API.getWatchStock(this.postBody).then(response => {
                console.log('getWatch', response);
                this.watchStockData = response.stock;
                this.years = Object.keys(response.data.watchStocks[0].earn_values).reverse();
                console.log('years', this.years);
                console.log('watchStockData', this.watchStockData);
                this.setTitleYears(1);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
}
</script>