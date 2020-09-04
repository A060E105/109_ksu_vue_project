<template>
    <div class='container bg-dark text-white h-100'>
        <div class="row py-2 mx-1 my-height overflow-auto">
            <div class="col p-0  border">
                    <employeesList 
                        v-for='(employee, index) in this.getEmployeesList'
                        :employee='employee'
                        :key='index'
                    ></employeesList>
            </div>
        </div>
        <div class="row py-2 mx-1 my-height overflow-auto">
            <div class="col p-2 border">
                <employeeInfo></employeeInfo>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
import employeesList from './employeesList';
import employeeInfo from './employeeInfo';

export default {
    name: 'left',
    components: {
        employeesList,
        employeeInfo
    },
    computed: {
        ...mapGetters(
            ['getEmployeesList']
        )
    }
}
</script>

<style>
.my-height {
    height: 375px;
}
</style>
