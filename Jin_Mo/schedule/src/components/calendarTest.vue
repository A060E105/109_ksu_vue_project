<template>
  <FullCalendar 
    :options="calendarOptions" 
    locale='zh-cn' />
</template>


<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    name: 'calendarTest',
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
        calendarOptions: {
            plugins: [ dayGridPlugin, interactionPlugin ],
            initialView: 'dayGridMonth'
        }
        }
    }
}
</script>