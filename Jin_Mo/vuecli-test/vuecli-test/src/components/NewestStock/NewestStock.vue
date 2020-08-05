<template>
    <div>
        <search-list :searchList='list'></search-list>
        <hr>
        <stock-table :searchList='list' v-show="list.length != 0"></stock-table>
    </div>
</template>

<script>
import SearchList from './SearchList';
import StockTable from './StockTable';

export default {
    name: 'NewestStock',
    data() {
        return {
            list: []
        }
    },
    components: {
        SearchList,
        StockTable
    }
}
</script>