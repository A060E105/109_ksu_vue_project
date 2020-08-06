<template>
  
  <input
  type="text"
  class="input"
  :value="value"
  v-on="addnewlist">
  
  


</template>
<script>
export default{
  props:{
    value:{
      type:String,
      default:'',
    }
  },
  computed:{
addnewlist(){
  return{
   ...this.$addnewlist,
   input: event=>this.$emit('input',event.target.value)
  }
}


  }
}
</script>