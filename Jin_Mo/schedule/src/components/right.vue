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
        ...mapActions(
            ['getAllInfo']
        ),
        ...mapMutations(
            ['setCurrentClassID']
        )
    },
    mounted() {
        this.getAllInfo();
        API.getEmployees().then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

        window.addEventListener('keydown', e => {
            if (e.code == 'Digit1') {
                this.setCurrentClassID('4');
            } else if (e.code == 'Digit2') {
                this.setCurrentClassID('5');
            } else if (e.code == 'Digit3') {
                this.setCurrentClassID('6');
            } else if (e.code == 'Space' || e.code == 'Escape') {
                this.setCurrentClassID('');
            }
        });
    }
}
</script>
