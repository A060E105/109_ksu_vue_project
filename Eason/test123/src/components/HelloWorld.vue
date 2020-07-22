<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
<div class="APP">
  <input type="text" placeholder="請輸入事件" class="input"> 
  <span class="input">
    <button class="button"><i class="hello">
      </i> 送出
    </button>
  </span>
</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
