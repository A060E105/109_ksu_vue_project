<template>
  <ol>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">
      刪除
    </button>
    <input type="checkbox">

  </ol>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>


}