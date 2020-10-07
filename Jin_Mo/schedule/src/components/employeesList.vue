<template>
    <div style="font-size: 20px;">
        <button type="button" 
            :class="{...myClass, active: (employee.e_id == currentEmployee) ? true : false}"
            @click="setStoreEmployee">
                <!-- <span v-if="off == ''">
                {{ name }}
                </span> -->
                <span :class="{ted1: (off) ? true : false}">
                </span>
                {{ name }}
                <span class='badge float-right' style="background-color:#00CACA;">{{ work }}</span>
                <!-- <span class="badge badge-danger badge-pill float-right">{{ off }}</span> -->
        </button>
    </div>
</template>


<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex';
import API from './http/api';

export default {
    name: 'employeesList',
    props: {
        employee: {},
    },
    data() {
        return {
            offClass: {
                'badge': true,
                'badge-danger': true
            },
            myClass: {
                'list-group-item': true,
                'list-group-item-action': true,
            }
        }
    },
    computed: {
        ...mapState(['currentEmployee']),
        ...mapGetters([
            'getDefaultClass',
            'getDayWorkFlag',
            'getEmpClassName',
            'getCurrentDate',
            'getCurrentClassID',
            'getEmpWorkClassID',
            'get_isPreOff'
        ]),
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
                str = '預休';
            }
            // let str = 'off';
            return str;
        },
        name() {
            return this.employee.e_name;
        }
    },
    methods: {
        ...mapMutations([
            'setEmployee',
            'setEmployeeInfo'
        ]),
        ...mapActions([
            'setDayInfo_add',
            'setDayInfo_remove'
        ]),
        setStoreEmployee() {
            // set store.state.employee
            this.setEmployee(this.employee.e_id);

            if (this.getCurrentClassID != '') {
                if (this.getDayWorkFlag(this.employee.e_id)) {
                    this.setDayInfo_remove({
                        classID: this.getEmpWorkClassID(this.employee.e_id),
                        e_id: this.employee.e_id
                    });
                } else {
                    this.setDayInfo_add();
                }
            }
        }
    }
}
</script>

<style>
.ted1 {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 0;
    border-color: #ff0000 transparent transparent transparent;
}
</style>