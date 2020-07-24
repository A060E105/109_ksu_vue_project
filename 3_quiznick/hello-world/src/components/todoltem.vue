<template>
<ol>

  <button @click="$emit('remove',todo.id)">
    刪除
    </button>
  </ol>

</template>

<script>
export default {
props:{
  todo:{
    type:Object,
    required:true  
  }

}


}
</script>