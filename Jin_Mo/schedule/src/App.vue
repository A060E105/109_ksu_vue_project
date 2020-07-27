<template>
  <div id="app">
    <calendar-test></calendar-test>
    <!-- <calendar-demo></calendar-demo> -->
  </div>
</template>

<script>
import calendarTest from './components/calendarTest';
// import CalendarDemo from './components/CalendarDemo/CalendarDemo';

export default {
  name: 'App',
  components: {
    calendarTest
    // CalendarDemo
  }
}
</script>

