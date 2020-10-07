<template>
    <div>
        <div :class="{...statusClass, 'bg-success': (classID == getCurrentClassID) ? true : false}"
            @click="touch()">
            {{ className }}
        </div>
        <div v-for="(id, index) in employeesId"
            :key="index">
            <button
                v-if='employeesId != undefined || employeesId != null'
                @click="remove(id)"
                :class="{...myClass, disabled: (getCurrentClassID == '') ? true : false}">
                {{ getEmployeesList[id]['e_name'] }}
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Swal from 'sweetalert2';
import API from './http/api';

export default {
    name: 'classInfo',
    props: {
        employeesId: {},
        classID: {}
    },
    data() {
        return {
            statusClass: {
                'border': true,
                'p-3': true,
                'font-weight-bold': true
            },
            myClass: {
                "list-group-item": true,
                'list-group-item-action': true
            }
        }
    },
    computed: {
        className() {
            return this.getDefaultClass[this.classID]['shift_name'];
        },
        ...mapGetters([
            'getCurrentDate',
            'getCurrentClassID',
            'getEmployeesList',
            'getDefaultClass',
            'getEmpWorkClassID'
        ])
    },
    methods: {
        ...mapMutations([
            'setCurrentClassID'
        ]),
        ...mapActions([
            'setDayInfo_remove'
        ]),
        touch() {
            if (this.getCurrentClassID != this.classID) {
                this.setCurrentClassID(this.classID);
            } else {
                this.setCurrentClassID('');
            }
        },
        remove(id) {
            this.setDayInfo_remove({
                classID: this.getEmpWorkClassID(id),
                e_id: id
            });
        }
    }
}
</script>
