<template>
    <div>
        <button type="button" :class="{...myClass, active: (employee.e_id == currentEmployee)?true:false}" @click="setStoreEmployee">{{ name }}</button>
    </div>
</template>


<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import API from './http/api';
import Swal from 'sweetalert2';

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
        ...mapState(['currentEmployee']),
        ...mapGetters(['getDefaultClass'])
    },
    methods: {
        ...mapMutations([
            'setEmployee',
            'setEmployeeInfo',
            'setDayInfo_add'
        ]),
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

            let inputOptions = {};
            let classId = Object.keys(this.getDefaultClass);
            classId.forEach(index => {
                console.log('index', index);
                console.log('name', this.getDefaultClass[index]['shift_name']);
                inputOptions[index] = this.getDefaultClass[index]['shift_name'];
            });

            Swal.fire({
                title: '選擇班別',
                input: 'radio',
                inputOptions: inputOptions,
                inputValidator: (value) => {
                    console.log(value);
                    if (!value) {
                        return 'You need to choose something!'
                    } else {
                        console.log('select class id is', value);
                        console.log('e_id', this.employee.e_id);
                        console.log('name', this.name);
                        this.setDayInfo_add({
                            'classID': value,
                            'e_id': this.employee.e_id
                        });
                    }
                }
            });
        }
    }
}
</script>