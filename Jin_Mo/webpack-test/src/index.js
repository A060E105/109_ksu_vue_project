import hello from "./hello";
import Vue from "vue";

hello.sayHello();

new Vue({
    el: "#app",
    mounted() {
        console.log("mounted hello");
    }
});