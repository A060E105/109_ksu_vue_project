<template>
    <div class='container bg-dark text-white h-100'>
        <div class="row py-2 mx-1 my-height overflow-auto">
            <div class="col p-0  border">
                    <employeesList 
                        v-for='(employee, index) in this.getEmployeesList()'
                        :employee='employee'
                        :key='index'
                    ></employeesList>
            </div>
        </div>
        <div class="row py-2 mx-1 my-height overflow-auto">
            <div class="col p-0 border">
                <div class="h6 p-2">
                    Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type
                </div>
            </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
import employeesList from './employeesList';

export default {
    name: 'left',
    components: {
        employeesList
    },
    methods: {
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