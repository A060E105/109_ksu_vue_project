<template>
  <div>
    <div class="btn-group" role="group">
        <button @click="buttonType='leave'" type="button" :class="{...btnClass,active:buttonType=='leave'?true:false}">休假</button>
        <button @click="buttonType='Legal'" type="button" :class="{...btnClass,active:buttonType=='legal'?true:false}" >例假</button>
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
import Calendar from './Calendar';
import api from "./APIs/api.js";
import Swal from "sweetalert2";

export default {
  name:'holiday',
  components:{
    Calendar
  },
  created () {
    this.hlidayGetData();
  },
  mounted() {
    window.addEventListener('keydown', e => {
      let keycode=window.event ? e.keyCode : e.which; 
      //Ctrl+1 or 2 切換假期
      if(e.ctrlKey && (keycode==49 || keycode ==50)){
            e.preventDefault();
            this.buttonType='leave'
            keycode==49 ? this.buttonType='leave' : this.buttonType='legal'
      }
      //Ctrl+s 儲存
      if(e.ctrlKey && (keycode==83)){
        e.preventDefault();
        this.onsubmit();
      }
    });
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
           {week:'6',legal:-1,leave:-1}
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
      Swal.fire({
        title: '確認儲存?',
        text: "請確認是否儲存!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '取消',
        confirmButtonText: '儲存',
      }).then((result) => {
        if(result.value){
          this.tableData.forEach(element => {
            this.info["rest_days"][element.week-1]=element.leave;
            this.info["off_days"][element.week-1]=element.legal;
          });
          api.apiHlidayadd((this.info)).then((rep)=>{
            if (rep) {
              Swal.fire(
                '儲存成功!',
                '資料已儲存.',
                'success'
              )
            }
          });
        }
      });
    },
    hlidayGetData(){
      api.apiHlidayList().then( (res)=>{
        let jsonTolegal=JSON.parse(res.data.data.off_days);
        let jsonTorest=JSON.parse(res.data.data.rest_days);
        this.tableData.forEach(element=>{
          element.legal=jsonTolegal[element.week-1];
          element.leave=jsonTorest[element.week-1];
        })
      }).catch(error => {
            console.log(error);
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->