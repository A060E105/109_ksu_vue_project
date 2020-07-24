<template>
    <div>
        <table border="3">
            <tr>
                <th>股票代號</th>
                <th>公司簡稱</th>
                <th>開盤價</th>
                <th>最高價</th>
            </tr>
            <tr is='StockTableBody'
                v-for='(value, index) in jsonData.msgArray'
                :stock_value='value'
                :key="index">
            </tr>
        </table>
    </div>
</template>


<script>
import StockTableBody from './StockTableBody';
import API from './api/api';

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
            jsonData: {}
        }
    },
    watch: {
        searchList() {
            this.getData();
        }
    },
    methods: {
        getData() {
            API.getData(this.searchList).then(response => {
                this.jsonData = response.data;
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>