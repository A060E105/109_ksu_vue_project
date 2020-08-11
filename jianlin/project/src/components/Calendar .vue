<template>
    <tr>
      <td>{{ list.week }}</td>
      <td @click='holidayChecked(0)' :class="[list.legal==0 ? legalClass : list.leave==0 ? leaveClass :null]"></td>
      <td @click='holidayChecked(1)' :class="[list.legal==1 ? legalClass : list.leave==1 ? leaveClass :null]"></td>
      <td @click='holidayChecked(2)' :class="[list.legal==2 ? legalClass : list.leave==2 ? leaveClass :null]"></td>
      <td @click='holidayChecked(3)' :class="[list.legal==3 ? legalClass : list.leave==3 ? leaveClass :null]"></td>
      <td @click='holidayChecked(4)' :class="[list.legal==4 ? legalClass : list.leave==4 ? leaveClass :null]"></td>
      <td @click='holidayChecked(5)' :class="[list.legal==5 ? legalClass : list.leave==5 ? leaveClass :null]"></td>
      <td @click='holidayChecked(6)' :class="[list.legal==6 ? legalClass : list.leave==6 ? leaveClass :null]"></td>
    </tr>
</template>
<script>
  export default {
    name:'Calendar',
    props:[
      'list',
      'btnType'
    ],
    data(){
      return {
        legalClass: 'legal',
        leaveClass: 'leave'
      }
    },
    methods:{
      holidayChecked(days){
        if(this.btnType!='leave'){
          this.list.legal==days ? this.list.legal=null : this.list.legal=days;
        }
        else{
          this.list.leave==days ? this.list.leave=null : this.list.leave=days;
        }
        console.log(this.list);
      }
    }
  }
</script>
<style>
  .legal{
    background-color: #f0a76c;
  }
  .leave{
    background-color: #7ceb84;
  }
</style>