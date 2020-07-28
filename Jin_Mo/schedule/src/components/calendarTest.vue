<template>
    <div>
        <FullCalendar 
            :options="calendarOptions" 
            ref="calendar"
        />
    </div>
</template>


<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import tw from '@fullcalendar/core/locales/zh-tw';

export default {
    name: 'calendarTest',
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                locale: tw,
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                eventClick: this.eventClick,
                fixedWeekCount: false,
                events: [
                    { title: 'event 1', date: '2020-07-28' },
                    { title: 'event 2', date: '2020-07-28' },
                    { title: 'event 3', date: '2020-07-28' },
                    { title: 'event 4', date: '2020-07-29' }
                ],
            }
        }
    },
    mounted() {
        let calendarApi = this.$refs.calendar.getApi();
        console.log(calendarApi.getEvents());
    },
    methods: {
        handleDateClick: function(arg) {
            // alert('date click! ' + arg.dateStr);
            console.log(arg.dateStr);
        },
        eventClick: function(event, jsEvent, pos) {
            console.log('eventClick', event, jsEvent, pos);
            event.event.remove();
      },
  }
}
</script>

<style>
/* @import '@fullcalendar/core/main.css'; */
/* @import '@fullcalendar/daygrid/main.css'; */
</style>