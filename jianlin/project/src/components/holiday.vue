<template>
  <div>
    <div class="btn-group" role="group">
        <button @click="buttonType='leave'" type="button" :class="{...btnClass,active:buttonType!='Legal'?true:false}">休假</button>
        <button @click="buttonType='Legal'" type="button" :class="{...btnClass,active:buttonType!='leave'?true:false}" >例假</button>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
            <th scope="col">週次</th>
            <th scope="col">星期日</th>
            <th scope="col">星期一</th>
            <th scope="col">星期二</th>
            <th scope="col">星期三</th>
            <th scope="col">星期四</th>
            <th scope="col">星期五</th>
            <th scope="col">星期六</th>
        </tr>
      </thead>
      <tbody>
        <tr is='Calendar' 
          v-for="lists in tableData"
          :list='lists'
          :btnType='buttonType'
          :key="lists.week"
        />
      </tbody>
    </table>
    <button type="button" @click="onsubmit()" class="btn btn-primary">確認</button>
  </div>
</template>
<script>
import Calendar from './Calendar ';
import {apiHlidayList,apiHlidayadd} from "./APIs/api.js";

export default {
  name:'holiday',
  components:{
    Calendar
  },
  created: function() {
    this.hlidayGetData();
  },
  data(){
    return {
      buttonType:'leave',
      btnClass:{
        btn:true,
        'btn-primary':true,
      },
      tableData:[
           {week:'1',legal:-1,leave:-1},
           {week:'2',legal:-1,leave:-1},
           {week:'3',legal:-1,leave:-1},
           {week:'4',legal:-1,leave:-1},
           {week:'5',legal:-1,leave:-1},
           {week:'6',legal:-1,leave:-1},
         ],
      info:{
        'rest_days':[-1,-1,-1,-1,-1,-1,],
        'off_days':[-1,-1,-1,-1,-1,-1,]
      },
    }
  },
  beforce: function () {
  },
  methods:{
    onsubmit(){
      this.tableData.forEach(element => {
        this.info["rest_days"][element.week-1]=element.leave;
        this.info["off_days"][element.week-1]=element.legal;
      });
      apiHlidayadd((this.info));
    },
    hlidayGetData(){
      apiHlidayList().then( (res)=>{
        let jsonTolegal=JSON.parse(res.data.data.off_days);
        let jsonTorest=JSON.parse(res.data.data.rest_days);
        this.tableData.forEach(element=>{
          element.legal=jsonTolegal[element.week-1];
          element.leave=jsonTorest[element.week-1];
        })
      })
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->