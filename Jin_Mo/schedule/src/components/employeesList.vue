<template>
    <div>
        <button type="button" :class="{...myClass, active: (employee.e_id == currentEmployee)?true:false}" @click="setStoreEmployee">{{ name }}</button>
    </div>
</template>


<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import API from './http/api';

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
            ['setEmployee', 'setEmployeeInfo']
        ),
        ...mapGetters(
            ['getCurrentDate']
        ),
        setStoreEmployee() {
            // set store.state.employee
            this.setEmployee(this.employee.e_id);
            API.getEmpInfo(this.getCurrentDate(), this.employee.e_id).then(response => {
                console.log(response);
                // set store.state.employeeInfo
                this.setEmployeeInfo(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>