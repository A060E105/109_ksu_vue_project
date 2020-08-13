<template>
    <div class='container bg-dark h-100 w-100 p-2 text-white'>
        <div class="container h-50 my-1 p-0" style="overflow-y: scroll">
            <div class="row h-100">
                <div class="col">
                        <employeesList 
                            v-for='(employee, index) in this.getEmployeesList()'
                            :employee='employee'
                            :key='index'
                        ></employeesList>
                </div>
            </div>
        </div>
        <div class="container py-1 mt-1 h-50" style="overflow: scroll">
            <div class="row h-100 border">
                <div class="col h-100">
                    <div class="h4 h-100 p-2">
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