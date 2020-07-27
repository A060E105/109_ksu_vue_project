<template>
    <div>
        <calendar-view
            class="theme-default holiday-us-traditional holiday-us-official"
            :show-date='showData'>
            <calendar-view-header
                slot='header'
                slot-scope='t'
                :header-props='t.headerProps'
                @input='setShowDate'>
            </calendar-view-header>
        </calendar-view>
    </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar';
require("vue-simple-calendar/static/css/default.css");
require("vue-simple-calendar/static/css/holidays-us.css");

export default {
    name: 'CalendarDemo',
    components: {
        CalendarView,
        CalendarViewHeader
    },
    data() {
        return {
            showData: new Date()
        }
    },
    methods: {
        setShowDate(d) {
            this.showData = d;
        }
    }
}
</script>