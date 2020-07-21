<template>
    <div>
        <input v-model='newstock' @keyup.enter='addlist()'>
        <button @click='addlist()'>add</button>
        <hr>
        <search-stock-list :list='searchStockList'></search-stock-list>
        <hr>
        <stock-table 
            :years='years'
            :earn_vaules='stockData.earn_values'>
        </stock-table>
    </div>
</template>

<script>
import StockTable from './StockTable';
import SearchStockList from './SearchStockList';

export default {
    name: 'Stock',
    data() {
        return {
            years: [],
            newstock: '',
            searchStockList: [],
            stockData: { 
                "req": { 
                        "stock_index_arys": [ "0050", "2002" ] 
                    }, 
                "earn_values": { 
                    "2002": { 
                        "2011": { "cash": 1.99, "year": "2011", "count": 3.2375, "stock": 0.5 }, 
                        "2012": { "cash": 1.01, "year": "2012", "count": 1.38425, "stock": 0.15 }, 
                        "2013": { "cash": 0.4, "year": "2013", "count": 0.6495, "stock": 0.1 }, 
                        "2014": { "cash": 0.7, "year": "2014", "count": 1.1989999999999998, "stock": 0.2 }, 
                        "2015": { "cash": 1, "year": "2015", "count": 1, "stock": 0 }, 
                        "2016": { "cash": 0.5, "year": "2016", "count": 0.5, "stock": 0 }, 
                        "2017": { "cash": 0.85, "year": "2017", "count": 0.85, "stock": 0 }, 
                        "2018": { "cash": 0.88, "year": "2018", "count": 0.88, "stock": 0 }, 
                        "2019": { "cash": 1, "year": "2019", "count": 1, "stock": 0 } 
                    }, 
                    "0050": { 
                        "2011": { "cash": 1.95, "year": "2011", "count": 1.95, "stock": 0 }, 
                        "2012": { "cash": 1.85, "year": "2012", "count": 1.85, "stock": 0 }, 
                        "2013": { "cash": 1.35, "year": "2013", "count": 1.35, "stock": 0 }, 
                        "2014": { "cash": 1.55, "year": "2014", "count": 1.55, "stock": 0 }, 
                        "2015": { "cash": 2, "year": "2015", "count": 2, "stock": 0 }, 
                        "2016": { "cash": 0.85, "year": "2016", "count": 0.85, "stock": 0 }, 
                        "2017": { "cash": 2.4, "year": "2017", "count": 2.4, "stock": 0 }, 
                        "2018": { "cash": 2.9, "year": "2018", "count": 2.9, "stock": 0 }, 
                        "2019": { "cash": 2.3, "year": "2019", "count": 2.3, "stock": 0 } 
                    } 
                            
                } 
            }
        }
    },
    components: {
        StockTable,
        SearchStockList
    },
    methods: {
        addlist() {
            this.searchStockList.push(this.newstock);
            console.log(this.searchStockList);
            this.newstock = '';
        },
        getYears() {
            // ...
        },
        getId() {
            // ...
        }
    }
};
</script>