<template>
    <div>
        上班： {{ workday }}
        <br>
        休假： {{ offday }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'employeeInfo',
    data() {
        return {
            // ...
        }
    },
    computed: {
        workday() {
            let work = this.getEmployeeInfo()['work'];
            let count = Object.keys(work).length;

            return count;
        },
        offday() {
            let off = this.getEmployeeInfo()['off'];
            let count = Object.keys(off).length;

            return count;
        }
    },
    methods: {
        ...mapGetters(
            ['getEmployeeInfo']
        )
    }
}
</script>
