<template>
    <div>
        <div class='border p-3 font-weight-bold '>
            {{ className }}
            <button :class="{...modBtnClass, 'btn-danger': (statusFlag)?true:false}"
                @click="changeStatus()">
                {{ status }}
            </button>
        </div>
        <div v-for="(id, index) in employeesId"
            :key="index">
            <button
                v-if='employeesId != undefined || employeesId != null'
                @click="show(id)"
                :class="{...myClass, 'disabled': (statusFlag==false)?true:false}">
                {{ getEmployeesList()[id]['e_name'] }}
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'classInfo',
    props: {
        employeesId: {},
        classID: {}
    },
    data() {
        return {
            statusFlag: false,
            modBtnClass: {
                'float-right': true,
                'btn': true,
                'btn-default': true,
                'btn-outline-light': true,
                'align-items-center': true
            },
            myClass: {
                "list-group-item": true,
                'list-group-item-action': true,
                'disabled': true
            }
        }
    },
    computed: {
        className() {
            return this.getDefaultClass()[this.classID]['shift_name'];
        },
        status() {
            if (this.statusFlag)
                // 修改中按鈕顯示的文字
                return '完成';
            else {
                // 修改完成按鈕顯示的文字
                return '修改';
            }
        }
    },
    methods: {
        changeStatus() {
            this.statusFlag = !this.statusFlag;
        },
        show(id) {
            let temp = confirm( '是否刪除 ' + this.getEmployeesList()[id]['e_name'] );
            console.log('confirm', temp);
            console.log('employee id', id);
        },
        ...mapGetters(
            ['getEmployeesList', 'getDefaultClass']
        )
    }
}
</script>
