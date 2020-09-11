<template>
    <div>
        <span class="font-weight-bold" style="font-size:20px">
            <span>{{ e_name }}</span>
            員工資訊
        </span>
        <br>
        <hr class="bg-white">
        上班天數： {{ workday }} 天
        <br>
        休假天數： {{ offday }}  天
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
        ...mapGetters([
            'getEmployeeInfo',
            'getEmployeesList',
            'getEmployee'
        ]),
        e_name() {
            let name = '';
            if (this.getEmployee != '') {
                return this.getEmployeesList[this.getEmployee]['e_name'];
            }
            return name;
        },
        workday() {
            let work = this.getEmployeeInfo['workday'];
            // check variable is not undefined or null
            if (work != undefined || work != null) {
                let count = Object.keys(work).length;
                return count;
            } else {
                return 0;
            }
        },
        offday() {
            let off = this.getEmployeeInfo['pre_off'];
            // check variable is not undefined or null
            if (off != undefined || off != null) {
                let count = Object.keys(off).length;
                return count;
            } else {
                return 0;
            }

        }
    }
}
</script>
