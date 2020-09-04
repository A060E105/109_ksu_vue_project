<template>
    <div style="font-size: 20px;">
        <button type="button" 
            :class="{...myClass, active: (employee.e_id == currentEmployee) ? true : false}"
            @click="setStoreEmployee">
                {{ name }}
                <span class="badge badge-danger badge-pill">{{ off }}</span>
                <span class='badge' style="background-color:#00CACA;">{{ work }}</span>
        </button>
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
        work() {
            let str = '';
            if (this.getDayWorkFlag(this.employee.e_id)) {
                str = this.getEmpClassName(this.employee.e_id);
            }
            return str;
        },
        off() {
            let str = '';
            if (this.get_isPreOff(this.employee.e_id)) {
                str = 'off';
            }
            // let str = 'off';
            return str;
        },
        name() {
            return this.employee.e_name;
        },
        ...mapState(['currentEmployee']),
        ...mapGetters([
            'getDefaultClass',
            'getDayWorkFlag',
            'getEmpClassName',
            'getCurrentDate',
            'getCurrentClassID',
            'getEmpWorkClassID',
            'get_isPreOff'
        ])
    },
    methods: {
        ...mapMutations([
            'setEmployee',
            'setEmployeeInfo',
            'setDayInfo_add',
            'setDayInfo_remove'
        ]),
        setStoreEmployee() {
            // set store.state.employee
            this.setEmployee(this.employee.e_id);
            API.getEmpInfo(this.getCurrentDate, this.employee.e_id).then(response => {
                console.log(response);
                // set store.state.employeeInfo
                this.setEmployeeInfo(response.data);
            })
            .catch(error => {
                console.log(error);
            });

            if (this.getCurrentClassID != '') {
                if (this.getDayWorkFlag(this.employee.e_id)) {
                    API.setDayInfo_remove(this.getCurrentDate, this.employee.e_id).then(response => {
                        console.log(response);
                        this.setDayInfo_remove({
                            classID: this.getEmpWorkClassID(this.employee.e_id),
                            e_id: this.employee.e_id
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
                } else {
                    API.setDayInfo_add(this.getCurrentDate, this.employee.e_id, this.getCurrentClassID)
                    .then(response => {
                        console.log(response);
                        this.setDayInfo_add({
                            classID: this.getCurrentClassID,
                            e_id: this.employee.e_id
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
            }
        }
    }
}
</script>
