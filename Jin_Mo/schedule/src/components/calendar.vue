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
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

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
                    // { id: '0', title: '早班', date: '2020-08-05' },
                    // { id: '1', title: '早班', date: '2020-08-06', textColor: '#FF5555' },
                    // { id: '2', date: '2020-08-08', display: 'background', color: '#ff5555' },
                    // { id: '2', title: '休假', date: '2020-08-08',  color: '#ff5555' },
                ],
            },
        }
    },
    created() {
        this.initHoliday();
    },
    mounted() {
        this.calendarApi = this.$refs.calendar.getApi();
        console.log(this.calendarApi.getEvents());
        setTimeout(() => {
            this.setHoliday();
        }, 5000);
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
        setHoliday() {
            this.getHoliday().forEach(element => {
                this.calendarApi.addEvent({
                    id: this.calendarApi.getEvents().length,
                    title: element.name,
                    date: element.date,
                    display: 'list-item',
                    color: '#FF5555'
                });
            });
        },
        ...mapMutations(
            ['setCurrentDate']
        ),
        ... mapActions(
            ['initHoliday']
        ),
        ...mapGetters(
            ['getHoliday']
        )
  }
}
</script>

<style>
/* @import '@fullcalendar/core/main.css'; */
/* @import '@fullcalendar/daygrid/main.css'; */
</style>