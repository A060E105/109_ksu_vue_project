<template>
    <div class="container">
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
import { mapMutations } from 'vuex';

export default {
    name: 'calendar',
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarApi: null,
            calendarOptions: {
                locale: tw,
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                eventClick: this.eventClick,
                fixedWeekCount: false,
                events: [
                    // { id: '0', title: 'event 1', date: '2020-07-28' },
                    // { id: '1', title: 'event 2', date: '2020-07-28' },
                    // { id: '2', title: 'event 3', date: '2020-07-28' },
                ],
            },
        }
    },
    mounted() {
        this.calendarApi = this.$refs.calendar.getApi();
        console.log(this.calendarApi.getEvents());
    },
    methods: {
        handleDateClick: function(arg) {
            // alert('date click! ' + arg.dateStr);
            console.log(arg.dateStr);
            // let title = prompt('input');
            // this.calendarApi.addEvent({
            //     id: this.calendarApi.getEvents().length,
            //     title: title,
            //     date: arg.dateStr
            // });
            this.setCurrentDate(arg.dateStr);
        },
        eventClick: function(event, jsEvent, pos) {
            console.log('eventClick', event, jsEvent, pos);
            // event.event.remove();
            console.log(event.event.id);
            console.log(event.event.title);
      },
      ...mapMutations(
          ['setCurrentDate']
      )
  }
}
</script>

<style>
/* @import '@fullcalendar/core/main.css'; */
/* @import '@fullcalendar/daygrid/main.css'; */
</style>