<template>
    <div>
        <ul>
            <li v-for='(stock_id, index) in list'
                :key='index'>
                {{ stock_id }}
                --
                <button @click='remove(index)'>delete</button>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: "SearchStockList",
    props: {
        list: []
    },
    methods: {
        remove(index) {
            this.list.splice(index, 1);
        }
    }
};
</script>