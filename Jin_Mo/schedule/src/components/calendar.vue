<template>
    <div class="container">
        <FullCalendar 
            :options="calendarOptions" 
            ref="calendar"
        />
        <button @click="removeEvents('holiday')" :class="{...myClass}">remove holiday events</button>
        <button @click="removeEvents('test')" :class="{...myClass}">remove test events</button>
    </div>
</template>


<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import tw from '@fullcalendar/core/locales/zh-tw';
import API from './http/api';
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
    name: 'calendar',
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data() {
        return {
            myClass: {
                btn: true,
                'btn-primary': true
            },
            preDateInfo: null,
            calendarApi: null,
            calendarOptions: {
                locale: tw,
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                eventClick: this.eventClick,
                fixedWeekCount: false,
                events: [
                    { id: 'test', title: '早班', date: '2020-09-03' },
                    { id: 'test', title: '早班', date: '2020-08-06', textColor: '#FF5555' },
                    // { id: 'test', date: '2020-08-08', display: 'background', color: '#ff5555' },
                    // { id: 'test', title: '休假', date: '2020-08-08',  color: '#ff5555' },
                    { id: 'test', title: '例假', date: '2020-08-08', display: 'list-item', color: '#FF0000'},
                    { id: 'test', date: '2020-08-08', display: 'background', color: '#bbe9ff'},
                    { id: 'test', date: '2020-08-15', display: 'background', color: '#bbe9ff'},
                    { id: 'test', date: '2020-08-22', display: 'background', color: '#bbe9ff'},
                    { id: 'test', date: '2020-08-29', display: 'background', color: '#bbe9ff'}
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

        // test get calendar function
        this.get_calendar('2020-08-01');
    },
    methods: {
        handleDateClick: function(info) {
            // alert('date click! ' + info.dateStr);
            console.log(info.dateStr);
            // let title = prompt('input');
            // this.calendarApi.addEvent({
            //     id: this.calendarApi.getEvents().length,
            //     title: title,
            //     date: info.dateStr
            // });
            this.setCurrentDate(info.dateStr);
            if (this.preDateInfo != null) {
                console.log('today', this.getToday());
                if (this.preDateInfo.dateStr == this.getToday())
                    this.preDateInfo.dayEl.style.backgroundColor = '#f79d84';
                else
                    this.preDateInfo.dayEl.style.backgroundColor = 'white';
            }
            info.dayEl.style.backgroundColor = '#3fa7d6';
            this.preDateInfo = info;
        },
        eventClick: function(event, jsEvent, pos) {
            console.log('eventClick', event, jsEvent, pos);
            // event.event.remove();
            console.log(event.event.id);
            console.log(event.event.title);
        },
        initHoliday() {
            // get origin holiday data
            API.getHoliday().then(response => {
                // set store.state.holiday
                this.setHoliday(response);

                // get store.state.holiday
                this.getHoliday().forEach(element => {
                    this.calendarApi.addEvent({
                        id: 'holiday',
                        title: element.name,
                        date: element.date,
                        display: 'list-item',
                        color: '#FF5555'
                    });
                });
            })
            .catch(error => {
                console.log(error);
            });
        },
        get_calendar(date) {
            date = new Date(date);
            let shift = date.getDay();
            let calendar = [];
            let day = 1;
            let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
            for(let week_number = 0; week_number < 6; week_number++) {
                let temp = [];
                for(let week = 0; week < 7; week++) {
                    if (shift) {
                        temp.push(-1);
                        shift--;
                    } else {
                        if (day <= lastDay) {
                            temp.push(day++);
                        } else {
                            temp.push(-1);
                        }
                    }
                }
                calendar.push(temp);
            }
            console.log(calendar);
        },
        removeEvents(id) {
            let temp = this.calendarApi.getEvents();
            console.log(temp);
            temp.forEach(event => {
                console.log(event.id);
                if (event.id === id)
                    event.remove();
            });
        },
        ...mapMutations(
            ['setCurrentDate', 'setHoliday']
        ),
        ...mapGetters(
            ['getHoliday', 'getToday']
        )
  }
}
</script>

<style>
/* @import '@fullcalendar/core/main.css'; */
/* @import '@fullcalendar/daygrid/main.css'; */
</style>
