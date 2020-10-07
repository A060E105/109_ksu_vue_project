<template>
    <div>
        <classInfo 
            v-for="(data, id) in this.getDefaultClass"
            :classID='id'
            :employeesId="dayInfo[id]"
            :key='id'>
        </classInfo>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import classInfo from './classInfo';
import API from './http/api';
import Swal from 'sweetalert2';

export default {
    name: 'dayInfo',
    components: {
        classInfo
    },
    data() {
        return {
            // ...
        }
    },
    computed: {
        ...mapGetters([
            'getDefaultClass',
            'getDayInfo',
            'getCurrentDate'
        ]),
        dayInfo() {
            let dayinfo = this.getDayInfo(this.getCurrentDate);
            if (dayinfo == undefined) {
                return {};
            } else {
                return this.getDayInfo(this.getCurrentDate);
            }
        }
    }
}
</script>
