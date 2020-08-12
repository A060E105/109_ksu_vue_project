<template>
  <div>
    <div class="btn-group" role="group">
        <button @click="buttonType='leave'" type="button" class="btn btn-primary">休假</button>
        <button @click="buttonType='Legal'" type="button" class="btn btn-primary" >例假</button>
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
  </div>
</template>
<script>
import Calendar from './Calendar ';
export default {
  name:'holiday',
  components:{
    Calendar
  },
  data(){
    return {
      buttonType:'leave',
      tableData:[
           {week:'1',legal:null,leave:null},
           {week:'2',legal:null,leave:null},
           {week:'3',legal:null,leave:null},
           {week:'4',legal:null,leave:null},
           {week:'5',legal:null,leave:null},
           {week:'6',legal:null,leave:null},
         ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>