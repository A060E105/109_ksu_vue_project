<template>
    <tr>
        <td>{{ stock_id }}</td>
        <td>{{ stock_name }}</td>
        <td>{{ stock_open }}</td>
        <td>{{ stock_high }}</td>
        <td>{{ stock_earn }}</td>
        <td>{{ cash_earn }}</td>
    </tr>
</template>


<script>
export default {
    name: 'StockTableBody',
    props: {
        stock_value: {},    // 及時股價
        watchStock: {},     // 關注的所有股票與歷年資料
        years: {}           // 要查詢的年份
    },
    computed: {
        // 回傳股票代碼
        stock_id() {
            return this.stock_value.c;
        },
        // 回傳股票名稱
        stock_name() {
            return this.stock_value.n;
        },
        // 回傳股票開盤價
        stock_open() {
            return this.stock_value.o;
        },
        // 回傳股票最高價
        stock_high() {
            return this.stock_value.h;
        },
        // 回傳歷年股票平均
        stock_earn() {
            // 檢查關注的股票是否定義
            if (this.watchStock[this.stock_value.c] == undefined) {
                return 0;
            } else {
                let len = this.years.length;
                // 檢查查詢的年份
                if (len <= 1) {
                    let stock = this.watchStock[this.stock_value.c][this.years[0]]['stock'];
                    return stock;
                } else {
                    let stock = 0;
                    for (let i=0; i < len; i++) {
                        stock += this.watchStock[this.stock_value.c][this.years[i]]['stock'];
                    }
                    return (stock / len).toFixed(2);
                }
            }
        },
        // 回傳歷年現金平均
        cash_earn() {
            // 檢查關注的股票是否定義
            if (this.watchStock[this.stock_value.c] == undefined) {
                return 0;
            } else {
                let len = this.years.length;
                // 檢查查詢的年份
                if (len <= 1) {
                    let cash = this.watchStock[this.stock_value.c][this.years[0]]['cash'];
                    return cash;
                } else {
                    let cash = 0;
                    for (let i=0; i < len; i++) {
                        cash += this.watchStock[this.stock_value.c][this.years[i]]['cash'];
                    }
                    return (cash / len).toFixed(2);
                }
            }
        }
    }
}
</script>