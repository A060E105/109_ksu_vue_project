<template>

  <div>
    <textinput
    v-model="newtodotxt"
    placeholder="請輸入文字"
    ＠keyup.enter="addtodo" 
    />
    <ol v-if="todos.lists">
      <todoitem
      v-for="todp in todos "
      :key="todo.id"
      :todo="todo"
      @remove="removetodo"
      />
    </ol>

      <p v-else>
        請新增備忘錄
        </p>

    </div>

  </template>

  <script>
    import textinput from './textinput.vue'
    import todoitem from './todoitem.vue'

    let nextid =1 
    export default{
      components:{
        textinput,todoitem

      },
      data(){
        return{
        newtodotxt:'',
        todos:[

        ]

        }
      }

  
    }
    methods:{
      addtodo() 
      {
        const cutext=this.cutext.trim()
        if (cutext){
          this.todos.push({

           id:nextid++,
           text:cutext

          })
          this.newtodotxt=''
        }

      }
      removetodo(idtoremove)
      {
       this.todos=this.todos.filter(todo =>{
         return todo.id   !== idtoremove
       })
      }
      

    }


    </script>