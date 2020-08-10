<template>
  <div>
    <div class="btn-group" role="group">
        <button :buttonType="'leave'" type="button" class="btn btn-secondary">休假</button>
        <button :buttonType="'Legal'" type="button" class="btn btn-secondary" >例假</button>
    </div>
    <table class="table"
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 100%">
      <thead>
        <tr>
          <th property="week">週次</th>
          <th property="week">星期日</th>
          <th property="week">星期一</th>
          <th property="week">星期二</th>
          <th property="week">星期三</th>
          <th property="week">星期四</th>
          <th property="week">星期五</th>
          <th property="week">星期六</th>
        </tr>
      </thead>
      <tr is='Calendar' 
        v-for="lists in tableData"
        :list='lists'
        :key="lists.week"
      />
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
           {week:'1',legal:'',leave:''},
           {week:'2',legal:'',leave:''},
           {week:'3',legal:'',leave:''},
           {week:'4',legal:'',leave:''},
           {week:'5',legal:'',leave:''},
           {week:'6',legal:'',leave:''},
         ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>