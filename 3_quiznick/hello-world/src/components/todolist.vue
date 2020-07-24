<template>

  <div>
    <textinput
    v-model="newtodotxt"
    placeholder="請輸入文字"
    />
    <button     v-on:click="addtodo" >
      新增
      </button>
    <ul v-if="todos.length">
      <todoltem
      v-for="todo in todos "
      :key="todo.id"
      :todo="todo"
      @remove="removetodo"
      />
    </ul>
    <p v-else>
      請建立備忘錄
      </p>
  

    </div>

  </template>

  <script>
    import textinput from './textinput.vue'
    import todoltem from './todoltem.vue'

    let nextid =1 

    export default{
      components:{
        textinput,todoltem

      },
      data(){
        return{
        newtodotxt:'',
        todos:[
          

        ]

        }
      },

    methods:{
      addtodo() {
        const cutext=this.newtodotxt.trim()
        if (cutext){
          this.todos.push({

           id:nextid++,
           text:cutext

          })
          this.newtodotxt=''
        }

      },
      removetodo(idtoremove)
      {
       this.todos=this.todos.filter(todo =>{
         return todo.id   !== idtoremove
       })
      }
      

    }
  }

    </script>