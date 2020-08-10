<template>
    <tr>
      <td>{{ list.week }}</td>
      <td @click='holidayChecked(0)' ></td>
      <td @click='holidayChecked(1)' ></td>
      <td @click='holidayChecked(2)' ></td>
      <td @click='holidayChecked(3)' ></td>
      <td @click='holidayChecked(4)' ></td>
      <td @click='holidayChecked(5)' ></td>
      <td @click='holidayChecked(6)' ></td>
    </tr>
</template>
<script>
  export default {
    name:'Calendar',
    props:[
      'list',
      'buttonType'
    ],
    methods:{
      holidayChecked(days)
      {
        this.tableData[this.buttonType]=days;
        console.log(this.tableData);
      }
    }
  }
</script>