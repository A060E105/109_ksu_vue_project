<template>
    <div>
        <classInfo 
            v-for="(data, id) in this.getDefaultClass()"
            :classID='id'
            :employeesId="dayInfo[id]"
            :key='id'>
        </classInfo>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import classInfo from './classInfo';

export default {
    name: 'dayInfo',
    components: {
        classInfo
    },
    computed: {
        dayInfo() {
            return this.getDayInfo();
        }
    },
    mounted() {
        console.log(this.getDayInfo()[4]);
    },
    methods: {
        ...mapGetters(
            ['getDefaultClass', 'getDayInfo']
        )
    }
}
</script>