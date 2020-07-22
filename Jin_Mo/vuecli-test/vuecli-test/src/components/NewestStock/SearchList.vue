<template>
    <div>
        <input v-model='newStock' @keyup.enter='addList()'>
        &nbsp; &nbsp;
        <button @click='addList()'>add</button>
        <hr>
        <ul>
            <li v-for='(stock, index) in searchList'
                :key="index">
                {{ stock }}
                --
                <button @click='removeList(index)'>delete</button>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'SearchList',
    props: {
        searchList: {}
    },
    data() {
        return {
            newStock: ''
        }
    },
    methods: {
        addList() {
            if (this.newStock != '') {
                this.searchList.push(this.newStock);
                this.newStock = '';
            }
        },
        removeList(index) {
            this.searchList.splice(index, 1);
        }
    }
}
</script>