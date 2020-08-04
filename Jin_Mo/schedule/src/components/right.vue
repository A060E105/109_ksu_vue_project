<template>
    <div class="container bg-dark text-white w-100 h-100">
        <div class="text-center">
            <h1>{{ getCurrentDate }}</h1>
        </div>
        <hr class="bg-white">
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap 
        into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import API from './http/api';

export default {
    name: 'right',
    computed: {
        ...mapGetters(
            ['getCurrentDate']
        )
    },
    methods: {
        ...mapMutations(
            ['initCurrentDate']
        )
    },
    mounted() {
        this.initCurrentDate();
        API.getEmployees().then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
}
</script>