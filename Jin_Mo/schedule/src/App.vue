<template>
  <div id="app">
    <calendar-test></calendar-test>
  </div>
</template>

<script>
import calendarTest from './components/calendarTest';

export default {
  name: 'App',
  components: {
    calendarTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
