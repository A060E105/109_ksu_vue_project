<div id="app">
  <task-list :tasks="tasks"></task-list>
</div>


<template id="task-list">
    <section class="tasks">
      <h1>
        Tasks 
        <transition name="fade">
          <small v-if="incomplete">({{ incomplete }})</small>
        </transition>
        
      </h1>
      <div class="tasks__new input-group">
        <input type="text"
               class="input-group-field"
               v-model="newTask"
               @keyup.enter="addTask"
               placeholder="New task"
        >
        <span class="input-group-button">
          <button @click="addTask" 
                  class="button"
          >
            <i class="fa fa-plus"></i> Add
          </button>
        </span>
      </div>

      <div class="tasks__clear button-group pull-right">
        <button class="button warning small"
                @click="clearCompleted"
        >
          <i class="fa fa-check"></i> Clear Completed
        </button>
        <button class="button alert small"
                @click="clearAll"
        >
          <i class="fa fa-trash"></i> Clear All
        </button>
      </div>
      
      <transition-group name="fade" tag="ul" class="tasks__list no-bullet">
          <task-item v-for="(task, index) in tasks"
                     @remove="removeTask(index)"
                     @complete="completeTask(task)"
                     :task="task"
                     :key="task"
          ></task-item>
      </transition-group>
    </section>
    
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
