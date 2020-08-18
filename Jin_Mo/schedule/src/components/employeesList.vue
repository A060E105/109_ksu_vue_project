<template>
    <div>
        <button type="button" :class="{...myClass, active: (employee.e_id == currentEmployee)?true:false}" @click="setStoreEmployee">{{ name }}</button>
    </div>
</template>


<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'employeesList',
    props: {
        employee: {},
    },
    data() {
        return {
            myClass: {
                'list-group-item': true,
                'list-group-item-action': true,
            }
        }
    },
    computed: {
        name() {
            return this.employee.e_name;
        },
        ...mapState(['currentEmployee'])
    },
    methods: {
        ...mapMutations(
            ['setEmployee']
        ),
        setStoreEmployee() {
            // set store.state.employee
            this.setEmployee(this.employee.e_id);
        }
    }
}
</script>