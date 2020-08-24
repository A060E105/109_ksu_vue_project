<template>
    <div class="container bg-dark text-white w-100 h-100">
        <div class="text-center">
            <h1>{{ getCurrentDate }}</h1>
        </div>
        <hr class="bg-white">
        <dayInfo></dayInfo>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import API from './http/api';
import dayInfo from './dayInfo';

export default {
    name: 'right',
    components: {
        dayInfo
    },
    computed: {
        ...mapGetters(
            ['getCurrentDate']
        )
    },
    methods: {
        ...mapMutations(
            ['initCurrentDate']
        ),
        ...mapActions(
            ['getAllInfo']
        )
    },
    mounted() {
        this.initCurrentDate();
        this.getAllInfo();
        API.getEmployees().then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
        API.getMonthInfo().then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
}
</script>
