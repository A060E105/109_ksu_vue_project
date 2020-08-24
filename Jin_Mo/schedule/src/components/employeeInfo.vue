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
            let work = this.getEmployeeInfo()['workday'];
            // check variable is not undefined or null
            if (work != undefined || work != null) {
                let count = Object.keys(work).length;
                return count;
            } else {
                return 0;
            }
        },
        offday() {
            let off = this.getEmployeeInfo()['pre_off'];
            // check variable is not undefined or null
            if (off != undefined || off != null) {
                let count = Object.keys(off).length;
                return count;
            } else {
                return 0;
            }

        }
    },
    methods: {
        ...mapGetters(
            ['getEmployeeInfo']
        )
    }
}
</script>
