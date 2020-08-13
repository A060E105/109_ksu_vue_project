<template>
    <div>
        <button type="button" :class="{...myClass, active: (employee.id == currentEmployee)?true:false}" @click="setStoreEmployee">{{ name }}</button>
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
            return this.employee.name;
        },
        ...mapState(['currentEmployee'])
    },
    methods: {
        ...mapMutations(
            ['setEmployee']
        ),
        setStoreEmployee() {
            // set store.state.employee
            this.setEmployee(this.employee.id);
        }
    }
}
</script>