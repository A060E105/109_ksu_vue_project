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
            let dayinfo = this.getDayInfo();
            if (dayinfo == undefined) {
                return {};
            } else {
                let index = Object.keys(dayinfo);
                index.forEach(element => {
                    // 判斷是否為物件，若不是則將資料轉成陣列
                    if (typeof(dayinfo[element]) != 'object') {
                        let e_id = dayinfo[element];
                        dayinfo[element] = [];
                        dayinfo[element].push(e_id);
                    }
                });
                console.log(this.getDayInfo());
                return this.getDayInfo();
            }
        }
    },
    methods: {
        ...mapGetters(
            ['getDefaultClass', 'getDayInfo']
        )
    }
}
</script>
