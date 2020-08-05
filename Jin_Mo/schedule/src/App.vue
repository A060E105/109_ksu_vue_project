<template>
    <div id="app" class="container-fluid">
        <div class="row">
            <div class="col-2 p-0">
                <left></left>
            </div>
            <div class="col-8 p-0">
                <calendar></calendar>
            </div>
            <div class="col-2 p-0">
                <right></right>
            </div>
        </div>
    </div>
</template>

<script>
import calendar from './components/calendar';
import left from './components/left';
import right from './components/right';

export default {
    name: 'App',
    components: {
        calendar,
        left,
        right
    }
}
</script>

