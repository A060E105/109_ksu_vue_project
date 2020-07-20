<template>
  <div id="app">
    <input type="text" v-model='newtodo' @keyup.enter='addTodo()'>
    <hr>
    <todo-list :todos='todolist'></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      newtodo: '',
      todolist: []
    }
  },
  components: {
    TodoList
  },
  mounted() {
      this.getStockData();
  },
  methods: {
    addTodo() {
      this.todolist.push({
        text: this.newtodo,
        done: false
      });
      this.newtodo = '';
    },
    replaceData(data) {
      data = JSON.stringify(data);
      data = data.replace(/\:\"\[/, '\:\[');
      data = data.replace(/\"\]\"/, '\"\]');
      data = data.replace(/\:\"\{/g, '\:\{');
      data = data.replace(/\}\}\"/g, '\}\}');
      data = data.replace(/\\/g, '');
      return JSON.parse(data);
    },
    getStockData() {
        axios.get('/tw_stock_earn_values/', {
            baseURL: 'https://cors-anywhere.herokuapp.com/http://trading.maxosoft.com/api/',
            params: {
                stock_index_arys: '["0050","2002"]'
            }
        })
        .then((response) => {
            console.log(response);
            console.log(this.replaceData(response.data));
            // this.jsonData = this.replaceData(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
  }
};
</script>

