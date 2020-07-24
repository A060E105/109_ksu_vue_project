
<template>
    <div>
        <input v-model='newstock' @keyup.enter='addlist()' placeholder="輸入文字" >
        <button @click='addlist()'>add</button>
        <hr>
        <search-stock-list :list='searchStockList'></search-stock-list>
        <hr>
        <stock-table 
            :years='years'
            :earn_values='stockData.earn_values'>
        </stock-table>
    </div>
</template>

<script>


export default {
    name: 'Stock',
   
}
</script>
