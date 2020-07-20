<template>
    <div>
        <ul>
            <li v-for='(todo, index) in todos'
                :key='index'>
                {{ todo.text }}
                --
                <button @click='removeTodo(index)'>delate</button>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: "TodoList",
    props: {
        todos: { default: [] }
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
            console.log("removeTodo");
        }
    }
};
</script>