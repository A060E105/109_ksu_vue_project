    <template>
    <tr>
      <td>{{ list.week }}</td>
      <td @click='holidayChecked(0)' :class="[list.legal==0 ? legalClass : list.leave==0 ? leaveClass :null]">{{ Message(0) }}</td>
      <td @click='holidayChecked(1)' :class="[list.legal==1 ? legalClass : list.leave==1 ? leaveClass :null]">{{ Message(1) }}</td>
      <td @click='holidayChecked(2)' :class="[list.legal==2 ? legalClass : list.leave==2 ? leaveClass :null]">{{ Message(2) }}</td>
      <td @click='holidayChecked(3)' :class="[list.legal==3 ? legalClass : list.leave==3 ? leaveClass :null]">{{ Message(3) }}</td>
      <td @click='holidayChecked(4)' :class="[list.legal==4 ? legalClass : list.leave==4 ? leaveClass :null]">{{ Message(4) }}</td>
      <td @click='holidayChecked(5)' :class="[list.legal==5 ? legalClass : list.leave==5 ? leaveClass :null]">{{ Message(5) }}</td>
      <td @click='holidayChecked(6)' :class="[list.legal==6 ? legalClass : list.leave==6 ? leaveClass :null]">{{ Message(6) }}</td>
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
          this.list.leave==days ? this.list.leave=-1 : null;
          this.list.legal==days ? this.list.legal=-1 : this.list.legal=days;
        }
        else{
          this.list.legal==days ? this.list.legal=-1 : null;
          this.list.leave==days ? this.list.leave=-1 : this.list.leave=days;
        } 
      },
      Message(days)
      {
        let Messagetext=null;
        Messagetext= (this.list.leave==days) ? '休假' : Messagetext
        Messagetext= (this.list.legal==days) ? '例假' : Messagetext
        return Messagetext;
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