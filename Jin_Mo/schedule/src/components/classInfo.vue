<template>
    <div>
        <div class='border p-3 font-weight-bold '>
            {{ className }}
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
import { mapGetters, mapMutations } from 'vuex';
import Swal from 'sweetalert2';

export default {
    name: 'classInfo',
    props: {
        employeesId: {},
        classID: {}
    },
    data() {
        return {
            statusFlag: true,
            modBtnClass: {
                'float-right': true,
                'btn': true,
                'btn-default': true,
                'btn-outline-light': true,
                'align-items-center': true
            },
            myClass: {
                "list-group-item": true,
                'list-group-item-action': true
                // 'disabled': true
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
        },
        ...mapGetters([
            'getCurrentDate',
            'getDayInfo'
        ])
    },
    methods: {
        changeStatus() {
            this.statusFlag = !this.statusFlag;
        },
        show(id) {
            Swal.fire({
                title: '是否刪除' + this.getEmployeesList()[id]['e_name'] + '?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '確定',
                cancelButtonText: '取消'
            }).then(result => {
                if (result.value) {
                    this.setDayInfo_remove({
                        'classID': this.classID,
                        'e_id': id
                    });
                    console.log('get day info', this.getDayInfo);
                }
            });
        },
        ...mapGetters(
            ['getEmployeesList', 'getDefaultClass']
        ),
        ...mapMutations(
            ['setDayInfo_remove']
        )
    }
}
</script>
